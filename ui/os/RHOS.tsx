"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  PiArrowUpRight,
  PiBriefcase,
  PiChatCircleText,
  PiDownloadSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiMusicNotesSimple,
  PiReadCvLogo,
  PiTerminalWindow,
  PiUser,
  PiVinylRecord,
} from "react-icons/pi";
import "./rhos.css";

// Paste a Spotify playlist share URL here to mount the embed in the Music window.
const SPOTIFY_PLAYLIST_URL: string = "https://open.spotify.com/playlist/2jj4Wlh0TNf0s0Rab4THuV";
// Optional endpoint returning { isPlaying, title, artist } for the top-bar "now playing" ticker.
const NOW_PLAYING_ENDPOINT: string = "";

type Project = {
  slug: string;
  title: string;
  monogram: string;
  logo: string;
  tileBg: string;
  stack: string[];
  role: string;
  year: string;
  url: string;
  blurb: string;
  images: string[];
};

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  tileColor?: string;
  logoUrl: string;
  imageUrls: string[];
};

export type AboutContent = {
  introText: string;
  biography: string;
  headlines: string[];
  profileImageUrl: string;
};


type WinId = "about" | "work" | "github" | "music" | "terminal" | "cv" | "project" | "contact";

type WinState = { open: boolean; x: number; y: number; w: number; z: number };

type GithubEvent = {
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: { commits?: { message: string }[] };
};

type TermLine = { text: string; color: string };

function getAppViewport() {
  const rawScale = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--app-scale")
  );
  const scale = Number.isFinite(rawScale) && rawScale > 0 ? rawScale : 1;

  return {
    width: window.innerWidth / scale,
    height: window.innerHeight / scale,
    scale,
  };
}

const DOCK_ITEMS: { id: WinId; Icon: React.ComponentType; label: string }[] = [
  { id: "about", Icon: PiUser, label: "About" },
  { id: "work", Icon: PiBriefcase, label: "Work" },
  // { id: "music", Icon: PiVinylRecord, label: "Music" },
  { id: "cv", Icon: PiReadCvLogo, label: "CV" },
  { id: "contact", Icon: PiChatCircleText, label: "Contact" },
];

function ago(iso: string) {
  const m = Math.max(1, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (m < 60) return m + "m";
  const h = Math.round(m / 60);
  return h < 24 ? h + "h" : Math.round(h / 24) + "d";
}

const VERBS: Record<string, string> = {
  PushEvent: "push",
  CreateEvent: "create",
  WatchEvent: "star",
  PullRequestEvent: "pr",
  IssuesEvent: "issue",
  ForkEvent: "fork",
  ReleaseEvent: "release",
  PublicEvent: "public",
};

export default function RHOS({
  bootIntro = true,
  projects = [],
  about,
}: {
  bootIntro?: boolean;
  projects?: PortfolioProject[];
  about?: AboutContent | null;
}) {
  const initialViewport = useMemo(() => getAppViewport(), []);
  const cx = Math.max(60, (initialViewport.width - 560) / 2);

  const [booting, setBooting] = useState(() => bootIntro);
  const [now, setNow] = useState(() => new Date());
  const [gh, setGh] = useState<GithubEvent[]>([]);
  const [viewport, setViewport] = useState(initialViewport);
  const zTopRef = useRef(100);
  const [nowPlaying, setNowPlaying] = useState<{ title: string; artist: string; isPlaying: boolean } | null>(null);
  const isAppViewport = viewport.width < 1024;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectImageIndex, setProjectImageIndex] = useState(0);
  const [termLines, setTermLines] = useState<TermLine[]>([
    { text: "RH·OS — type 'help' to look around", color: "var(--color-neutral-500)" },
  ]);
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [wins, setWins] = useState<Record<WinId, WinState>>({
    about: { open: true, x: cx, y: 90, w: 560, z: 100 },
    work: { open: false, x: cx - 120, y: 140, w: 620, z: 99 },
    github: { open: false, x: cx + 140, y: 180, w: 520, z: 98 },
    music: { open: false, x: cx + 60, y: 120, w: 420, z: 97 },
    terminal: { open: false, x: cx - 60, y: 200, w: 560, z: 96 },
    cv: { open: false, x: cx + 20, y: 70, w: 600, z: 95 },
    project: { open: false, x: cx + 100, y: 160, w: 480, z: 94 },
    contact: { open: false, x: cx + 40, y: 110, w: 440, z: 93 },
  });

  const termRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<{ id: WinId; dx: number; dy: number } | null>(null);
  const winsRef = useRef(wins);

  useEffect(() => {
    winsRef.current = wins;
  }, [wins]);

  useEffect(() => {
    if (!bootIntro) return;
    const bootT = setTimeout(() => setBooting(false), 1600);
    return () => clearTimeout(bootT);
  }, [bootIntro]);

  useEffect(() => {
    const tick = setInterval(() => setNow(new Date()), 30000);

    const onResize = () => setViewport(getAppViewport());
    window.addEventListener("resize", onResize);

    let npT: ReturnType<typeof setInterval> | undefined;
    if (NOW_PLAYING_ENDPOINT) {
      const poll = () =>
        fetch(NOW_PLAYING_ENDPOINT)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) => setNowPlaying(d && d.isPlaying ? d : null))
          .catch(() => {});
      poll();
      npT = setInterval(poll, 30000);
    }

    fetch("https://api.github.com/users/twinnytwin22/events/public")
      .then((r) => (r.ok ? r.json() : []))
      .then((ev) => setGh((ev || []).slice(0, 6)))
      .catch(() => {});

    return () => {
      clearInterval(tick);
      if (npT) clearInterval(npT);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleDragStart = useCallback(
    (id: WinId, e: React.MouseEvent) => {
      if (isAppViewport || (e.target as HTMLElement).tagName === "BUTTON") return;
      const w = winsRef.current[id];
      dragRef.current = {
        id,
        dx: e.clientX / viewport.scale - w.x,
        dy: e.clientY / viewport.scale - w.y,
      };
    },
    [isAppViewport, viewport.scale]
  );

  const openWin = useCallback((id: WinId) => {
    const z = ++zTopRef.current;
    setWins((w) => ({ ...w, [id]: { ...w[id], open: true, z } }));
    if (id === "terminal") setTimeout(() => termRef.current && termRef.current.focus(), 60);
  }, []);

  const runCmd = useCallback(
    (cmd: string) => {
      const out: TermLine[] = [];
      const push = (text: string, color?: string) => out.push({ text, color: color || "var(--color-neutral-300)" });
      const c = cmd.trim().toLowerCase();
      if (c === "help") {
        push("commands: about · work · music · github · cv · contact · clear", "var(--color-neutral-500)");
      } else if (c === "about" || c === "work" || c === "music" || c === "github" || c === "contact") {
        openWin(c as WinId);
        push("opening " + c + "…", "var(--color-neutral-500)");
      } else if (c === "resume" || c === "cv") {
        openWin("cv");
        push("opening cv…", "var(--color-neutral-500)");
      } else if (c === "clear") {
        setTermLines([]);
        return;
      } else if (c === "sudo hire") {
        push("access granted. inbox: randal.herndon@gmail.com", "#7ee29b");
      } else if (c) {
        push("command not found: " + c + " — try 'help'", "#e0655f");
      }
      setTermLines((lines) => [...lines, { text: "rh@os:~$ " + cmd, color: "var(--color-neutral-600)" }, ...out]);
    },
    [openWin]
  );

  const onDragMove = useCallback((e: React.MouseEvent) => {
    if (!dragRef.current) return;
    const { id, dx, dy } = dragRef.current;
    setWins((w) => ({
      ...w,
      [id]: {
        ...w[id],
        x: Math.max(-200, e.clientX / viewport.scale - dx),
        y: Math.max(34, e.clientY / viewport.scale - dy),
      },
    }));
  }, [viewport.scale]);

  const onDragEnd = useCallback(() => {
    dragRef.current = null;
  }, []);

  const handleContactSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      if (!res.ok) throw new Error("request failed");
      setContactStatus("success");
      setContactForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setContactStatus("error");
    }
  }, [contactForm]);

  const meta: Record<WinId, string> = {
    about: "about.rh",
    work: "work — selected",
    github: "github — live",
    music: "music — on rotation",
    terminal: "terminal",
    cv: "cv — randal herndon",
    project: (selectedProject ? selectedProject.slug : "project") + ".app",
    contact: "let's chat",
  };

  const openWindows = (Object.keys(wins) as WinId[])
    .filter((id) => wins[id].open)
    .sort((a, b) => wins[a].z - wins[b].z);

  const visibleWindowIds = isAppViewport && openWindows.length
    ? [openWindows[openWindows.length - 1]]
    : openWindows;

  const windows = visibleWindowIds
    .map((id) => {
      const w = wins[id];
      return {
        id,
        title: meta[id],
        x: isAppViewport ? 0 : w.x,
        y: isAppViewport ? 0 : w.y,
        w: isAppViewport ? viewport.width : w.w,
        z: w.z,
        focus: () => {
          const z = ++zTopRef.current;
          setWins((st) => ({ ...st, [id]: { ...st[id], z } }));
        },
        close: (e: React.MouseEvent) => {
          e.stopPropagation();
          setWins((st) => ({ ...st, [id]: { ...st[id], open: false } }));
        },
      };
    });

  const push = gh.find((e) => e.type === "PushEvent");
  const ghTicker = push
    ? "latest push → " + push.repo.name.split("/")[1] + " · " + ago(push.created_at) + " ago"
    : "listening to github…";
  const ghEvents = gh.map((e) => ({
    verb: VERBS[e.type] || e.type.replace("Event", "").toLowerCase(),
    detail: e.repo.name.split("/")[1] + (e.payload?.commits?.[0] ? ' — "' + e.payload.commits[0].message.split("\n")[0] + '"' : ""),
    when: ago(e.created_at),
  }));

  const embed = SPOTIFY_PLAYLIST_URL
    ? SPOTIFY_PLAYLIST_URL.replace("open.spotify.com/", "open.spotify.com/embed/").split("?")[0]
    : "";

  const dock = DOCK_ITEMS.map((d) => ({
    ...d,
    open: () => openWin(d.id),
    labelColor: wins[d.id].open ? "var(--color-neutral-200)" : "var(--color-neutral-600)",
  }));

  const portfolioWork: Project[] | null = projects.length
    ? projects.map((project) => ({
        slug: project.id,
        title: project.title,
        monogram:
          project.title
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0])
            .join("")
            .toUpperCase() || "•",
        logo: project.logoUrl,
        tileBg: project.tileColor || "linear-gradient(135deg, #1a1a1f, #26262c)",
        stack: project.tags,
        role: "Selected work",
        year: "",
        url: project.url,
        blurb: project.description,
        images: project.imageUrls,
      }))
    : null;

  const webWork = portfolioWork?.map((p) => ({
    ...p,
    hasLogo: !!p.logo,
    noLogo: !p.logo,
    stackLine: p.stack.slice(0, 3).join(" · "),
    openDetail: () => {
      setSelectedProject(p);
      setProjectImageIndex(0);
      openWin("project");
    },
  }));

  const backToWork = () => {
    setWins((st) => ({ ...st, project: { ...st.project, open: false } }));
    openWin("work");
  };

  const phxTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Phoenix",
  }).format(now);

  const onTermKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCmd(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <div
      className="rhos-root"
      style={{
        width: viewport.width,
        height: viewport.height,
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, #17171b, #0a0a0c 70%)",
        userSelect: "none",
      }}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
    >
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div
          style={{
            fontFamily: "owners, var(--font-heading), sans-serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "11vw",
            letterSpacing: "-0.02em",
            color: "#151518",
            lineHeight: 0.9,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Randal
          <br />
          Herndon
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          borderBottom: "1px solid var(--color-divider)",
          background: "color-mix(in srgb, #0a0a0c 75%, transparent)",
          backdropFilter: "blur(12px)",
          zIndex: 5000,
          fontSize: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="/rh.svg" alt="RH" style={{ height: 14, filter: "invert(1)" }} />
          <span style={{ color: "var(--color-neutral-400)", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11, letterSpacing: "0.08em" }}>
            RH·OS v2.0
          </span>
        </div>
        <div className="rhos-topbar-status" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--color-neutral-500)", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11 }}>
          {!!nowPlaying && (
            <span style={{ display: "flex", alignItems: "center", gap: 7, overflow: "hidden", whiteSpace: "nowrap", color: "var(--color-neutral-300)" }}>
              <PiMusicNotesSimple style={{ fontSize: 13, animation: "rhos-pulse 2s ease-in-out infinite" }} />
              {nowPlaying.title + " — " + nowPlaying.artist}
            </span>
          )}
          <span className="rhos-github-ticker" style={{ display: "flex", alignItems: "center", gap: 7, overflow: "hidden", whiteSpace: "nowrap" }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#7ee29b", animation: "rhos-pulse 2.4s ease-in-out infinite", flexShrink: 0 }} />
            {ghTicker}
          </span>
          <div className="rhos-topbar-actions">
            <button
              type="button"
              onClick={() => openWin("github")}
              className={`rhos-topbar-btn${wins.github.open ? " is-open" : ""}`}
              aria-label="Open GitHub activity"
            >
              <PiGithubLogo />
              <span>GitHub</span>
            </button>
            <button
              type="button"
              onClick={() => openWin("terminal")}
              className={`rhos-topbar-btn${wins.terminal.open ? " is-open" : ""}`}
              aria-label="Open terminal"
            >
              <PiTerminalWindow />
              <span>Terminal</span>
            </button>
          </div>
          <span style={{ color: "var(--color-neutral-300)" }}>{phxTime} PHX</span>
        </div>
      </div>

      {windows.map((w) => (
        <div
          key={w.id}
          className={isAppViewport ? "rhos-window rhos-app-screen" : "rhos-window"}
          style={{
            position: "absolute",
            left: w.x,
            top: w.y,
            width: w.w,
            zIndex: w.z,
            border: "1px solid var(--color-neutral-800)",
            borderRadius: "var(--radius-lg)",
            background: "color-mix(in srgb, #121215 92%, transparent)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 24px 60px -12px rgba(0,0,0,0.7)",
            animation: "rhos-win-in 0.18s ease-out",
            display: "flex",
            flexDirection: "column",
            maxHeight: isAppViewport ? "100dvh" : "78vh",
          }}
          onMouseDown={w.focus}
        >
          <div
            className="rhos-window-header"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderBottom: "1px solid var(--color-divider)",
              borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
            }}
            onMouseDown={(e) => handleDragStart(w.id, e)}
          >
            <button
              onClick={w.id === "project" ? backToWork : w.close}
              aria-label={w.id === "project" ? "Back to work" : "Close"}
              className="rhos-close-btn"
              style={{ width: 11, height: 11, borderRadius: 999, background: "var(--color-neutral-700)", border: "none", cursor: "pointer", padding: 0 }}
            />
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-neutral-400)", fontFamily: "ui-monospace, Menlo, monospace" }}>
              {w.title}
            </span>
          </div>
          <div
            className="rhos-window-body"
            style={{
              overflow: "auto",
              userSelect: "text",
              minHeight: 0,
              height: w.id === "cv" ? "min(560px, calc(78vh - 42px))" : undefined,
            }}
          >
            {w.id === "about" && (
              <div className="rhos-about-screen" style={{ padding: 22, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div className="lighten rhos-about-photo" style={{ flexShrink: 0 }}>
                  <img
                    src={about?.profileImageUrl || "/randal.jpeg"}
                    alt={about?.introText || "Randal Herndon"}
                    style={{ width: 96, height: 96, borderRadius: "var(--radius-md)", objectFit: "cover" }}
                  />
                </div>
                <div className="rhos-about-copy">
                  <div className="rhos-about-title" style={{ fontSize: 20, fontFamily: "owners, var(--font-heading), sans-serif", fontWeight: 700, fontStyle: "italic", textTransform: "uppercase", marginBottom: 6 }}>
                    {about?.introText || "Randal Herndon"}
                  </div>
                  <div className="rhos-about-meta" style={{ fontSize: 12, color: "var(--color-neutral-500)", fontFamily: "ui-monospace, Menlo, monospace", marginBottom: 12 }}>
                    {about?.headlines?.length
                      ? about.headlines.join(" · ")
                      : "product developer · phoenix, az"}
                  </div>
                  <p className="rhos-about-bio" style={{ fontSize: 13, lineHeight: 1.6, color: "var(--color-neutral-300)", margin: "0 0 14px" }}>
                    {about?.biography ||
                      "15 years building web products and the systems behind them — museum-scale launches, ticketing APIs wired to live dashboards, and products that produce measurable results."}
                  </p>
                  <div className="rhos-about-actions" style={{ display: "flex", gap: 8 }}>
                    <a href="/cv" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ fontSize: 12 }}>
                      Resume
                    </a>
                    <button
                      onClick={() => openWin("contact")}
                      aria-label="Contact"
                      title="Contact"
                      className="btn btn-secondary"
                      style={{ fontSize: 14, cursor: "pointer" }}
                    >
                      <PiChatCircleText />
                      <span className="sr-only">Contact</span>
                    </button>
                    <a
                      href="https://www.linkedin.com/in/randalherndon/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                      className="btn btn-secondary"
                      style={{ fontSize: 14 }}
                    >
                      <PiLinkedinLogo />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {w.id === "work" && (
              <div className="rhos-work-screen" style={{ padding: 18 }}>
                <div className="rhos-screen-kicker" style={{ fontSize: 11, color: "var(--color-neutral-600)", fontFamily: "ui-monospace, Menlo, monospace", marginBottom: 14 }}>
                  selected web work
                </div>
                <div className="rhos-work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))", gap: 14 }}>
                  {webWork && webWork.map((p) => (
                    <button
                      key={p.slug}
                      onClick={p.openDetail}
                      className="rhos-work-tile"
                      style={{
                        position: "relative",
                        aspectRatio: "1",
                        borderRadius: 18,
                        border: "1px solid var(--color-neutral-800)",
                        background: p.tileBg,
                        cursor: "pointer",
                        overflow: "hidden",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {p.hasLogo && (
                        <img
                          src={p.logo}
                          alt={`${p.title} logo`}
                          style={{
                            position: "absolute",
                            inset: "16%",
                            width: "68%",
                            height: "68%",
                            objectFit: "contain",
                            objectPosition: "center",
                            opacity: 1,
                            filter: "none",
                          }}
                        />
                      )}
                      {p.noLogo && (
                        <span style={{ fontFamily: "owners, var(--font-heading), sans-serif", fontWeight: 700, fontStyle: "italic", fontSize: 26, color: "var(--color-neutral-300)" }}>
                          {p.monogram}
                        </span>
                      )}
                      <div
                        className="rhos-work-caption"
                        style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, padding: 8, textAlign: "center" }}
                      >
                        <span style={{ fontSize: 12, fontWeight: 600 }}>{p.title}</span>
                        <span style={{ fontSize: 9.5, fontFamily: "ui-monospace, Menlo, monospace", lineHeight: 1.5 }}>{p.stackLine}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {w.id === "project" && selectedProject && (
              <div className="rhos-project-screen" style={{ padding: 22 }}>
                {selectedProject.images.length > 0 && (
                  <div className="rhos-project-media-block" style={{ marginBottom: 18 }}>
                    <div
                      className="rhos-project-media"
                      style={{
                        position: "relative",
                        aspectRatio: "16 / 9",
                        overflow: "hidden",
                        borderRadius: 12,
                        border: "1px solid var(--color-neutral-800)",
                        background: "#09090b",
                      }}
                    >
                      <img
                        src={selectedProject.images[projectImageIndex]}
                        alt={`${selectedProject.title} showcase ${projectImageIndex + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                      />
                    </div>
                    {selectedProject.images.length > 1 && (
                      <div className="rhos-project-pager" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={() =>
                            setProjectImageIndex((index) =>
                              (index - 1 + selectedProject.images.length) % selectedProject.images.length
                            )
                          }
                          aria-label="Previous project image"
                        >
                          ←
                        </button>
                        <span style={{ fontSize: 11, color: "var(--color-neutral-500)", fontFamily: "ui-monospace, Menlo, monospace" }}>
                          {projectImageIndex + 1} / {selectedProject.images.length}
                        </span>
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={() =>
                            setProjectImageIndex((index) => (index + 1) % selectedProject.images.length)
                          }
                          aria-label="Next project image"
                        >
                          →
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <div className="rhos-project-heading" style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
                  <div
                    style={{
                      position: "relative",
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      border: "1px solid var(--color-neutral-800)",
                      background: selectedProject.tileBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {selectedProject.logo ? (
                      <img
                        src={selectedProject.logo}
                        alt={`${selectedProject.title} logo`}
                        style={{
                          position: "absolute",
                          inset: 8,
                          width: 40,
                          height: 40,
                          objectFit: "contain",
                          objectPosition: "center",
                          opacity: 1,
                          filter: "none",
                        }}
                      />
                    ) : (
                      <span style={{ fontFamily: "owners, var(--font-heading), sans-serif", fontWeight: 700, fontStyle: "italic", fontSize: 20, color: "var(--color-neutral-300)" }}>
                        {selectedProject.monogram}
                      </span>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 19, fontFamily: "owners, var(--font-heading), sans-serif", fontWeight: 700, fontStyle: "italic", textTransform: "uppercase" }}>
                      {selectedProject.title}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--color-neutral-500)", fontFamily: "ui-monospace, Menlo, monospace" }}>
                      {[selectedProject.role, selectedProject.year].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                </div>
                <p className="rhos-project-blurb" style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--color-neutral-300)", margin: "0 0 14px" }}>{selectedProject.blurb}</p>
                <div className="rhos-project-tags" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                  {selectedProject.stack.map((t) => (
                    <span key={t} className="tag tag-outline" style={{ fontSize: 11 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="rhos-project-actions" style={{ display: "flex", gap: 10 }}>
                  {selectedProject.url && (
                    <a href={selectedProject.url} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: 13, whiteSpace: "nowrap" }}>
                      View site <PiArrowUpRight />
                    </a>
                  )}
                  <button onClick={backToWork} className="btn btn-ghost" style={{ fontSize: 13, whiteSpace: "nowrap", cursor: "pointer" }}>
                    ← All work
                  </button>
                </div>
              </div>
            )}

            {w.id === "github" && (
              <div className="rhos-github-screen" style={{ padding: 14, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                {ghEvents.length === 0 && <div style={{ color: "var(--color-neutral-500)", padding: "6px 8px" }}>no recent public activity — check back soon</div>}
                {ghEvents.map((e, i) => (
                  <div key={i} className="rhos-gh-row" style={{ display: "flex", gap: 10, alignItems: "baseline", padding: "6px 8px", borderRadius: "var(--radius-sm)" }}>
                    <span style={{ color: "#7ee29b", flexShrink: 0 }}>{e.verb}</span>
                    <span style={{ color: "var(--color-neutral-300)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.detail}</span>
                    <span style={{ color: "var(--color-neutral-600)", marginLeft: "auto", flexShrink: 0 }}>{e.when}</span>
                  </div>
                ))}
                <div className="rhos-github-footer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 8px" }}>
                  <span style={{ color: "var(--color-neutral-600)", fontSize: 11 }}>live · api.github.com/users/twinnytwin22</span>
                  <a href="https://github.com/twinnytwin22" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: 11 }}>
                    <PiGithubLogo /> View profile <PiArrowUpRight />
                  </a>
                </div>
              </div>
            )}

            {w.id === "music" && (
              <div style={{ padding: 14 }}>
                {embed ? (
                  <iframe src={embed} style={{ width: "100%", height: 352, border: 0, borderRadius: 10, display: "block" }} allow="encrypted-media" loading="lazy" />
                ) : (
                  <div
                    style={{
                      border: "1px dashed var(--color-neutral-800)",
                      borderRadius: "var(--radius-md)",
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontFamily: "ui-monospace, Menlo, monospace",
                      fontSize: 12,
                      color: "var(--color-neutral-500)",
                    }}
                  >
                    spotify playlist mounts here
                    <br />
                    (add a playlist URL to RHOS.tsx)
                  </div>
                )}
          
              </div>
            )}

            {w.id === "cv" && (
              <div className="rhos-cv-screen" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="rhos-cv-actions" style={{ display: "flex", gap: 8, padding: "10px 14px", borderBottom: "1px solid var(--color-divider)", alignItems: "center" }}>
                  <a href="/cv" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ fontSize: 12, whiteSpace: "nowrap" }}>
                    <PiDownloadSimple /> Print / save PDF
                  </a>
                  <a href="/cv" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: 12, whiteSpace: "nowrap" }}>
                    Open full screen
                  </a>
                </div>
                <iframe
                  src="/cv?embedded=1"
                  style={{ width: "100%", height: "100%", minHeight: 0, border: 0, background: "#f6f2e9", display: "block" }}
                  title="Resume"
                />
              </div>
            )}

            {w.id === "contact" && (
              <form className="rhos-contact-screen" onSubmit={handleContactSubmit} style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                <p className="rhos-contact-direct" style={{ fontSize: 12, color: "var(--color-neutral-500)", margin: 0 }}>
                  or email me directly at <a href="mailto:randal.herndon@gmail.com">randal.herndon@gmail.com</a>
                </p>
                <div className="field">
                  <label htmlFor="rhos-contact-name">Name</label>
                  <input
                    id="rhos-contact-name"
                    className="input"
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="rhos-contact-email">Email</label>
                  <input
                    id="rhos-contact-email"
                    className="input"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="rhos-contact-subject">Subject</label>
                  <input
                    id="rhos-contact-subject"
                    className="input"
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm((f) => ({ ...f, subject: e.target.value }))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="rhos-contact-message">Message</label>
                  <textarea
                    id="rhos-contact-message"
                    className="input"
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <div className="rhos-contact-actions" style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <button type="submit" disabled={contactStatus === "sending"} className="btn btn-primary" style={{ fontSize: 13 }}>
                    {contactStatus === "sending" ? "Sending…" : "Send message"}
                  </button>
                  <a href="https://calendly.com/djtwinnytwin/1on1" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: 13 }}>
                    Schedule a meeting
                  </a>
                </div>
                {contactStatus === "success" && <p style={{ fontSize: 12, color: "#7ee29b", margin: 0 }}>Message sent — thanks!</p>}
                {contactStatus === "error" && <p style={{ fontSize: 12, color: "#e0655f", margin: 0 }}>Something went wrong — try the email link above.</p>}
              </form>
            )}

            {w.id === "terminal" && (
              <div
                className="rhos-terminal-screen"
                style={{ padding: 14, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12.5, lineHeight: 1.7, minHeight: 220, display: "flex", flexDirection: "column" }}
                onClick={() => termRef.current && termRef.current.focus()}
              >
                {termLines.map((line, i) => (
                  <div key={i} style={{ whiteSpace: "pre-wrap", color: line.color }}>
                    {line.text}
                  </div>
                ))}
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ color: "#7ee29b" }}>rh@os:~$</span>
                  <input
                    ref={termRef}
                    onKeyDown={onTermKey}
                    style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--color-text)", fontFamily: "inherit", fontSize: "inherit" }}
                    autoFocus
                    spellCheck={false}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div
        className="rhos-dock"
        style={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 6,
          padding: "8px 10px",
          border: "1px solid var(--color-neutral-800)",
          borderRadius: 16,
          background: "color-mix(in srgb, #121215 80%, transparent)",
          backdropFilter: "blur(16px)",
          zIndex: 6000,
          boxShadow: "0 16px 40px -8px rgba(0,0,0,0.6)",
        }}
      >
        {dock.map((d) => (
          <button
            key={d.id}
            onClick={d.open}
            className="rhos-dock-btn"
            style={{
              width: 58,
              height: 54,
              borderRadius: 12,
              border: "1px solid transparent",
              background: "transparent",
              color: "var(--color-neutral-300)",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <d.Icon />
            <span style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "ui-monospace, Menlo, monospace", color: d.labelColor }}>{d.label}</span>
          </button>
        ))}
      </div>

      {booting && (
        <div
          onClick={() => setBooting(false)}
          style={{ position: "absolute", inset: 0, background: "#060607", zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 13, color: "var(--color-neutral-400)", lineHeight: 2 }}>
            <div>
              <span style={{ color: "#7ee29b" }}>✓</span> RH·OS kernel loaded
            </div>
            <div>
              <span style={{ color: "#7ee29b" }}>✓</span> connecting github, spotify…
            </div>
            <div style={{ color: "var(--color-neutral-600)" }}>
              ▸ mounting portfolio… <span style={{ animation: "rhos-pulse 1s infinite" }}>█</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

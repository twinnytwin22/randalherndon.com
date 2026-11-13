import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { getProject, monogram } from "@/lib/portfolio";
import styles from "../portfolio.module.css";

export const revalidate = 60;

type Props = {
  params: Promise<{ projectId: string }>;
};

async function loadProject(projectId: string) {
  return getProject(projectId).catch(() => null);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = await loadProject(projectId);
  if (!project) return { title: "Project not found" };

  const image = project.imageUrls[0] || project.logoUrl;
  return {
    title: project.title,
    description: project.description.slice(0, 160),
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description.slice(0, 160),
      images: image ? [{ url: image, alt: project.title }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  const project = await loadProject(projectId);
  if (!project) notFound();
  // Old _id-based links → canonical slug URL.
  if (projectId !== project.slug) permanentRedirect(`/portfolio/${project.slug}`);

  const [hero, ...gallery] = project.imageUrls;

  return (
    <main className={styles.page}>
      <nav className={styles.toolbar} aria-label="Site">
        <Link href="/">← RH·OS</Link>
        <span className={styles.crumb}>
          <Link href="/portfolio">work</Link> / {project.title}
        </span>
      </nav>

      <article className={styles.inner}>
        <header className={styles.detailHead}>
          <div
            className={styles.detailLogo}
            style={{ background: project.tileColor || "linear-gradient(135deg, #1a1a1f, #26262c)" }}
          >
            {project.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.logoUrl} alt="" />
            ) : (
              <span className={styles.monogram} aria-hidden="true">
                {monogram(project.title)}
              </span>
            )}
          </div>
          <div>
            <p className={styles.kicker}>{[project.role || "Project", project.year].filter(Boolean).join(" · ")}</p>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
        </header>

        <div className={styles.detailGrid}>
          <div>
            {hero && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={hero}
                alt={`${project.title} — showcase 1`}
                style={{ width: "100%", height: "auto", borderRadius: 14, border: "1px solid var(--n800)" }}
              />
            )}
          </div>
          <div>
            {project.description && <p className={styles.blurb}>{project.description}</p>}
            {project.tags.length > 0 && (
              <ul className={styles.tags} aria-label="Tags">
                {project.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <div className={styles.actions}>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                  View site ↗
                </a>
              )}
              <Link href="/portfolio" className={styles.btn}>
                ← All work
              </Link>
            </div>
          </div>
        </div>

        {gallery.length > 0 && (
          <div className={styles.gallery}>
            {gallery.map((src, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`${project.title} — showcase ${index + 2}`} loading="lazy" />
            ))}
          </div>
        )}
      </article>
    </main>
  );
}

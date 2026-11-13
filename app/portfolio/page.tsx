import type { Metadata } from "next";
import Link from "next/link";
import { getProjects, monogram } from "@/lib/portfolio";
import styles from "./portfolio.module.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Work",
  description: "Selected web platforms and digital products by Randal Herndon, Digital Product Manager.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  const projects = await getProjects().catch(() => []);

  return (
    <main className={styles.page}>
      <nav className={styles.toolbar} aria-label="Site">
        <Link href="/">← RH·OS</Link>
        <span className={styles.crumb}>work</span>
      </nav>

      <div className={styles.inner}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Selected web work</p>
          <h1 className={styles.title}>Work</h1>
        </header>

        {projects.length === 0 ? (
          <p className={styles.empty}>Projects are loading in — check back soon.</p>
        ) : (
          <ul className={styles.grid}>
            {projects.map((project) => (
              <li key={project.id}>
                <Link href={`/portfolio/${project.slug}`} className={styles.card}>
                  <div
                    className={styles.tile}
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
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{project.title}</h2>
                    {(project.role || project.year) && (
                      <p className={styles.kicker} style={{ margin: 0 }}>
                        {[project.role, project.year].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {project.description && <p className={styles.cardDesc}>{project.description}</p>}
                    {project.tags.length > 0 && (
                      <ul className={styles.tags} aria-label="Tags">
                        {project.tags.slice(0, 4).map((tag) => (
                          <li key={tag} className={styles.tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

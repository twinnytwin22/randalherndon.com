import type {Metadata} from 'next'
import Link from 'next/link'
import {getResume, type ResumeExperience} from '@/lib/providers/sanity/resume'
import {PrintResumeButton} from './PrintResumeButton'
import styles from './resume.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Randal Herndon — Digital Marketing & Web Experience Leader',
  description:
    'Resume of Randal Herndon, a digital marketing, marketing technology, and web experience leader in Phoenix, Arizona.',
}

function formatMonthYear(value?: string) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

function ExperienceGroup({
  title,
  entries,
  startPrintPage,
}: {
  title: string
  entries: ResumeExperience[]
  startPrintPage?: boolean
}) {
  if (!entries.length) return null

  return (
    <section
      className={`${styles.section} ${startPrintPage ? styles.startPrintPage : ''}`}
    >
      <h2>{title}</h2>
      <div className={styles.timeline}>
        {entries.map((entry) => (
          <article className={styles.role} key={entry._key}>
            <div className={styles.roleHeader}>
              <div>
                <h3>{entry.role}</h3>
                <p className={styles.company}>{entry.company}</p>
              </div>
              <div className={styles.roleMeta}>
                <span>
                  {formatMonthYear(entry.startDate)} —{' '}
                  {entry.current ? 'Present' : formatMonthYear(entry.endDate)}
                </span>
                {entry.location && <span>{entry.location}</span>}
              </div>
            </div>
            <ul>
              {entry.highlights?.map((highlight, index) => (
                <li key={`${entry._key}-${index}`}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default async function ResumePage() {
  const resume = await getResume()

  if (!resume) {
    return (
      <main className={styles.missing}>
        <p>Resume content is being prepared.</p>
        <Link href="/">Return home</Link>
      </main>
    )
  }

  const professional = resume.experience.filter(
    (entry) => entry.section === 'professional',
  )
  const additional = resume.experience.filter(
    (entry) => entry.section === 'additional',
  )

  return (
    <main className={styles.canvas}>
      <div className={styles.toolbar}>
        <Link href="/">← RH·OS</Link>
        <span>Live from Sanity</span>
        <PrintResumeButton />
      </div>

      <article className={styles.resume}>
        <header className={styles.header}>
          <div className={styles.identity}>
            <span className={styles.eyebrow}>Curriculum vitae / 2026</span>
            <h1>{resume.name}</h1>
            <p className={styles.headline}>{resume.headline}</p>
          </div>
          <div className={styles.monogram} aria-hidden="true">
            RH
          </div>
          <address className={styles.contact}>
            {resume.location && <span>{resume.location}</span>}
            {resume.phone && <a href={`tel:${resume.phone}`}>{resume.phone}</a>}
            {resume.email && (
              <a href={`mailto:${resume.email}`}>{resume.email}</a>
            )}
            {resume.linkedinUrl && (
              <a href={resume.linkedinUrl}>linkedin.com/in/randalherndon</a>
            )}
            {resume.websiteUrl && (
              <a href={resume.websiteUrl}>randalherndon.com</a>
            )}
          </address>
        </header>

        <div className={styles.rule} />

        <section className={`${styles.section} ${styles.introGrid}`}>
          <div>
            <h2>Profile</h2>
            <p className={styles.summary}>{resume.summary}</p>
          </div>
          <aside>
            <h2>Core expertise</h2>
            <ul className={styles.expertise}>
              {resume.coreExpertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <ExperienceGroup title="Professional experience" entries={professional} />
        <ExperienceGroup
          title="Additional experience"
          entries={additional}
          startPrintPage
        />

        <div className={styles.footerGrid}>
          <section className={styles.section}>
            <h2>Education</h2>
            <div className={styles.education}>
              {resume.education.map((entry) => (
                <article key={entry._key}>
                  <div>
                    <h3>{entry.credential}</h3>
                    <p>{entry.institution}</p>
                  </div>
                  {entry.completionDate && (
                    <span>{formatMonthYear(entry.completionDate)}</span>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Platforms & tools</h2>
            <p className={styles.platforms}>{resume.platforms.join(' · ')}</p>
          </section>
        </div>

        <footer className={styles.footer}>
          <span>Randal Herndon</span>
          <span>Digital systems with measurable outcomes.</span>
        </footer>
      </article>
    </main>
  )
}

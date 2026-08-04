import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import type {
  Resume,
  ResumeEducation,
  ResumeExperience,
} from '@/lib/providers/sanity/resume'

const colors = {
  ink: '#111318',
  muted: '#4f5661',
  accent: '#c43f18',
  rule: '#a9adb3',
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingHorizontal: 35,
    paddingBottom: 29,
    color: colors.ink,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 8.8,
    lineHeight: 1.28,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 9,
    borderBottomWidth: 3,
    borderBottomColor: colors.ink,
  },
  headerIdentity: {
    width: '68%',
  },
  eyebrow: {
    marginBottom: 4,
    color: colors.accent,
    fontFamily: 'Courier-Bold',
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 31,
    lineHeight: 0.95,
    letterSpacing: -1.1,
    textTransform: 'uppercase',
  },
  headline: {
    marginTop: 4,
    color: colors.muted,
    fontFamily: 'Helvetica-Bold',
    fontSize: 10.7,
  },
  contact: {
    width: '28%',
    gap: 1.5,
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 7.2,
    lineHeight: 1.15,
  },
  contactLink: {
    color: colors.muted,
    textDecoration: 'none',
  },
  intro: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 11,
    paddingBottom: 9,
  },
  profile: {
    width: '62%',
  },
  expertiseColumn: {
    width: '38%',
  },
  sectionLabel: {
    marginBottom: 5,
    color: colors.accent,
    fontFamily: 'Courier-Bold',
    fontSize: 7,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.32,
  },
  expertiseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  expertiseItem: {
    width: '50%',
    paddingRight: 4,
    marginBottom: 2.2,
    color: colors.muted,
    fontSize: 7,
    lineHeight: 1.15,
  },
  section: {
    marginTop: 7,
  },
  sectionHeading: {
    paddingBottom: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.rule,
    color: colors.accent,
    fontFamily: 'Courier-Bold',
    fontSize: 7.2,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  role: {
    flexDirection: 'row',
    gap: 14,
    paddingVertical: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c6c8cc',
  },
  roleMeta: {
    width: 126,
  },
  roleTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.7,
    lineHeight: 1.08,
  },
  company: {
    marginTop: 3,
    color: colors.accent,
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
  },
  dates: {
    marginTop: 5,
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 6.6,
    textTransform: 'uppercase',
  },
  location: {
    marginTop: 1.5,
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 6.6,
    textTransform: 'uppercase',
  },
  highlights: {
    flex: 1,
    gap: 2.3,
  },
  highlight: {
    flexDirection: 'row',
    fontSize: 8.35,
    lineHeight: 1.25,
  },
  bullet: {
    width: 9,
    color: colors.accent,
  },
  highlightText: {
    flex: 1,
  },
  footerGrid: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  footerColumn: {
    flex: 1,
  },
  education: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    paddingVertical: 6,
    borderTopWidth: 0.5,
    borderTopColor: colors.rule,
  },
  credential: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.7,
  },
  institution: {
    marginTop: 2,
    color: colors.muted,
    fontSize: 7.5,
  },
  completion: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 6.7,
    textTransform: 'uppercase',
  },
  tools: {
    paddingTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: colors.rule,
    color: colors.muted,
    fontSize: 7.8,
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    right: 35,
    bottom: 15,
    left: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
    borderTopWidth: 2,
    borderTopColor: colors.ink,
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 5.8,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
})

function formatMonthYear(value?: string) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

function Role({entry}: {entry: ResumeExperience}) {
  const dates = `${formatMonthYear(entry.startDate)} - ${
    entry.current ? 'Present' : formatMonthYear(entry.endDate)
  }`

  return (
    <View style={styles.role} wrap={false}>
      <View style={styles.roleMeta}>
        <Text style={styles.roleTitle}>{entry.role}</Text>
        <Text style={styles.company}>{entry.company}</Text>
        <Text style={styles.dates}>{dates}</Text>
        {entry.location && <Text style={styles.location}>{entry.location}</Text>}
      </View>
      <View style={styles.highlights}>
        {entry.highlights.map((highlight, index) => (
          <View style={styles.highlight} key={`${entry._key}-${index}`}>
          <Text style={styles.bullet}>-</Text>
            <Text style={styles.highlightText}>{highlight}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function ExperienceSection({
  title,
  entries,
}: {
  title: string
  entries: ResumeExperience[]
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeading}>{title}</Text>
      {entries.map((entry) => (
        <Role entry={entry} key={entry._key} />
      ))}
    </View>
  )
}

function Education({entries}: {entries: ResumeEducation[]}) {
  return (
    <View style={styles.footerColumn}>
      <Text style={styles.sectionLabel}>Education</Text>
      {entries.map((entry) => (
        <View style={styles.education} key={entry._key} wrap={false}>
          <View style={{flex: 1}}>
            <Text style={styles.credential}>{entry.credential}</Text>
            <Text style={styles.institution}>{entry.institution}</Text>
          </View>
          {entry.completionDate && (
            <Text style={styles.completion}>
              {formatMonthYear(entry.completionDate)}
            </Text>
          )}
        </View>
      ))}
    </View>
  )
}

function PageFooter() {
  return (
    <View style={styles.footer} fixed>
      <Text>Randal Herndon</Text>
      <Text>Digital systems with measurable outcomes.</Text>
    </View>
  )
}

export function ResumePdf({resume}: {resume: Resume}) {
  const professional = resume.experience.filter(
    (entry) => entry.section === 'professional',
  )
  const additional = resume.experience.filter(
    (entry) => entry.section === 'additional',
  )

  return (
    <Document
      author={resume.name}
      subject="Professional resume"
      title={`${resume.name} - Resume`}
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerIdentity}>
            <Text style={styles.eyebrow}>Resume / 2026</Text>
            <Text style={styles.name}>{resume.name}</Text>
            <Text style={styles.headline}>{resume.headline}</Text>
          </View>
          <View style={styles.contact}>
            {resume.location && <Text>{resume.location}</Text>}
            {resume.phone && <Link src={`tel:${resume.phone}`} style={styles.contactLink}>{resume.phone}</Link>}
            {resume.email && <Link src={`mailto:${resume.email}`} style={styles.contactLink}>{resume.email}</Link>}
            {resume.linkedinUrl && <Link src={resume.linkedinUrl} style={styles.contactLink}>linkedin.com/in/randalherndon</Link>}
            {resume.websiteUrl && <Link src={resume.websiteUrl} style={styles.contactLink}>randalherndon.com</Link>}
          </View>
        </View>

        <View style={styles.intro}>
          <View style={styles.profile}>
            <Text style={styles.sectionLabel}>Profile</Text>
            <Text style={styles.summary}>{resume.summary}</Text>
          </View>
          <View style={styles.expertiseColumn}>
            <Text style={styles.sectionLabel}>Core expertise</Text>
            <View style={styles.expertiseGrid}>
              {resume.coreExpertise.map((item) => (
                <Text style={styles.expertiseItem} key={item}>
                  - {item}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <ExperienceSection
          title="Professional experience"
          entries={professional}
        />
        <PageFooter />
      </Page>

      <Page size="LETTER" style={styles.page}>
        <ExperienceSection title="Additional experience" entries={additional} />
        <View style={styles.footerGrid}>
          <Education entries={resume.education} />
          <View style={styles.footerColumn}>
            <Text style={styles.sectionLabel}>Platforms & tools</Text>
            <Text style={styles.tools}>{resume.platforms.join(' · ')}</Text>
          </View>
        </View>
        <PageFooter />
      </Page>
    </Document>
  )
}

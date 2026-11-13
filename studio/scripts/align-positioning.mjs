// Aligns Sanity content with the site positioning in lib/site.ts.
//
//   npm run align:positioning            # dry run — prints planned changes
//   npm run align:positioning -- --apply # writes them
//
// Patches published docs and any existing drafts so Studio doesn't show stale values.
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-07-27'})
const apply = process.argv.includes('--apply')

const POSITIONING = {
  headline: 'Digital Product Manager · Web Platforms, MarTech & Growth Systems',
  tagline: 'Built like a developer. Wired like a marketer.',
  description:
    'Randal Herndon — Digital Product Manager for web platforms, MarTech and growth systems. Phoenix, AZ.',
  location: 'Phoenix, AZ',
  email: 'randal.herndon@gmail.com',
}

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64)

const docs = await client.fetch(
  `*[_type in ["siteSettings", "aboutMe", "resume", "portfolio"]]{_id, _type, title, headlines, headline, slug}`,
)

const plans = []
for (const doc of docs) {
  if (doc._type === 'siteSettings') {
    plans.push({id: doc._id, set: {title: 'Randal Herndon', ...POSITIONING}})
  } else if (doc._type === 'aboutMe') {
    plans.push({id: doc._id, set: {headlines: ['Digital Product Manager', 'Web Platforms, MarTech & Growth Systems']}})
  } else if (doc._type === 'resume') {
    plans.push({id: doc._id, set: {headline: POSITIONING.headline}})
  } else if (doc._type === 'portfolio' && !doc.slug?.current && doc.title) {
    plans.push({id: doc._id, set: {slug: {_type: 'slug', current: slugify(doc.title)}}})
  }
}

// Avoid duplicate portfolio slugs.
const seen = new Set(docs.map((d) => d.slug?.current).filter(Boolean))
for (const plan of plans) {
  const slug = plan.set.slug
  if (!slug) continue
  let candidate = slug.current
  for (let n = 2; seen.has(candidate); n++) candidate = `${slug.current}-${n}`
  slug.current = candidate
  seen.add(candidate)
}

const ids = plans.flatMap((p) => (p.id.startsWith('drafts.') ? [p.id] : [p.id, `drafts.${p.id}`]))
const existing = new Set(await client.fetch(`*[_id in $ids]._id`, {ids}))

const tx = client.transaction()
for (const plan of plans) {
  const targets = [plan.id, `drafts.${plan.id.replace(/^drafts\./, '')}`].filter(
    (id, i, all) => existing.has(id) && all.indexOf(id) === i,
  )
  for (const id of targets) {
    console.log(`${apply ? 'patch' : 'would patch'} ${id}:`, JSON.stringify(plan.set))
    tx.patch(id, (p) => p.set(plan.set))
  }
}

if (!apply) {
  console.log('\nDry run only. Re-run with --apply to write these changes.')
} else {
  const result = await tx.commit()
  console.log(`\nCommitted transaction ${result.transactionId}.`)
}

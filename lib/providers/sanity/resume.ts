import {defineQuery} from 'groq'
import {client} from './sanity'

export type ResumeExperience = {
  _key: string
  section: 'professional' | 'additional'
  company: string
  role: string
  startDate: string
  endDate?: string
  current?: boolean
  location?: string
  highlights: string[]
}

export type ResumeEducation = {
  _key: string
  institution: string
  credential: string
  completionDate?: string
}

export type Resume = {
  name: string
  headline: string
  location?: string
  phone?: string
  email?: string
  linkedinUrl?: string
  websiteUrl?: string
  summary: string
  coreExpertise: string[]
  experience: ResumeExperience[]
  education: ResumeEducation[]
  platforms: string[]
}

const RESUME_QUERY = defineQuery(/* groq */ `
  *[_type == "resume" && _id == "resume"][0]{
    name,
    headline,
    location,
    phone,
    email,
    linkedinUrl,
    websiteUrl,
    summary,
    coreExpertise,
    experience[]{
      _key,
      section,
      company,
      role,
      startDate,
      endDate,
      current,
      location,
      highlights
    },
    education[]{
      _key,
      institution,
      credential,
      completionDate
    },
    platforms
  }
`)

export async function getResume(): Promise<Resume | null> {
  return client.fetch<Resume | null>(RESUME_QUERY)
}

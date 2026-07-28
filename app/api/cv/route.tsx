import {renderToBuffer} from '@react-pdf/renderer'
import {ResumePdf} from '@/lib/pdf/ResumePdf'
import {getResume} from '@/lib/providers/sanity/resume'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const resume = await getResume()

  if (!resume) {
    return new Response('Resume content is unavailable.', {status: 404})
  }

  const pdf = await renderToBuffer(<ResumePdf resume={resume} />)

  return new Response(new Uint8Array(pdf), {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      'Content-Disposition': 'attachment; filename="Randal-Herndon-Resume.pdf"',
      'Content-Type': 'application/pdf',
    },
  })
}

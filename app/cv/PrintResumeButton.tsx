'use client'

export function PrintResumeButton() {
  return (
    <button type="button" onClick={() => window.print()}>
      Download 2-page PDF
    </button>
  )
}

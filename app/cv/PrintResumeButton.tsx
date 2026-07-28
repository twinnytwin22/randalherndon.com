export function PrintResumeButton({className}: {className?: string}) {
  return (
    <a
      className={className}
      download="Randal-Herndon-Resume.pdf"
      href="/api/cv"
    >
      Download PDF
    </a>
  )
}

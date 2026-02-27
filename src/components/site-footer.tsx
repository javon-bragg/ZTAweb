
export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-neutral-800">
      <div className="container py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Threat Zero Analytics LLC. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-neutral-200">Privacy</a>
          <a href="/terms" className="hover:text-neutral-200">Terms</a>
        </div>
      </div>
    </footer>
  )
}

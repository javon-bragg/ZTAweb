
export function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-6 hover:border-[color:theme('colors.brand.blue')] transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-300">{desc}</p>
    </div>
  )
}

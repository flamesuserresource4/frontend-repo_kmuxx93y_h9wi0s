import { useEffect, useState } from 'react'

export default function Exhibits() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/exhibits`)
        if (res.ok) {
          const data = await res.json()
          setItems(data)
        }
      } catch (e) {
        // ignore in demo
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const placeholders = [
    {
      title: 'Wonders of the Danube',
      summary: 'Biodiversity, geology, and conservation of Central Europe’s great river.',
      image_url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
      tags: ['ecology', 'geology'],
      featured: true,
    },
    {
      title: 'Hungarian Space Pioneers',
      summary: 'Explore the nation’s contributions to space science and exploration.',
      image_url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
      tags: ['space', 'history'],
      featured: false,
    },
    {
      title: 'Innovation Lab',
      summary: 'Hands-on experiments for all ages: robotics, optics, and energy.',
      image_url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop',
      tags: ['engineering', 'learning'],
      featured: false,
    },
  ]

  const data = items.length ? items : placeholders

  return (
    <section id="exhibits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Exhibits</h3>
            <p className="text-slate-600 mt-2">A rotating selection from our permanent and special collections.</p>
          </div>
          <a href="#visit" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Plan your visit</a>
        </div>

        {loading && (
          <p className="text-slate-500">Loading exhibits...</p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((ex, i) => (
            <article key={i} className="group rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={ex.image_url} alt={ex.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-slate-900">{ex.title}</h4>
                <p className="mt-2 text-slate-600 text-sm">{ex.summary}</p>
                {ex.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ex.tags.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

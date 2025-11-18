import { useState } from 'react'

export default function NavbarHero() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative overflow-hidden">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold shadow-lg">NM</div>
          <div>
            <p className="text-sm text-emerald-700 uppercase tracking-wider">National Museum of Sciences</p>
            <h1 className="text-xl font-semibold text-slate-800">Hungary</h1>
          </div>
        </div>
        <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <ul className={`md:flex gap-8 text-slate-700 hidden`}>
          <li><a href="#exhibits" className="hover:text-emerald-600">Exhibits</a></li>
          <li><a href="#events" className="hover:text-emerald-600">Events</a></li>
          <li><a href="#visit" className="hover:text-emerald-600">Visit</a></li>
          <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
        </ul>
        {open && (
          <ul className="md:hidden absolute left-0 right-0 top-full bg-white border-t p-4 space-y-3 shadow">
            <li><a href="#exhibits" className="block py-2" onClick={() => setOpen(false)}>Exhibits</a></li>
            <li><a href="#events" className="block py-2" onClick={() => setOpen(false)}>Events</a></li>
            <li><a href="#visit" className="block py-2" onClick={() => setOpen(false)}>Visit</a></li>
            <li><a href="#contact" className="block py-2" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Explore science through Hungary's past, present, and future
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            From space exploration to the secrets of the Danube, discover interactive galleries, rotating exhibitions, and family-friendly experiences in the heart of Budapest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#exhibits" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">See Exhibits</a>
            <a href="#events" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">Upcoming Events</a>
          </div>
          <p className="mt-4 text-sm text-slate-500">Open Tue–Sun · Free entry every first Sunday of the month</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop" alt="Museum hall" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-xl p-4 shadow ring-1 ring-black/5">
            <p className="text-sm text-slate-600">Interactive galleries • Planetarium • Innovation lab</p>
          </div>
        </div>
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'

export default function EventsVisit() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/events`)
        if (res.ok) {
          const data = await res.json()
          setEvents(data)
        }
      } catch (e) {
        // ignore
      }
    }
    load()
  }, [])

  const fallback = [
    { name: 'Science on Sundays: Family Day', date: '2025-01-05', time: '10:00', description: 'Hands-on activities for kids and parents across the museum.' },
    { name: 'Danube at Night', date: '2025-01-18', time: '19:00', description: 'After-hours tour with curators and live music.' },
    { name: 'From Budapest to the Stars', date: '2025-02-02', time: '18:00', description: 'Planetarium show and talk on Hungarian space research.' },
  ]

  const data = events.length ? events : fallback

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Upcoming Events</h3>
        <p className="text-slate-600 mt-2 mb-8">Talks, workshops and evening programs</p>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((ev, i) => (
            <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
              <p className="text-sm text-emerald-700 font-semibold">{ev.date} {ev.time ? `• ${ev.time}` : ''}</p>
              <h4 className="text-xl font-semibold mt-1 text-slate-900">{ev.name}</h4>
              <p className="text-slate-600 mt-2 text-sm">{ev.description}</p>
              <button className="mt-4 inline-flex px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">Reserve spot</button>
            </div>
          ))}
        </div>

        <div id="visit" className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-6">
            <h4 className="font-semibold text-slate-900">Hours</h4>
            <p className="text-slate-600 mt-2 text-sm">Tue–Fri 10:00–18:00<br/>Sat–Sun 10:00–20:00<br/>Mon closed</p>
          </div>
          <div className="rounded-xl border bg-white p-6">
            <h4 className="font-semibold text-slate-900">Tickets</h4>
            <p className="text-slate-600 mt-2 text-sm">Adults 3000 HUF · Students 1500 HUF · Under 6 free<br/>Free entry on first Sundays</p>
          </div>
          <div className="rounded-xl border bg-white p-6">
            <h4 className="font-semibold text-slate-900">Location</h4>
            <p className="text-slate-600 mt-2 text-sm">Budapest, Museum Boulevard 1<br/>M4 Kálvin tér • Tram 47/49</p>
          </div>
        </div>
      </div>
    </section>
  )
}

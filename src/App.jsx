import NavbarHero from './components/NavbarHero'
import Exhibits from './components/Exhibits'
import EventsVisit from './components/EventsVisit'
import NewsletterContact from './components/NewsletterContact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50">
      <NavbarHero />
      <Exhibits />
      <EventsVisit />
      <NewsletterContact />
      <footer className="border-t py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600">
          <p>© {new Date().getFullYear()} National Museum of Sciences of Hungary</p>
          <div className="flex gap-4 text-sm">
            <a href="#visit" className="hover:text-emerald-700">Plan your visit</a>
            <a href="#events" className="hover:text-emerald-700">Programs</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

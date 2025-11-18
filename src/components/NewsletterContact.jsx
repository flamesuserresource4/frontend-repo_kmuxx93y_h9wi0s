import { useState } from 'react'

export default function NewsletterContact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(null)
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const subscribe = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${base}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, consent: true })
      })
      if (res.ok) {
        setStatus('success')
        setEmail(''); setName('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })
      if (res.ok) {
        setStatus('sent')
        setMessage(''); setSubject('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Stay in the loop</h3>
          <p className="text-slate-600 mt-2">Get monthly highlights and early access to special events.</p>
          <form onSubmit={subscribe} className="mt-6 flex gap-3">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="flex-1 px-4 py-3 rounded-lg border" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" type="email" required className="flex-1 px-4 py-3 rounded-lg border" />
            <button className="px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Subscribe</button>
          </form>
          {status === 'success' && <p className="text-emerald-700 mt-2">Thanks for subscribing!</p>}
          {status === 'error' && <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">Contact us</h3>
          <p className="text-slate-600 mt-2">Have a question for our team? Send us a message.</p>
          <form onSubmit={sendMessage} className="mt-6 space-y-3">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full px-4 py-3 rounded-lg border" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required className="w-full px-4 py-3 rounded-lg border" />
            <input value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject" className="w-full px-4 py-3 rounded-lg border" />
            <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-lg border" />
            <button className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Send message</button>
          </form>
          {status === 'sent' && <p className="text-emerald-700 mt-2">Message sent. We will get back to you soon.</p>}
        </div>
      </div>
    </section>
  )
}

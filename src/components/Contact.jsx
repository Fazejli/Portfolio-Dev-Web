import React, { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_p4pd6pe'
    const publicKey = 'RYVtBT7buCur_Nko0'

    // 1️⃣ Email pour toi
    const sendToMe = emailjs.send(
      serviceId,
      'template_kfcj5ae', // ton template pour toi
      formData,
      publicKey
    )

    // 2️⃣ Email de confirmation pour le visiteur
    const sendToUser = emailjs.send(
      serviceId,
      'template_mo8b9rf', // ton template confirmation
      formData,
      publicKey
    )

    Promise.all([sendToMe, sendToUser])
      .then(() => {
        setStatus('Message envoyé avec succès ✅')
        setFormData({ from_name: '', from_email: '', message: '' })
      })
      .catch(() => {
        setStatus('Erreur lors de l’envoi ❌')
      })
  }

  return (
    <section id="contact" className="my-20">
      <h3 className="text-3xl font-semibold mb-10 text-center">Contact</h3>

      {/* INFOS CONTACT */}
      <div className="max-w-xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        <div className="neu-card p-6 flex items-center gap-4">
          <Mail className="w-6 h-6 text-blue-400" />
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-slate-400 text-sm">dev.fazed@gmail.com</div>
          </div>
        </div>

        <div className="neu-card p-6 flex items-center gap-4">
          <Phone className="w-6 h-6 text-blue-400" />
          <div>
            <div className="font-semibold">Téléphone</div>
            <div className="text-slate-400 text-sm">+33 6 63 97 26 53</div>
          </div>
        </div>
      </div>

      {/* FORMULAIRE */}
      <div className="max-w-2xl mx-auto neu-card p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Nom</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:shadow-lg transition"
          >
            Envoyer le message
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-center ${
              status.includes('Erreur') ? 'text-red-400' : 'text-green-400'
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  )
}
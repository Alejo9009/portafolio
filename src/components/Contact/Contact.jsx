import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const destinatario = 'tu-correo@ejemplo.com' // <-- cambia esto por tu correo real

    const asunto = encodeURIComponent(`Contacto desde el portafolio - ${form.name}`)
    const cuerpo = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    )

    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <p className="section-label">// última viñeta</p>
        <h2 className="contact-title">Hablemos</h2>
        <p className="contact-subtitle">
          ¿Tienes una vacante o un proyecto en mente? Escríbeme.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Enviar mensaje
          </button>
        </form>

        <div className="contact-social">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
import './Contact.css'

const socials = [
  {
    name: 'GitHub',
    handle: '@Alejo9009',
    url: 'https://github.com/Alejo9009',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: '/in/alejandro-pirazan-esquivel-3482242a5/',
    url: 'https://www.linkedin.com/in/alejandro-pirazan-esquivel-3482242a5/',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@apfutbol24',
    url: 'https://www.tiktok.com/@apfutbol24?is_from_webapp=1&sender_device=pc',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.6 5.82c-1-.87-1.6-2.14-1.6-3.55h-3.1v13.36c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1 0-5.8c.28 0 .55.04.8.11V9.68a6.02 6.02 0 0 0-.8-.05 6 6 0 1 0 6 6V9.9a8.6 8.6 0 0 0 5 1.6V8.4a4.8 4.8 0 0 1-3.4-2.58Z" />
      </svg>
    ),
  },
]

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">CONTACTOS</h2>
          <p className="contact-subtitle">
            ¿Tienes una vacante o un proyecto en mente? Sígueme o escríbeme.
            </p>
            </div>

        <div className="social-grid">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <span className="social-icon">{s.icon}</span>
              <span className="social-info">
                <span className="social-name">{s.name}</span>
                <span className="social-handle">{s.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
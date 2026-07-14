import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="section-label"><b>//Desarrollador full stack jr.</b></p>
        <h1 className="hero-title">
          Hola soy <span className="accent">Alejandro</span>.
        </h1>
        <p className="hero-subtitle">
          <b>Desarrollador de software junior especializado en el desarrollo de aplicaciones web full stack. Me enfoco en crear soluciones eficientes, intuitivas y seguras que resuelvan problemas reales, aplicando buenas prácticas de desarrollo y tecnologías modernas.</b>
        </p>
        <a href="#proyectos" className="hero-cta">
          Ver mi trabajo <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
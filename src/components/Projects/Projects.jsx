import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">// trabajo seleccionado</p>
            <h2 className="projects-title">Proyectos</h2>
          </div>
          <h2 className="projects-count">
            {String(projects.length).padStart(2, "0")} Proyectos
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`Captura de pantalla de ${project.title}`}
                  className="project-image"
                />
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-code"
                  >
                    Ver Repositorio
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-live"
                    >
                      Ver sitio
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

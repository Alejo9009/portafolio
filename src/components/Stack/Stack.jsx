import { stack } from '../../data/stack'
import './Stack.css'

function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="container">
        <div className="stack-header-panel">
          <div>
            <p className="section-label">// stats de personaje</p>
            <h2 className="stack-title">Mi Stack</h2>
          </div>
          <p className="stack-subtitle">Tecnologías que utilizo</p>
        </div>

        <br />

        <div className="stack-panel">
          <span className="hud-corner hud-corner-tl" aria-hidden="true" />
          <span className="hud-corner hud-corner-tr" aria-hidden="" />
          <span className="hud-corner hud-corner-bl" aria-hidden="true" />
          <span className="hud-corner hud-corner-br" aria-hidden="true" />

          {stack.map((group, index) => (
            <div className="stack-row" key={group.category}>
              <div className="stack-row-label">
                <span className="stack-row-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="stack-row-title">{group.category}</h3>
              </div>

              <ul className="stack-tags">
                {group.items.map((item) => (
                  <li className="stack-tag" key={item}>
                    <span className="stack-tag-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
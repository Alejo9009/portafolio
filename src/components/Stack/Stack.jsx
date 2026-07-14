import { stack } from '../../data/stack'
import './Stack.css'

function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="container">
        <p className="section-label">// stats de personaje</p>
        <h2 className="stack-title">Mi stack</h2>
        <h3 className="stack-subtitle">Tecnologías que utilizo</h3>
 <br />
  <br />
        <div className="stack-grid">
          {stack.map((group) => (
            <div className="stack-card" key={group.category}>
              <h3 className="stack-card-title">{group.category}</h3>
              <ul className="stack-tags">
                {group.items.map((item) => (
                  <li className="stack-tag" key={item}>
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
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid px-4">

        <NavLink className="navbar-brand fw-semibold" to="/">
          JOHN DOE
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav gap-1">

            <li className="nav-item">
              <NavLink to="/" end
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' fw-bold text-decoration-underline active' : '')
                }
              >Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' fw-bold text-decoration-underline active' : '')
                }
              >Services</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/portfolio"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' fw-bold text-decoration-underline active' : '')
                }
              >Portfolio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' fw-bold text-decoration-underline active' : '')
                }
              >Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/mentions-legales"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' fw-bold text-decoration-underline active' : '')
                }
              >Mentions légales</NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}
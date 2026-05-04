import { Link } from 'react-router-dom'

const projets = [
  'Fresh Food',
  'Restaurant Akira',
  'Espace bien-être',
  'SEO',
  "Création d'une API",
  "Maquette d'un site",
]

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="h6 fw-semibold mb-3">John Doe</h3>
            <p className="small mb-1">40 rue Laure Diebold</p>
            <p className="small mb-1">69009 Lyon, France</p>
            <p className="small mb-1">10 20 30 40 50</p>
            <p className="small mb-3">john.doe@gmail.com</p>
            <div>
              <a href="https://github.com/github-johndoe" target="_blank" rel="noopener noreferrer nofollow" className="icone-reseau" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer nofollow" className="icone-reseau" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer nofollow" className="icone-reseau" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="h6 fw-semibold mb-3">Liens utiles</h3>
            <Link to="/" className="lien-footer">Accueil</Link>
            <Link to="/services" className="lien-footer">Services</Link>
            <Link to="/portfolio" className="lien-footer">Portfolio</Link>
            <Link to="/contact" className="lien-footer">Me contacter</Link>
            <Link to="/mentions-legales" className="lien-footer">Mentions légales</Link>
          </div>

          <div className="col-12 col-md-4">
            <h3 className="h6 fw-semibold mb-3">Mes dernières réalisations</h3>
            {projets.map((projet) => (
              <Link to="/portfolio" key={projet} className="lien-footer">
                {projet}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
import { useState, useEffect } from 'react'
import GithubModal from '../components/GithubModal'

const competences = [
  { label: 'HTML5',      percent: 70, classe: 'bg-html'  },
  { label: 'CSS3',       percent: 50, classe: 'bg-css'   },
  { label: 'JAVASCRIPT', percent: 50, classe: 'bg-js'    },
  { label: 'PHP',        percent: 0, classe: 'bg-php'   },
  { label: 'REACT',      percent: 40, classe: 'bg-react' },
]

export default function Home() {

  const [modalOuverte, setModalOuverte] = useState(false)
  const [githubData, setGithubData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/github-johndoe')
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data)
      })
      .catch((erreur) => {
        console.error('Erreur GitHub :', erreur)
      })
  }, [])

  return (
    <>
      <section className="hero" aria-label="Présentation de John Doe">
        <div className="hero-overlay"></div>
        <div className="hero-content px-3">
          <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="h3 fw-semibold mb-4">Développeur web full stack</h2>
          <button
            className="btn btn-danger px-4 py-2"
            onClick={() => setModalOuverte(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      <section className="container my-5">
        <div className="card border-0 shadow-sm p-4">
          <div className="row">

            <div className="col-12 col-md-6">
              <h2 className="h5 fw-semibold">A propos</h2>
              <hr className="trait-bleu-left" />
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500"
                alt="John Doe au travail"
                className="img-fluid mb-3"
                style={{ maxHeight: '220px', objectFit: 'cover', width: '100%' }}
              />
              <p>
                Je m'appelle John Doe et je suis actuellement en formation développeur web
                au Centre Européen de Formation. Passionné par le code depuis quelques années,
                j'ai décidé de me lancer dans cette aventure pour en faire mon métier.
              </p>
              <p>
                J'aime particulièrement le front-end et je commence à bien maîtriser HTML, CSS
                et JavaScript. Je découvre React en ce moment et c'est vraiment passionnant
                même si c'est parfois compliqué !
              </p>
              <p>
                Je suis à la recherche d'un poste en alternance pour mettre en pratique
                ce que j'apprends et continuer à progresser dans un environnement professionnel.
              </p>
            </div>

            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <h2 className="h5 fw-semibold">Mes compétences</h2>
              <hr className="trait-bleu-left" />
              {competences.map(({ label, percent, classe }) => (
                <div key={label} className="mb-3">
                  <p className="fw-semibold mb-1">{label} {percent}%</p>
                  <div className="progress" style={{ height: '12px', backgroundColor: '#e0e0e0' }}>
                    <div
                      className={`progress-bar ${classe}`}
                      role="progressbar"
                      style={{ width: `${percent}%` }}
                      aria-valuenow={percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {modalOuverte && (
        <GithubModal
          data={githubData}
          onClose={() => setModalOuverte(false)}
        />
      )}
    </>
  )
}
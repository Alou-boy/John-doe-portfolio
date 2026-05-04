const services = [
  {
    icone: 'bi-pencil',
    titre: 'UX Design',
    description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
  },
  {
    icone: 'bi-code-slash',
    titre: 'Développement web',
    description: 'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).',
  },
  {
    icone: 'bi-search',
    titre: 'Référencement',
    description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif d'attirer un maximum de visiteurs qualifiés sur le site.",
  },
]

export default function Services() {
  return (
    <>
      <div className="banniere" aria-hidden="true"></div>
      <div className="container text-center mt-5 mb-3">
        <h1 className="fw-bold">Mon offre de services</h1>
        <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
        <hr className="trait-bleu" />
      </div>
      <section className="container mb-5" aria-label="Services proposés">
        <div className="row g-4 justify-content-center">
          {services.map(({ icone, titre, description }) => (
            <div key={titre} className="col-12 col-md-4">
              <div className="card h-100 text-center p-4 card-projet">
                <i className={`bi ${icone} text-primary mb-3`} style={{ fontSize: '2rem' }}></i>
                <h2 className="h5 fw-semibold">{titre}</h2>
                <p className="text-muted small mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
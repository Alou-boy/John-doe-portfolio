const projets = [
  {
    id: 1,
    titre: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne',
    technologie: 'Site réalisé avec PHP et MySQL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    lien: '#',
  },
  {
    id: 2,
    titre: 'Restaurant Akira',
    description: 'Site vitrine pour un restaurant japonais',
    technologie: 'Site réalisé avec WordPress',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400',
    lien: '#',
  },
  {
    id: 3,
    titre: 'Espace bien-être',
    description: 'Site de vente de produits bien-être en ligne',
    technologie: 'Site réalisé avec LARAVEL',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400',
    lien: '#',
  },
  {
    id: 4,
    titre: 'SEO',
    description: "Amélioration du référencement d'un site e-commerce",
    technologie: 'Utilisation des outils SEO',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400',
    lien: '#',
  },
  {
    id: 5,
    titre: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    technologie: 'PHP - SYMFONY',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400',
    lien: '#',
  },
  {
    id: 6,
    titre: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    technologie: 'Réalisé avec FIGMA',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400',
    lien: '#',
  },
]

export default function Portfolio() {
  return (
    <>
      <div className="banniere" aria-hidden="true"></div>

      <div className="container text-center mt-5 mb-3">
        <h1 className="fw-bold">Portfolio</h1>
        <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
        <hr className="trait-bleu" />
      </div>

      <section className="container mb-5" aria-label="Mes réalisations">
        <div className="row g-4">
          {projets.map((projet) => (
            <div key={projet.id} className="col-12 col-md-4">
              <div className="card card-projet h-100">

                <img
                  src={projet.image}
                  className="card-img-top"
                  alt={`Aperçu du projet ${projet.titre}`}
                  style={{ height: '180px', objectFit: 'cover' }}
                />

                <div className="card-body text-center">
                  <h2 className="h5 fw-semibold">{projet.titre}</h2>
                  <p className="text-muted small">{projet.description}</p>
                  <a href={projet.lien} className="btn btn-primary btn-sm btn-voir">
                    Voir le site
                  </a>
                </div>

                <div className="card-footer text-center text-muted small">
                  {projet.technologie}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
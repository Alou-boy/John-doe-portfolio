export default function Contact() {
  return (
    <>
      <div className="container text-center mt-5 mb-2">
        <h1 className="fw-bold">Contact</h1>
        <p className="text-muted">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <hr className="trait-bleu" />
      </div>

      <div className="container mb-5">
        <div className="card border-0 shadow-sm p-4">
          <div className="row">

            {/* FORMULAIRE */}
            <div className="col-12 col-md-6 pe-md-4">
              <h2 className="h5 fw-semibold">Formulaire de contact</h2>
              <hr className="trait-bleu-left" />

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom"
                  required
                  aria-label="Votre nom"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                  required
                  aria-label="Votre adresse email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                  required
                  aria-label="Votre numéro de téléphone"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sujet"
                  required
                  aria-label="Sujet"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Votre message"
                  required
                  aria-label="Votre message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </div>

            {/* COORDONNÉES + CARTE */}
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <h2 className="h5 fw-semibold">Mes coordonnées</h2>
              <hr className="trait-bleu-left" />

              <p className="fw-semibold mb-2">John Doe</p>
              <p className="mb-1">
                <i className="bi bi-building me-2 text-primary"></i>
                40 rue Laure Diebold
              </p>
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2 text-primary"></i>
                69009 Lyon, France
              </p>
              <p className="mb-1">
                <i className="bi bi-phone me-2 text-primary"></i>
                10 20 30 40 50
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope me-2 text-primary"></i>
                john.doe@gmail.com
              </p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7!2d4.8075!3d45.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb5b7a0e!2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adresse de John Doe sur Google Maps"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
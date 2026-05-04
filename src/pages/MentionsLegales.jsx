export default function MentionsLegales() {
  return (
    <>
      <div className="container text-center mt-5 mb-3">
        <h1 className="fw-bold">Mentions légales</h1>
        <hr className="trait-bleu" />
      </div>

      <div className="container mb-5" style={{ maxWidth: '900px' }}>

        <div className="accordion" id="accordionMentions">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEditeur">
                Editeur du site
              </button>
            </h2>
            <div id="collapseEditeur" className="accordion-collapse collapse show" data-bs-parent="#accordionMentions">
              <div className="accordion-body">
                <p className="fw-semibold mb-2">John Doe</p>
                <p className="mb-1"><i className="bi bi-building me-2 text-primary"></i>40 rue Laure Diebold</p>
                <p className="mb-1"><i className="bi bi-geo-alt me-2 text-primary"></i>69009 Lyon, France</p>
                <p className="mb-1"><i className="bi bi-phone me-2 text-primary"></i>10 20 30 40 50</p>
                <p className="mb-0"><i className="bi bi-envelope me-2 text-primary"></i>john.doe@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHebergeur">
                Hébergeur
              </button>
            </h2>
            <div id="collapseHebergeur" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
              <div className="accordion-body">
                <p className="fw-semibold mb-1">alwaysdata</p>
                <p className="mb-1">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p className="mb-0">
                  <i className="bi bi-globe me-2 text-primary"></i>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCredits">
                Crédits
              </button>
            </h2>
            <div id="collapseCredits" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
              <div className="accordion-body">
                <h3 className="h6 fw-semibold">Crédits</h3>
                <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://eleve.centre-europeen-formation.fr/login" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.</p>
                <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></em></p>
                <p><em>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a></em></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
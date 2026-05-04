export default function GithubModal({ data, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',       
        inset: 0,                
        background: 'rgba(0,0,0,0.7)',
        zIndex: 9999,            
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="rounded"
        style={{
          background: '#2b2b2b',
          color: '#f1f1f1',
          maxWidth: '600px',
          width: '90%',
        }}
      >

        <div
          className="d-flex justify-content-between align-items-center p-3"
          style={{ borderBottom: '1px solid #444' }}
        >
          <h5 className="mb-0 fw-semibold">Mon profil GitHub</h5>
          <button
            className="btn-close btn-close-white"
            onClick={onClose}
            aria-label="Fermer la modale"
          ></button>
        </div>

        <div className="p-3">
          {!data ? (
            <p className="text-muted small text-center py-3">
              Chargement du profil GitHub...
            </p>
          ) : (
            <div className="row align-items-start">
              <div className="col-5">
                <img
                  src={data.avatar_url}
                  alt={'Photo de profil GitHub de ' + (data.name || data.login)}
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-7">
                <div className="ligne-profil">
                  <i className="bi bi-person"></i>
                  <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    {data.name || data.login}
                  </a>
                </div>

                <div className="ligne-profil">
                  <i className="bi bi-geo-alt"></i>
                  <span>{data.location || 'Non renseigné'}</span>
                </div>

                {data.bio && (
                  <div className="ligne-profil">
                    <i className="bi bi-chat-left-text" style={{ minWidth: '16px' }}></i>
                    <span>{data.bio}</span>
                  </div>
                )}

                <div className="ligne-profil">
                  <i className="bi bi-box-seam"></i>
                  <span>Repositories : {data.public_repos}</span>
                </div>

                <div className="ligne-profil">
                  <i className="bi bi-people"></i>
                  <span>Followers : {data.followers}</span>
                </div>

                <div className="ligne-profil">
                  <i className="bi bi-people"></i>
                  <span>Following : {data.following}</span>
                </div>
              </div>

            </div>
          )}
        </div>

        <div
          className="p-3 d-flex justify-content-end"
          style={{ borderTop: '1px solid #444' }}
        >
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Fermer
          </button>
        </div>

      </div>
    </div>
  )
}
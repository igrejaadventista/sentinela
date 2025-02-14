export function PaFiles(props) {
  return (
    <div className="pa-files-container">
      <header className="pa-files-header">
        <h1>PA Files</h1>
        <p className="description">Download required files for PA websites setup</p>
      </header>

      <div className="files-wrapper">
        <div className="files-grid">
          <div className="files-category">
            <h2>Themes</h2>
            <div className="file-card">
              <div className="file-info">
                <h3>PA Theme Sedes</h3>
                <p>Tema principal compatível com PHP 8.0+</p>
                <div className="file-actions">
                  <a href="https://files.internetdsa.com/themes/pa-theme-sedes.zip" 
                     className="download-btn" target="_blank">
                    Download
                  </a>
                  <a href="https://github.com/igrejaadventista/pa-theme-sedes/blob/master/CHANGELOG.md" 
                     className="changelog-link" target="_blank">
                    Changelog
                  </a>
                </div>
               
              </div>
            </div>

            <div className="file-card legacy">
              <div className="file-info">
                <h3>PA Theme Sedes</h3>
                <p>Antigo - Tema pai compatível com PHP 7.4</p>
                <div className="file-actions">
                  <a href="/pa-thema-sedes-old/pa-theme-sedes.zip" 
                     className="download-btn" 
                     target="_blank"
                     download>
                    Download 
                  </a>
                  <a href="/pa-thema-sedes-old/CHANGELOG.md" 
                     className="changelog-link" 
                     target="_blank">
                    Changelog
                  </a>
                </div>
              </div>
            </div>
            <div className="file-card">
              <div className="file-info">
                <h3>PA Theme Sedes Child</h3>
                <p>Tema filho (requer tema pai)</p>
                <div className="file-actions">
                  <a href="https://files.internetdsa.com/themes/pa-theme-sedes-child.zip" 
                     className="download-btn" target="_blank">
                    Download
                  </a>
                  <a href="https://github.com/igrejaadventista/pa-theme-sedes-child/blob/master/CHANGELOG.md" 
                     className="changelog-link" target="_blank">
                    Changelog
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="files-category">
            <h2>Plugins</h2>
            <div className="file-card">
              <div className="file-info">
                <h3>ACF Pro</h3>
                <p>Plugin necessário para campos personalizados</p>
                <div className="file-actions">
                  <a href="https://files.internetdsa.com/plugins/advanced-custom-fields-pro.zip" 
                     className="download-btn" target="_blank">
                    Download
                  </a>
                </div>
              </div>
            </div>

            <div className="file-card">
              <div className="file-info">
                <h3>Cloudflare</h3>
                <p>Plugin opcional para integração de CDN</p>
                <div className="file-actions">
                  <a href="https://files.internetdsa.com/plugins/cloudflare.zip" 
                     className="download-btn" target="_blank">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="files-category">
            <h2>Pacotes de instalação</h2>
            <div className="file-card">
              <div className="file-info">
                <p>Pacote de instalação completo em PT-BR</p>
                <div className="file-actions">
                  <a href="https://files.internetdsa.com/wp/pt_BR.zip" 
                     className="download-btn" target="_blank">
                    Download PT-BR
                  </a>
                </div>
              </div>
            </div>

            <div className="file-card">
              <div className="file-info">
                <p>	Instalação completa em ES</p>
                <div className="file-actions">
                  <a href="https://files.internetdsa.com/wp/es_ES.zip" 
                     className="download-btn" target="_blank">
                    Download ES
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="files-category">
            <h2>Slider</h2>
            <div className="file-card">
              <div className="file-info">
                <p>Modelo de Slider</p>
                <div className="file-actions">
                  <a href="https://www.dropbox.com/s/vfxcy1c1jnfeusj/Template_Slider_PA.psd?dl=0" 
                     className="download-btn" target="_blank">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

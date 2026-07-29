import Link from 'next/link';

export default function ContactoPage() {
  return (
    <main className="page-shell">
      <section className="page-hero grain">
        <div className="page-hero__inner">
          <div className="page-kicker">Infinity Sound — Contacto</div>

          <h1 className="page-title">
            HABLEMOS DEL <span className="stroke">PRÓXIMO PASO</span>
          </h1>

          <p className="page-subtitle">
            Para contratación, colaboraciones, prensa o cualquier propuesta
            relacionada con Infinity Sound, utiliza este espacio como punto de
            contacto. La página mantiene la misma línea visual del resto del
            sitio para que toda la experiencia sea consistente.
          </p>

          <div className="page-cta">
            <Link href="/eventos" className="btn-secondary">
              Ver giras
            </Link>
          </div>
        </div>

        <div className="ghost ghost--symbol">CONTACT</div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="page-split">
            <article className="page-panel">
              <span className="page-section__eyebrow">Contacto directo</span>
              <h2 className="page-panel__title">Información</h2>

              <div className="page-stack" style={{ marginTop: '1rem' }}>
                <div>
                  <div className="page-note">Email</div>
                  <p className="page-panel__text" style={{ marginTop: '0.35rem' }}>
                    booking@infinitysound.com
                  </p>
                </div>

                <div className="page-divider"></div>

                <div>
                  <div className="page-note">Management</div>
                  <p className="page-panel__text" style={{ marginTop: '0.35rem' }}>
                    Disponible para eventos, salas, festivales y colaboraciones.
                  </p>
                </div>

                <div className="page-divider"></div>

                <div>
                  <div className="page-note">Respuesta</div>
                  <p className="page-panel__text" style={{ marginTop: '0.35rem' }}>
                    Respuesta habitual en 24–48 horas para propuestas profesionales.
                  </p>
                </div>
              </div>
            </article>

            <article className="page-panel">
              <span className="page-section__eyebrow">Formulario</span>
              <h2 className="page-panel__title">Escríbenos</h2>

              <form className="page-form" style={{ marginTop: '1rem' }}>
                <div className="page-form__row">
                  <div className="page-field">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" type="text" placeholder="Tu nombre" />
                  </div>

                  <div className="page-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="page-form__row">
                  <div className="page-field">
                    <label htmlFor="subject">Asunto</label>
                    <input id="subject" name="subject" type="text" placeholder="Motivo del mensaje" />
                  </div>

                  <div className="page-field">
                    <label htmlFor="type">Tipo de propuesta</label>
                    <select id="type" name="type" defaultValue="">
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="booking">Booking</option>
                      <option value="festival">Festival</option>
                      <option value="press">Prensa</option>
                      <option value="collab">Colaboración</option>
                    </select>
                  </div>
                </div>

                <div className="page-field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos tu propuesta, fecha, ciudad o colaboración."
                  />
                </div>

                <div className="page-cta">
                  <button type="submit" className="btn-primary">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section page-section--accent">
        <div className="page-section__inner">
          <div className="page-section__head">
            <span className="page-section__eyebrow">Áreas</span>
            <h2 className="page-section__title">
              TIPOS DE <span className="stroke">COLABORACIÓN</span>
            </h2>
            <p className="page-section__text">
              Esta estructura te permite presentar el contacto como una parte
              premium del sitio, no como una página secundaria. Así mantienes el
              mismo tono visual y de marca en todo el recorrido.
            </p>
          </div>

          <div className="page-grid page-grid--3">
            <article className="page-card">
              <span className="page-card__eyebrow">01</span>
              <h3 className="page-card__title">Contratación</h3>
              <p className="page-card__text">
                Fechas en salas, eventos privados, showcases o ciclos especiales.
              </p>
            </article>

            <article className="page-card">
              <span className="page-card__eyebrow">02</span>
              <h3 className="page-card__title">Festivales</h3>
              <p className="page-card__text">
                Propuestas para programación cultural, festivales y formatos en directo.
              </p>
            </article>

            <article className="page-card">
              <span className="page-card__eyebrow">03</span>
              <h3 className="page-card__title">Colaboraciones</h3>
              <p className="page-card__text">
                Marcas, campañas, sesiones creativas y acciones con identidad visual fuerte.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="page-cta">
            <Link href="/" className="btn-secondary">
              Volver al inicio
            </Link>
            <Link href="/biografia" className="btn-secondary">
              Ver biografía
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

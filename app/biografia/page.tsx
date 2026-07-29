import Link from 'next/link';

const milestones = [
  {
    year: '2018',
    title: 'Primeras producciones',
    text: 'Comienza una etapa de exploración sonora, desarrollo de identidad artística y construcción del universo creativo de Infinity Sound.',
  },
  {
    year: '2020',
    title: 'Consolidación visual',
    text: 'El proyecto evoluciona hacia una propuesta más sólida, uniendo música, presencia escénica y una dirección estética reconocible.',
  },
  {
    year: '2023',
    title: 'Nueva narrativa',
    text: 'Se define una línea visual más madura: contraste, tono cinematográfico, detalles dorados y una puesta en escena más inmersiva.',
  },
  {
    year: '2026',
    title: 'Etapa actual',
    text: 'Infinity Sound se presenta como una propuesta artística lista para crecer en directo, colaboraciones y nuevos formatos escénicos.',
  },
];

export default function BiografiaPage() {
  return (
    <main className="page-shell">
      <section className="page-hero grain">
        <div className="page-hero__inner">
          <div className="page-kicker">Infinity Sound — Biografía</div>

          <h1 className="page-title">
            SOBRE EL <span className="stroke">PROYECTO</span>
          </h1>

          <p className="page-subtitle">
            Infinity Sound nace como una propuesta artística donde la música, la
            atmósfera visual y la identidad escénica avanzan en la misma
            dirección. La intención no es solo sonar, sino construir una
            experiencia reconocible y con personalidad propia.
          </p>

          <div className="page-cta">
            <Link href="/eventos" className="btn-primary">
              Ver giras
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Contacto
            </Link>
          </div>
        </div>

        <div className="ghost ghost--equity">BIO</div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="page-split">
            <article className="page-panel">
              <span className="page-section__eyebrow">Origen</span>
              <h2 className="page-panel__title">Una identidad construida desde el detalle</h2>
              <p className="page-panel__text">
                El proyecto se apoya en una mezcla de energía, elegancia visual y
                búsqueda constante de una firma propia. Cada decisión —desde el
                sonido hasta la imagen— está pensada para reforzar una sensación
                de coherencia y carácter.
              </p>
              <p className="page-panel__text">
                Más que una colección de canciones o directos, Infinity Sound se
                entiende como un universo creativo en expansión, preparado para
                conectar con público, salas, marcas y colaboraciones especiales.
              </p>
            </article>

            <article className="page-panel">
              <span className="page-section__eyebrow">Claves</span>
              <h2 className="page-panel__title">Qué define a Infinity Sound</h2>
              <ul className="page-list" style={{ marginTop: '1rem' }}>
                <li>Dirección estética oscura, limpia y con acentos dorados.</li>
                <li>Enfoque escénico pensado para generar atmósfera.</li>
                <li>Lenguaje visual coherente entre web, directo e imagen de marca.</li>
                <li>Propuesta adaptable a conciertos, showcases y colaboraciones.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section page-section--accent">
        <div className="page-section__inner">
          <div className="page-section__head">
            <span className="page-section__eyebrow">Trayectoria</span>
            <h2 className="page-section__title">
              EVOLUCIÓN DEL <span className="stroke">PROYECTO</span>
            </h2>
            <p className="page-section__text">
              La biografía puede contarse como una línea de crecimiento donde el
              proyecto ha ido afinando su sonido, su puesta en escena y su
              identidad visual hasta llegar a una forma más madura.
            </p>
          </div>

          <div className="page-grid page-grid--2">
            {milestones.map((item) => (
              <article key={item.year} className="page-card">
                <span className="page-card__eyebrow">{item.year}</span>
                <h3 className="page-card__title">{item.title}</h3>
                <p className="page-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="page-stats">
            <article className="page-stat">
              <div className="page-stat__value">Live</div>
              <div className="page-stat__label">Presencia escénica</div>
            </article>

            <article className="page-stat">
              <div className="page-stat__value">Visual</div>
              <div className="page-stat__label">Identidad de marca</div>
            </article>

            <article className="page-stat">
              <div className="page-stat__value">Future</div>
              <div className="page-stat__label">Nueva etapa</div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="page-section__head">
            <span className="page-section__eyebrow">Siguiente paso</span>
            <h2 className="page-section__title">
              LISTO PARA <span className="stroke">CRECER</span>
            </h2>
            <p className="page-section__text">
              Infinity Sound está preparado para ampliar su presencia a través de
              nuevas fechas, colaboraciones y formatos que mantengan intacta la
              personalidad del proyecto.
            </p>
          </div>

          <div className="page-cta">
            <Link href="/contacto" className="btn-primary">
              Hablar del proyecto
            </Link>
            <Link href="/eventos" className="btn-secondary">
              Ver próximas fechas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

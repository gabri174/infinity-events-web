import Link from 'next/link';

const shows = [
  {
    city: 'Madrid',
    venue: 'La Riviera',
    date: '12 Sept 2026',
    time: '21:00',
    status: 'Entradas disponibles',
  },
  {
    city: 'Barcelona',
    venue: 'Razzmatazz',
    date: '20 Sept 2026',
    time: '20:30',
    status: 'Últimas entradas',
  },
  {
    city: 'Valencia',
    venue: 'Marina Norte',
    date: '03 Oct 2026',
    time: '22:00',
    status: 'Nueva fecha',
  },
  {
    city: 'Sevilla',
    venue: 'Cartuja Center',
    date: '17 Oct 2026',
    time: '21:30',
    status: 'Próximamente',
  },
  {
    city: 'Bilbao',
    venue: 'Sala Santana 27',
    date: '31 Oct 2026',
    time: '21:00',
    status: 'Entradas disponibles',
  },
  {
    city: 'Málaga',
    venue: 'Paris 15',
    date: '14 Nov 2026',
    time: '21:30',
    status: 'Próximamente',
  },
];

export default function EventosPage() {
  return (
    <main className="page-shell">
      <section className="page-hero grain">
        <div className="page-hero__inner">
          <div className="page-kicker">Infinity Sound — Giras</div>

          <h1 className="page-title">
            PRÓXIMAS <span className="stroke">FECHAS</span>
          </h1>

          <p className="page-subtitle">
            Descubre las próximas paradas de Infinity Sound. Una agenda pensada
            para presentar el proyecto en directo con una estética más inmersiva,
            potente y cercana al nuevo lenguaje visual de la web.
          </p>

          <div className="page-cta">
            <Link href="/contacto" className="btn-primary">
              Contratación
            </Link>
            <Link href="/biografia" className="btn-secondary">
              Ver biografía
            </Link>
          </div>
        </div>

        <div className="ghost ghost--thread">TOUR</div>
      </section>

      <section className="page-section page-section--tight">
        <div className="page-section__inner">
          <div className="page-stats">
            <article className="page-stat">
              <div className="page-stat__value">06</div>
              <div className="page-stat__label">Fechas activas</div>
            </article>

            <article className="page-stat">
              <div className="page-stat__value">05</div>
              <div className="page-stat__label">Ciudades</div>
            </article>

            <article className="page-stat">
              <div className="page-stat__value">Live</div>
              <div className="page-stat__label">Show audiovisual</div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="page-section__head">
            <span className="page-section__eyebrow">Calendario</span>
            <h2 className="page-section__title">
              AGENDA <span className="stroke">DESTACADA</span>
            </h2>
            <p className="page-section__text">
              Cada fecha mantiene el mismo universo visual del proyecto:
              atmósfera oscura, acentos dorados y una puesta en escena pensada
              para reforzar la identidad de Infinity Sound en directo.
            </p>
          </div>

          <div className="page-grid page-grid--3">
            {shows.map((show) => (
              <article key={`${show.city}-${show.date}`} className="page-card">
                <span className="page-card__eyebrow">{show.date}</span>
                <h3 className="page-card__title">{show.city}</h3>
                <p className="page-card__text">
                  {show.venue}
                  <br />
                  Apertura: {show.time}
                </p>
                <div className="page-card__meta">{show.status}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--accent">
        <div className="page-section__inner">
          <div className="page-split">
            <div className="page-panel">
              <h2 className="page-panel__title">Información de gira</h2>
              <p className="page-panel__text">
                El show combina dirección visual, energía de directo y una línea
                estética coherente con el nuevo rediseño del sitio. La intención
                es que cada concierto se perciba como una extensión natural de la
                identidad digital del proyecto.
              </p>

              <ul className="page-list" style={{ marginTop: '1.25rem' }}>
                <li>Formato adaptable a salas, festivales y eventos privados.</li>
                <li>Visuales y atmósfera alineadas con la marca Infinity Sound.</li>
                <li>Set pensado para impacto escénico y recuerdo de marca.</li>
              </ul>

              <div className="page-cta">
                <Link href="/contacto" className="btn-primary">
                  Solicitar fecha
                </Link>
              </div>
            </div>

            <div className="page-panel">
              <h2 className="page-panel__title">Próximas ciudades</h2>
              <table className="page-table">
                <thead>
                  <tr>
                    <th>Ciudad</th>
                    <th>Sala</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {shows.map((show) => (
                    <tr key={`table-${show.city}-${show.date}`}>
                      <td>{show.city}</td>
                      <td>{show.venue}</td>
                      <td>{show.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="page-section__head">
            <span className="page-section__eyebrow">Booking</span>
            <h2 className="page-section__title">
              RESERVA UNA <span className="stroke">FECHA</span>
            </h2>
            <p className="page-section__text">
              Para festivales, salas, promotores o colaboraciones especiales,
              puedes usar la página de contacto para solicitar disponibilidad y
              condiciones.
            </p>
          </div>

          <div className="page-cta">
            <Link href="/contacto" className="btn-primary">
              Ir a contacto
            </Link>
            <Link href="/" className="btn-secondary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

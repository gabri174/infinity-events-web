'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TICKER =
  ' infinity sound ✦ noches de adoración ✦ activación profética ✦ españa eurotour 2026 ✦ fe + música ✦ eventos en vivo ✦ worship nights ✦ reserva tu fecha ✦ '; 

const CHESS = [
  '♜','♞','♝','♛','♚','♝','♞','♜','♟','♟','♟','♟','♟','♟','♟','♟',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  '♙','♙','♙','♙','♙','♙','♙','♙','♖','♘','♗','♕','♔','♗','♘','♖'
];

const BOOKS = [
  { t: 'ADORACIÓN', c: '#FFE600' },
  { t: 'PRESENCIA', c: '#00D4FF' },
  { t: 'AVIVAMIENTO', c: '#FF2D9E' },
  { t: 'PROFÉTICO', c: '#9B5DE5' },
  { t: 'INTERCESIÓN', c: '#39FF14' },
  { t: 'GLORIA', c: '#FF6B35' },
  { t: 'EUROTOUR 2026', c: '#FFE600' }
];

const GALLERY = [
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
  'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&q=80',
  'https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&q=80',
  'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=1200&q=80'
];

export default function Home() {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const board = document.getElementById('chess-board');
    const stack = document.getElementById('book-stack');
    const mini = document.getElementById('mini-books');
    const row = document.getElementById('gallery-row');
    const ticker = document.getElementById('ticker-inner');

    if (ticker) ticker.textContent = TICKER.repeat(3);

    if (board && !board.childElementCount) {
      CHESS.forEach((p, i) => {
        const r = Math.floor(i / 8);
        const c = i % 8;
        const cell = document.createElement('div');
        cell.className = 'cell ' + ((r + c) % 2 === 0 ? 'light' : 'dark');
        if (p) {
          cell.textContent = p;
          cell.style.color = r < 2 ? '#00D4FF' : r > 5 ? '#FFE600' : cell.classList.contains('dark') ? '#eee' : '#111';
        }
        board.appendChild(cell);
      });
    }

    if (stack && !stack.childElementCount) {
      BOOKS.forEach((b) => {
        const el = document.createElement('div');
        el.className = 'book';
        el.style.background = b.c;
        el.innerHTML = `<div class="spine"></div>${b.t}`;
        stack.appendChild(el);
      });
    }

    if (mini && !mini.childElementCount) {
      [52, 68, 45, 62, 55, 42, 70, 48].forEach((h, i) => {
        const b = document.createElement('div');
        b.className = 'mbook';
        b.style.height = `${h}px`;
        b.style.background = ['#FFE600','#00D4FF','#FF2D9E','#9B5DE5','#39FF14','#FF6B35','#FFE600','#00D4FF'][i];
        mini.appendChild(b);
      });
    }

    if (row && !row.childElementCount) {
      GALLERY.forEach((src) => {
        const item = document.createElement('div');
        item.className = 'gal-item';
        item.innerHTML = `<img src="${src}" alt="Infinity Sound" loading="lazy"><div class="gal-caption">// infinity sound</div>`;
        row.appendChild(item);
      });
    }

    const onMove = (e: MouseEvent) => {
      if (!cur) return;
      cur.style.left = `${e.clientX}px`;
      cur.style.top = `${e.clientY}px`;
    };
    const onDown = () => document.body.classList.add('cur-click');
    const onUp = () => document.body.classList.remove('cur-click');
    const onLeave = () => { if (cur) cur.style.opacity = '0'; };
    const onEnter = () => { if (cur) cur.style.opacity = '1'; };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const onScroll = () => {
      document.querySelectorAll<HTMLElement>('.ghost').forEach((g) => {
        g.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div className="is-editorial-home">
      <Navbar />
      <div id="ticker" aria-hidden="true"><span id="ticker-inner"></span></div>
      <div id="cur" aria-hidden="true"></div>

      <section id="hero" className="grain">
        <div id="hero-text">
          <div className="ghost ghost--path">SOUND</div>
          <div className="chip filled chip--label">✦ eventos cristianos — worship nights & activación profética</div>
          <h1 className="reveal">
            <span>INFINITY</span><br />
            <span>SOUND</span><br />
            <span className="line2">EN VIVO.</span>
          </h1>
          <p className="subtitle reveal reveal--d1">
            Noches de adoración, música y presencia.<br />
            Un movimiento de fe que recorre ciudades, iglesias y auditorios.<br />
            Vive una experiencia marcada por <strong>gloria, unidad y sonido</strong>.
          </p>
          <div className="deco-row reveal reveal--d2">
            <span className="chip">✦ Worship</span>
            <span className="chip">♫ Live</span>
            <span className="chip">🔥 Aviva</span>
            <span className="chip">✧ Presencia</span>
            <span className="chip">⌁ Tour 2026</span>
          </div>
        </div>

        <div id="hero-collage">
          <img className="collage-img" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80" alt="Concierto de adoración" loading="lazy" />
          <img className="collage-img" src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80" alt="Público en evento" loading="lazy" />
          <img className="collage-img" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80" alt="Escenario musical" loading="lazy" />
          <img className="collage-img" src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&q=80" alt="Ambiente de concierto" loading="lazy" />
          <div className="collage-label">✦ eurotour worship</div>
        </div>
      </section>

      <section className="chapter grain" id="ch-grandfather">
        <div className="chapter-inner">
          <div className="chapter-text reveal">
            <div className="chapter-num">01 — El sonido</div>
            <h2 className="chapter-title">Un Mensaje.<br />Una Noche.<br /><span className="stroke">Una Atmósfera.</span></h2>
            <div className="chapter-body">
              <p>Infinity Sound crea encuentros donde la música no es solo presentación, sino un vehículo de adoración, unidad y ministración.</p>
              <p>Cada evento está diseñado para reunir personas, iglesias y generaciones alrededor de una misma presencia.</p>
              <p>La visión es simple: <em>llevar sonido, fe y transformación a cada ciudad</em>.</p>
            </div>
            <div className="chapter-tags">
              <span className="chip">♫ Música</span>
              <span className="chip">✦ Presencia</span>
              <span className="chip">🔥 Activación</span>
              <span className="chip">★ Ciudades</span>
            </div>
          </div>

          <div className="chapter-visual">
            <div className="photo-frame frame--ch1">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80" alt="Evento Infinity Sound" loading="lazy" />
            </div>
            <span className="math-glyph glyph-1">♫</span>
            <span className="math-glyph glyph-2">✦</span>
            <span className="math-glyph glyph-3">∞</span>
            <span className="math-glyph glyph-4">⌁</span>
            <span className="math-glyph glyph-5">♪</span>
            <div className="chess-board" id="chess-board"></div>
          </div>
        </div>
      </section>

      <section className="chapter grain" id="ch-mother">
        <div className="chapter-inner chapter-inner--flip">
          <div className="chapter-text reveal">
            <div className="chapter-num">02 — La gira</div>
            <h2 className="chapter-title">Ciudades.<br />Fe En Movimiento.<br /><span className="stroke">Puertas Abiertas.</span></h2>
            <div className="chapter-body">
              <p>Las giras reúnen adoración en vivo, palabra y momentos de activación profética en distintos puntos de España.</p>
              <p>No se trata solo de asistir a un concierto; se trata de vivir una noche marcada por propósito, comunidad y respuesta espiritual.</p>
              <p>Cada fecha es una oportunidad para abrir una nueva historia en una nueva ciudad.</p>
            </div>
            <div className="chapter-tags">
              <span className="chip">📍 España</span>
              <span className="chip">🎤 En vivo</span>
              <span className="chip">⚡ Profético</span>
              <span className="chip">✦ Gira</span>
            </div>
          </div>

          <div className="chapter-visual chapter-visual--mother">
            <div className="mother-img-top">
              <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80" alt="Público adorando" loading="lazy" />
            </div>
            <div className="book-stack-zone">
              <div className="book-stack" id="book-stack"></div>
            </div>
            <div className="plane-wrapper">
              <svg width="76" height="48" viewBox="0 0 76 48" fill="none" aria-hidden="true">
                <path d="M2 27 L46 17 L74 23 L50 29 Z" fill="#0A0A0A" />
                <path d="M46 17 L54 7 L62 15 L50 21 Z" fill="#0A0A0A" opacity=".65" />
                <path d="M16 27 L20 37 L30 31 Z" fill="#0A0A0A" opacity=".45" />
                <circle cx="65" cy="23" r="3" fill="#FF2D9E" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter grain" id="ch-me">
        <div className="chapter-inner">
          <div className="chapter-text reveal">
            <div className="chapter-num">03 — Reserva</div>
            <h2 className="chapter-title">Invita.<br />Conecta.<br /><span className="stroke">Hazlo Real.</span></h2>
            <div className="chapter-body">
              <p>Si quieres llevar Infinity Sound a tu ciudad, iglesia o evento, puedes abrir una conversación directa con el equipo.</p>
              <p>La visión se construye junto a comunidades locales que desean noches de adoración y activación con excelencia.</p>
              <p>Todo comienza con una fecha, una invitación y una puerta dispuesta.</p>
            </div>
            <div className="chapter-tags">
              <span className="chip">☎ Contacto</span>
              <span className="chip">🏛 Iglesias</span>
              <span className="chip">📅 Fechas</span>
              <span className="chip">✧ Booking</span>
            </div>
          </div>

          <div className="chapter-visual chapter-visual--col chapter-visual--padded">
            <div className="photo-frame frame--me-top">
              <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80" alt="Escenario y luces" loading="lazy" />
            </div>
            <div className="photo-frame frame--me-bot">
              <img src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&q=80" alt="Ambiente de worship" loading="lazy" />
            </div>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="dot r"></div>
                <div className="dot y"></div>
                <div className="dot g"></div>
                <span className="terminal-path">~/infinity-sound</span>
              </div>
              <div className="terminal-body">
                <div><span className="prompt">$</span> <span className="cmd">show vision</span></div>
                <div className="out">worship_in_motion</div>
                <div className="terminal-gap"><span className="prompt">$</span> <span className="cmd">cat events.json</span></div>
                <div className="out">{'{'}</div>
                <div className="out">&nbsp;&quot;focus&quot;: &quot;adoración + activación&quot;,</div>
                <div className="out">&nbsp;&quot;tour&quot;:&nbsp;&nbsp;&nbsp;&quot;España 2026&quot;,</div>
                <div className="out">&nbsp;&quot;booking&quot;:&nbsp;&quot;abierto&quot;</div>
                <div className="out">{'}'}</div>
                <div className="terminal-gap"><span className="prompt">$</span> <span className="cmd">echo $MESSAGE</span></div>
                <div className="out">el sonido también abre caminos</div>
                <div className="terminal-gap"><span className="prompt">$</span> <span className="cursor-blink"></span></div>
              </div>
            </div>
            <div className="mini-books" id="mini-books"></div>
          </div>
        </div>
      </section>

      <div id="video-break">
        <video autoPlay muted loop playsInline>
          <source src="https://cdn.cosmos.so/3cbfd7b9-f988-469c-a838-694489832809.mp4" type="video/mp4" />
        </video>
        <div id="video-break-text" className="grain">
          <div className="ghost ghost--symbol">∞</div>
          <div className="chip filled chip--interlude">✦ interludio</div>
          <h2 className="reveal">SONIDO<br />QUE<br /><span className="stroke">TRANSFORMA.</span></h2>
          <p className="reveal reveal--d1">
            Hay noches que no se explican solo por la música. Se recuerdan por la atmósfera, la unidad y lo que sucede cuando la fe encuentra una voz colectiva.
          </p>
          <div className="interlude-chip reveal reveal--d3">
            <span className="chip">✦ worship, presencia y dirección</span>
          </div>
        </div>
      </div>

      <div id="gallery-strip" className="grain">
        <div className="strip-label">✦ infinity sound — galería visual →</div>
        <div className="gallery-row" id="gallery-row"></div>
      </div>

      <section id="thread" className="grain">
        <div className="ghost ghost--thread">TOUR</div>
        <div id="thread-inner">
          <div id="thread-text">
            <h2 className="reveal">UNA<br />MISMA<br /><span className="stroke">VISIÓN.</span></h2>
            <p className="thread-quote reveal reveal--d1">
              Infinity Sound une <strong>música, fe y comunidad</strong>.<br />
              Cada evento busca crear un espacio donde la adoración sea genuina, la palabra tenga dirección y las personas respondan con libertad.<br />
              No es solo un formato. Es una atmósfera que viaja.
            </p>
            <div className="timeline reveal reveal--d3">
              <div className="tnode"><div className="tnode-dot">♫</div><div className="tnode-label">Sonido<br />vivo</div></div>
              <div className="tline"></div>
              <div className="tnode"><div className="tnode-dot">✦</div><div className="tnode-label">Adoración<br />real</div></div>
              <div className="tline"></div>
              <div className="tnode"><div className="tnode-dot">⚡</div><div className="tnode-label">Momento<br />profético</div></div>
              <div className="tline"></div>
              <div className="tnode"><div className="tnode-dot">📍</div><div className="tnode-label">Nueva<br />ciudad</div></div>
              <div className="tline"></div>
              <div className="tnode"><div className="tnode-dot">∞</div><div className="tnode-label">Más<br />impacto</div></div>
            </div>
          </div>
          <div id="thread-images">
            <div className="thread-img"><img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80" alt="Evento en vivo" loading="lazy" /></div>
            <div className="thread-img"><img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80" alt="Multitud" loading="lazy" /></div>
            <div className="thread-img"><img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80" alt="Escenario" loading="lazy" /></div>
            <div className="thread-img"><img src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&q=80" alt="Luz y atmósfera" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section id="epilogue" className="grain">
        <div className="ghost ghost--equity">GLORY</div>
        <h2 className="reveal">MÚSICA.<br />FE.<br /><span className="stroke">RESPUESTA.</span></h2>
        <div className="epi-grid reveal reveal--d2">
          <div className="epi-card">
            <div className="epi-icon">♫</div>
            <h3>Sonido con propósito</h3>
            <p>Cada encuentro está pensado para conducir a una experiencia real de adoración y unidad.</p>
          </div>
          <div className="epi-card">
            <div className="epi-icon">⚡</div>
            <h3>Momentos de activación</h3>
            <p>Noches donde la música y la ministración se alinean para despertar fe, dirección y respuesta.</p>
          </div>
          <div className="epi-card">
            <div className="epi-icon">📍</div>
            <h3>Ciudades alcanzadas</h3>
            <p>La visión se mueve por España llevando encuentros de adoración a nuevas comunidades.</p>
          </div>
          <div className="epi-card">
            <div className="epi-icon">✦</div>
            <h3>Invita a Infinity Sound</h3>
            <p>Una iglesia, un evento o una fecha pueden convertirse en el próximo punto de encuentro del tour.</p>
          </div>
        </div>
        <div className="mottos-grid reveal reveal--d4">
          <div className="motto">Una ciudad. Una noche.</div>
          <div className="motto stroke-motto">La presencia guía.</div>
          <div className="motto">Todo comienza con adoración.</div>
          <div className="motto stroke-motto">Sonido que abre cielo.</div>
          <div className="motto">Fe en movimiento.</div>
          <div className="motto stroke-motto">Infinity Sound en vivo.</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";

const projects = [
  { title: "Akur Table Collection", client: "GLAS ITALIA", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1100&q=85", shape: "tall" },
  { title: "Composed Modular Sofa", client: "DWR", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85", shape: "wide" },
  { title: "Atli Lounge Chair", client: "WENDELBO", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85", shape: "wide" },
  { title: "Objects for Everyday", client: "STUDIO SERIES", image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85", shape: "tall" },
  { title: "Quiet Forms", client: "MATERIAL STUDIES", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", shape: "wide" },
];
const moreProjects = [
  { title: "On Furniture Design", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85" },
  { title: "On Product Design", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85" },
  { title: "On Materials", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  const [filter, setFilter] = useState("Featured");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = filter === "Archive" ? [...projects].reverse() : projects;
  return (
    <main className="atlas-page">
      <section className="atlas-column atlas-brand">
        <div className="atlas-topline"><span>INDEPENDENT DESIGN STUDIO</span><span>NYC / WORLDWIDE</span></div>
        <a className="atlas-wordmark" href="#top" id="top" aria-label="Atlason home">ATLASON<span>®</span></a>
        <p className="atlas-intro">An independent design studio exploring the intersection of objects, people, and everyday life.</p>
        <div className="atlas-brand-image">
          <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=90" alt="Sculptural objects and materials in a quiet interior" />
          <span>FORM FOLLOWS FEELING — 2025</span>
        </div>
        <div className="atlas-contact-grid">
          <div><h3>Visit</h3><p>594 Broadway, Floor 2<br/>New York, NY 10012</p></div>
          <div><h3>Connect</h3><p><a href="mailto:hello@studio.example">New business ↗</a><br/><a href="mailto:press@studio.example">Press ↗</a></p></div>
          <div><h3>Follow</h3><p><a href="#works">Instagram ↗</a><br/><a href="#more">Newsletter ↗</a></p></div>
        </div>
        <div className="atlas-footer-note"><span>© STUDIO / 2025</span><span>MADE WITH INTENTION</span></div>
      </section>

      <section className="atlas-column atlas-works" id="works">
        <div className="atlas-section-head"><h1>Works<span>({String(visibleProjects.length).padStart(2, "0")})</span></h1><button className="atlas-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? "Close −" : "Filter +"}</button></div>
        {menuOpen && <div className="atlas-filter">{["Featured", "Archive"].map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => { setFilter(item); setMenuOpen(false); }}>{item}</button>)}</div>}
        <div className="atlas-work-grid">
          {visibleProjects.map((project, i) => <a className={"atlas-work-card " + project.shape} href="#contact" key={project.title}>
            <div className="atlas-work-image"><img src={project.image} alt={project.title} loading={i > 1 ? "lazy" : "eager"}/><span className="atlas-work-index">{String(i + 1).padStart(2, "0")}</span><span className="atlas-work-arrow">↗</span></div>
            <div className="atlas-work-caption"><span>{project.title}</span><span>{project.client}</span></div>
          </a>)}
        </div>
        <a className="atlas-view-all" href="#more">Explore selected work <span>↗</span></a>
      </section>

      <section className="atlas-column atlas-more" id="more">
        <div className="atlas-section-head"><h2>More<span>+</span></h2><span className="atlas-edition">STUDIO NOTES / 001</span></div>
        <p className="atlas-more-lead">Good design asks better questions. Great design makes the answers feel inevitable.</p>
        <div className="atlas-more-links">
          {moreProjects.map((item, i) => <a href="#contact" className="atlas-more-card" key={item.title}>
            <div className="atlas-more-image"><img src={item.image} alt={item.title} loading="lazy"/><span>0{i + 1}</span></div>
            <div className="atlas-more-caption"><span>{item.title}</span><span>↗</span></div>
          </a>)}
        </div>
        <div className="atlas-statement"><span>OUR APPROACH</span><p>Useful.<br/>Beautiful.<br/><em>Built to last.</em></p><a href="#contact">About the studio ↗</a></div>
        <div className="atlas-contact" id="contact"><span>Have a good question?</span><a href="mailto:hello@studio.example">Let’s talk ↗</a><small>New business inquiries / hello@studio.example</small></div>
      </section>
    </main>
  );
}

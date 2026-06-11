/* ═══════════════════════════════════════
   Modal System — Projects & Publications
   ═══════════════════════════════════════ */

/* ── DATA: Projects ── */
const PROJECTS = {
  thesis: {
    type: 'M.Plan Thesis',
    title: 'Assessment of Urban Mobility Equity',
    subtitle: 'M.Plan Thesis · Kochi Municipal Corporation Area',
    tags: ['Urban Planning', 'Mobility Equity', 'Transport Planning', 'Kochi'],
    description: `Assessment of Urban Mobility Equity in Kochi Municipal Corporation Area is a Master of Planning thesis that evaluates the equity of urban mobility systems in Kochi through the dimensions of accessibility, availability, affordability, and safety. Using GIS-based spatial analysis, secondary datasets, and user surveys, the study identifies mobility disparities across different zones of the city and assesses how effectively public transport systems serve residents. Based on the findings and international best practices, the project proposes integrated planning strategies, including multimodal connectivity improvements, bus network enhancements, integrated ticketing, and pedestrian-focused interventions to support a more inclusive and equitable urban mobility system.`,
    carouselSlides: 10,
    carouselImages: [
      'assets/thesis/slide-01.jpg','assets/thesis/slide-02.jpg','assets/thesis/slide-03.jpg',
      'assets/thesis/slide-04.jpg','assets/thesis/slide-05.jpg','assets/thesis/slide-06.jpg',
      'assets/thesis/slide-07.jpg','assets/thesis/slide-08.jpg','assets/thesis/slide-09.jpg',
      'assets/thesis/slide-10.jpg',
    ],
    sheets: 20,
    sheetImages: Array.from({length:20}, (_,i) => `assets/thesis-sheets/sheet-${String(i+1).padStart(2,'0')}.jpg`),
    showSheetBtn: true,
    showFullPaperBtn: false,
  },
  dissertation: {
    type: 'M.Plan Dissertation',
    title: 'Urban Mobility Equity Index',
    subtitle: 'M.Plan Dissertation · Indian Cities',
    tags: ['Urban Planning', 'Mobility Equity', 'Indian Cities', 'Index Framework'],
    description: `Urban Mobility Equity Index: Defining Dimensions for an Equity-Based Assessment for Indian Cities is a research dissertation that explores how mobility equity can be systematically incorporated into urban transport assessment frameworks in India. Through a comparative review of global and national mobility indices and analysis of six reference cities, the study identifies and validates four key dimensions of mobility equity — Accessibility, Availability, Affordability, and Safety. The research provides a conceptual foundation for future equity-focused mobility assessment frameworks and offers policy insights for developing more inclusive, accessible, and socially equitable urban transport systems in Indian cities.`,
    carouselSlides: 10,
    carouselImages: [
      'assets/dissertation/slide-01.jpg','assets/dissertation/slide-02.jpg','assets/dissertation/slide-03.jpg',
      'assets/dissertation/slide-04.jpg','assets/dissertation/slide-05.jpg','assets/dissertation/slide-06.jpg',
      'assets/dissertation/slide-07.jpg','assets/dissertation/slide-08.jpg','assets/dissertation/slide-09.jpg',
      'assets/dissertation/slide-10.jpg',
    ],
    sheets: 0,
    showSheetBtn: false,
    showFullPaperBtn: false,
  },
  studio1: {
    type: 'M.Plan Studio Project',
    title: 'IoT Driven Community Transformation',
    subtitle: 'M.Plan Semester 1 · GEC Thrissur',
    tags: ['Smart City', 'IoT', 'Urban Planning', 'Ponnani'],
    description: `IoT-Driven Community Transformation is a smart city planning proposal developed for the Ponnani Municipal Area, aimed at leveraging Internet of Things (IoT) technologies to enhance urban services, sustainability, and quality of life. The project integrates smart mobility, resource management, public safety, healthcare, and education through interconnected digital infrastructure, real-time monitoring, and data-driven decision-making. Supported by a phased implementation strategy and informed by international best practices, the proposal demonstrates how emerging technologies can create resilient, efficient, and community-focused urban environments while addressing local development challenges.`,
    carouselSlides: 1,
    carouselImages: ['assets/studio1/sheet-01.png'],
    sheets: 1,
    sheetImages: ['assets/studio1/sheet-01.png'],
    showSheetBtn: false,
    showFullPaperBtn: false,
  },
  studio2: {
    type: 'M.Plan Studio Project',
    title: 'Urban Continuity Nodes',
    subtitle: 'M.Plan Semester 3 · GEC Thrissur',
    tags: ['Disaster Resilience', 'Urban Planning', 'IoT', 'Alappuzha'],
    description: `Urban Continuity Nodes (UCN): A Distributed Resilience Framework for Post-Disaster Recovery is an urban planning thesis proposal that introduces a decentralized recovery system for climate-vulnerable cities. Developed for Alappuzha, the project establishes a network of Urban Continuity Nodes that maintain critical services, coordinate reconstruction activities, and support community recovery following disruptive events such as floods and infrastructure failures. Integrating spatial planning, disaster resilience, IoT sensing, AI-assisted decision support, and multi-layer communication networks, the framework enables rapid, data-driven recovery while reducing dependence on centralized systems. The proposal demonstrates how resilient urban infrastructure and distributed governance can strengthen continuity, adaptability, and long-term urban resilience in hazard-prone environments.`,
    carouselSlides: 5,
    carouselImages: [
      'assets/studio2/sheet-01.jpg','assets/studio2/sheet-02.jpg','assets/studio2/sheet-03.jpg',
      'assets/studio2/sheet-04.jpg','assets/studio2/sheet-05.jpg',
    ],
    sheets: 5,
    sheetImages: [
      'assets/studio2/sheet-01.jpg','assets/studio2/sheet-02.jpg','assets/studio2/sheet-03.jpg',
      'assets/studio2/sheet-04.jpg','assets/studio2/sheet-05.jpg',
    ],
    showSheetBtn: false,
    showFullPaperBtn: false,
  },
  studio3: {
    type: 'M.Plan Studio Project',
    title: 'AI-Enabled Smart Infrastructure for Corridor Management',
    subtitle: 'M.Plan Semester 2 · GEC Thrissur',
    tags: ['Smart City', 'AI Infrastructure', 'IoT', 'Ernakulam'],
    description: `AI-Enabled Smart Infrastructure for Corridor Management is an urban technology proposal developed for the North–South Corridor between Ernakulam South and North Railway Stations. The project introduces an integrated smart infrastructure framework that combines IoT sensors, AI-driven analytics, digital dashboards, citizen feedback systems, and intelligent street-level infrastructure to monitor and manage corridor performance in real time. By enabling data-driven decision-making, responsive public services, and continuous stakeholder engagement, the proposal aims to improve mobility, safety, environmental quality, and urban governance while creating a scalable model for smart corridor management in rapidly urbanizing city centers.`,
    carouselSlides: 1,
    carouselImages: ['assets/studio3/sheet-01.jpg'],
    sheets: 1,
    sheetImages: ['assets/studio3/sheet-01.jpg'],
    showSheetBtn: false,
    showFullPaperBtn: false,
  },
};

/* ── DATA: Publications ── */
const PUBLICATIONS = {
  pub1: {
    type: 'Journal Article',
    title: 'Defining Mobility Equity: A Dimension Based Framework for Assessing Urban Transport in Indian Cities',
    journal: 'International Journal for Multidisciplinary Research (IJFMR)',
    meta: 'Vol. 8, Issue 2 · March–April 2026 · E-ISSN: 2582-2160',
    doi: '',
    tags: ['Urban Planning', 'Transport Policy', 'Mobility Equity', 'Indian Cities'],
    description: ``,
    carouselSlides: 6,
    carouselImages: [
      'assets/publication/slide-01.jpg','assets/publication/slide-02.jpg','assets/publication/slide-03.jpg',
      'assets/publication/slide-04.jpg','assets/publication/slide-05.jpg','assets/publication/slide-06.jpg',
    ],
    showFullPaperBtn: true,
    fullPaperUrl: '#',
    paperPages: 7,
    paperImages: Array.from({length:7}, (_,i) => `assets/publication-paper/page-${String(i+1).padStart(2,'0')}.jpg`),
  },
};

/* ════════════════════════════
   Carousel Class
════════════════════════════ */
class Carousel {
  constructor(container, count, images) {
    this.container = container;
    this.count = count;
    this.images = images || [];
    this.current = 0;
    this.render();
    this.bind();
  }

  render() {
    this.container.innerHTML = `
      <div class="carousel">
        <div class="carousel-track" id="${this.container.id}-track">
          ${Array.from({length: this.count}, (_, i) => {
            const src = this.images[i];
            return src
              ? `<div class="carousel-slide" style="background:#111">
                   <img src="${src}" alt="Slide ${i+1}" style="width:100%;height:100%;object-fit:contain;display:block" loading="lazy" />
                 </div>`
              : `<div class="carousel-slide">
                   <div style="text-align:center;padding:2rem;">
                     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style="margin-bottom:1rem;opacity:.3">
                       <rect x="4" y="4" width="32" height="32" rx="3" stroke="currentColor" stroke-width="1.5"/>
                       <path d="M4 14h32M14 4v32" stroke="currentColor" stroke-width="1"/>
                     </svg>
                     <div style="font-family:var(--font-mono);font-size:.72rem;letter-spacing:.15em;color:var(--mist)">SLIDE ${i + 1} / ${this.count}</div>
                   </div>
                 </div>`;
          }).join('')}
        </div>
        <button class="carousel-btn prev" aria-label="Previous">&#8592;</button>
        <button class="carousel-btn next" aria-label="Next">&#8594;</button>
      </div>
      <div class="carousel-dots">
        ${Array.from({length: this.count}, (_, i) => `
          <button class="carousel-dot${i===0?' active':''}" data-idx="${i}" aria-label="Slide ${i+1}"></button>`).join('')}
      </div>`;
    this.track = this.container.querySelector('.carousel-track');
    this.dots  = this.container.querySelectorAll('.carousel-dot');
  }

  bind() {
    this.container.querySelector('.prev').addEventListener('click', () => this.go(this.current - 1));
    this.container.querySelector('.next').addEventListener('click', () => this.go(this.current + 1));
    this.dots.forEach(d => d.addEventListener('click', () => this.go(+d.dataset.idx)));
  }

  go(n) {
    this.current = ((n % this.count) + this.count) % this.count;
    this.track.style.transform = `translateX(-${this.current * 100}%)`;
    this.dots.forEach((d, i) => d.classList.toggle('active', i === this.current));
  }
}

/* ════════════════════════════
   Sheet Grid Builder
════════════════════════════ */
function buildSheetGrid(count, images) {
  return '<div class="sheet-grid">' +
    Array.from({length: count}, (_, i) => {
      const src = images && images[i];
      return src
        ? `<div class="sheet-item" style="padding:0;overflow:hidden;cursor:zoom-in" onclick="openLightbox('${src}')"><img src="${src}" alt="Sheet ${i+1}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy"/></div>`
        : `<div class="sheet-item"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="2" width="24" height="24" rx="2" stroke="currentColor" stroke-width="1.2"/><path d="M7 9h14M7 13h14M7 17h8" stroke="currentColor" stroke-width="1"/></svg>Sheet ${String(i+1).padStart(2,'0')}</div>`;
    }).join('') +
  '</div>';
}

/* ════════════════════════════
   Modal Builder
════════════════════════════ */
function buildProjectModal(key) {
  const d = PROJECTS[key];
  const isStudio = key.startsWith('studio');

  return `
    <div class="modal-header">
      <div>
        <div class="section-label" style="margin-bottom:.5rem">${d.type}</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(1.3rem,3vw,1.9rem);font-weight:500;color:var(--charcoal);line-height:1.2">${d.title}</h2>
        <div style="font-family:var(--font-mono);font-size:.7rem;color:var(--mist);letter-spacing:.08em;margin-top:.5rem">${d.subtitle}</div>
        <div class="modal-project-meta">${d.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <button class="modal-close" onclick="closeModal()" aria-label="Close">&#x2715;</button>
    </div>
    <div class="modal-body">
      ${d.description ? `<p class="modal-description">${d.description}</p>` : ''}

      <div class="modal-section-title">Visual Overview</div>
      <div id="carousel-wrap-${key}"></div>

      ${d.showSheetBtn ? `
        <div style="margin-top:1.5rem;display:flex;justify-content:flex-end">
          <button class="btn btn-outline" onclick="openSheetsModal('${key}')">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M4 5h8M4 8h8M4 11h5" stroke="currentColor" stroke-width="1.2"/></svg>
            View Full Sheets
          </button>
        </div>` : ''}

      ${d.showFullPaperBtn ? `
        <div style="margin-top:1.5rem;display:flex;justify-content:flex-end">
          <a class="btn btn-outline" href="${d.fullPaperUrl}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" stroke-width="1.3"/><path d="M10 2v3h3M5 7h6M5 9.5h6M5 12h4" stroke="currentColor" stroke-width="1.2"/></svg>
            View Full Paper
          </a>
        </div>` : ''}

      ${isStudio && d.sheets > 0 ? `
        <div class="modal-section-title" style="margin-top:2rem">Project Sheets</div>
        ${buildSheetGrid(d.sheets, d.sheetImages || [])}` : ''}
    </div>`;
}

function buildPublicationModal(key) {
  const d = PUBLICATIONS[key];
  return `
    <div class="modal-header">
      <div>
        <div class="section-label" style="margin-bottom:.5rem">${d.type}</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(1.2rem,2.5vw,1.75rem);font-weight:500;color:var(--charcoal);line-height:1.25">${d.title}</h2>
        <div style="font-size:.875rem;color:var(--accent);font-style:italic;margin-top:.35rem">${d.journal}</div>
        <div style="font-family:var(--font-mono);font-size:.68rem;color:var(--mist);letter-spacing:.08em;margin-top:.25rem">${d.meta}</div>
        <div class="modal-project-meta" style="margin-top:.75rem">${d.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <button class="modal-close" onclick="closeModal()" aria-label="Close">&#x2715;</button>
    </div>
    <div class="modal-body">
      ${d.description ? `<p class="modal-description">${d.description}</p>` : ''}
      <div class="modal-section-title">Figures &amp; Visuals</div>
      <div id="carousel-wrap-${key}"></div>
      <div style="margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end">
        <button class="btn btn-outline" onclick="openPaperModal('${key}')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" stroke-width="1.3"/><path d="M10 2v3h3M5 7h6M5 9.5h6M5 12h4" stroke="currentColor" stroke-width="1.2"/></svg>
          View Full Paper
        </button>
      </div>
    </div>`;
}

/* ════════════════════════════
   Sheets Full-Screen Modal
════════════════════════════ */
function buildSheetsModal(key) {
  const d = PROJECTS[key];
  return `
    <div class="modal-header">
      <div>
        <div class="section-label" style="margin-bottom:.5rem">Full Sheets — ${d.type}</div>
        <h2 style="font-family:var(--font-display);font-size:1.5rem;font-weight:500">${d.title}</h2>
      </div>
      <button class="modal-close" onclick="closeSheetsModal()" aria-label="Close">&#x2715;</button>
    </div>
    <div class="modal-body">
      <div class="modal-section-title">${d.sheets} Sheets</div>
      ${buildSheetGrid(d.sheets, d.sheetImages || [])}
    </div>`;
}

/* ════════════════════════════
   Full Paper Modal
════════════════════════════ */
function buildPaperModal(key) {
  const d = PUBLICATIONS[key];
  const imgs = d.paperImages || [];
  return `
    <div class="modal-header">
      <div>
        <div class="section-label" style="margin-bottom:.5rem">Full Paper</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(1rem,2vw,1.4rem);font-weight:500;line-height:1.3">${d.title}</h2>
        <div style="font-family:var(--font-mono);font-size:.68rem;color:var(--mist);letter-spacing:.08em;margin-top:.35rem">${d.meta}</div>
      </div>
      <button class="modal-close" onclick="closePaperModal()" aria-label="Close">&#x2715;</button>
    </div>
    <div class="modal-body">
      <div class="modal-section-title">${imgs.length} Pages</div>
      <div style="display:flex;flex-direction:column;gap:1rem;margin-top:.5rem">
        ${imgs.map((src, i) => `<img src="${src}" alt="Page ${i+1}" style="width:100%;border-radius:var(--r-md);box-shadow:var(--shadow-sm);display:block" loading="lazy"/>`).join('')}
      </div>
    </div>`;
}

function openPaperModal(key) {
  paperBox.innerHTML = buildPaperModal(key);
  paperOverlay.classList.add('open');
}

function closePaperModal() {
  paperOverlay.classList.remove('open');
  setTimeout(() => { paperBox.innerHTML = ''; }, 350);
}

/* ════════════════════════════
   Lightbox (sheet zoom)
════════════════════════════ */
function openLightbox(src) {
  const lb = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lb.classList.add('open');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox-overlay');
  lb.classList.remove('open');
}

/* ════════════════════════════
   Open / Close Modal
════════════════════════════ */
const overlay       = document.getElementById('modal-overlay');
const modalBox      = document.getElementById('modal-box');
const sheetsOverlay = document.getElementById('sheets-modal-overlay');
const sheetsBox     = document.getElementById('sheets-modal-box');
const paperOverlay  = document.getElementById('paper-modal-overlay');
const paperBox      = document.getElementById('paper-modal-box');

function openModal(type, key) {
  let html = '';
  if (type === 'project')     html = buildProjectModal(key);
  if (type === 'publication') html = buildPublicationModal(key);
  modalBox.innerHTML = html;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Init carousel after DOM insertion
  const wrapId = `carousel-wrap-${key}`;
  const wrap = document.getElementById(wrapId);
  if (wrap) {
    const data   = type === 'project' ? PROJECTS[key] : PUBLICATIONS[key];
    const count  = data?.carouselSlides;
    const images = data?.carouselImages || [];
    if (count) new Carousel(wrap, count, images);
  }
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modalBox.innerHTML = ''; }, 350);
}

function openSheetsModal(key) {
  sheetsBox.innerHTML = buildSheetsModal(key);
  sheetsOverlay.classList.add('open');
}

function closeSheetsModal() {
  sheetsOverlay.classList.remove('open');
  setTimeout(() => { sheetsBox.innerHTML = ''; }, 350);
}

/* Close on overlay click */
overlay?.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
sheetsOverlay?.addEventListener('click', e => { if (e.target === sheetsOverlay) closeSheetsModal(); });
paperOverlay?.addEventListener('click', e => { if (e.target === paperOverlay) closePaperModal(); });
document.getElementById('lightbox-overlay')?.addEventListener('click', closeLightbox);

/* Close on Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeSheetsModal(); closePaperModal(); closeLightbox(); }
});

/* ── Wire project cards ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-project]').forEach(el => {
    el.addEventListener('click', () => openModal('project', el.dataset.project));
  });
  document.querySelectorAll('[data-publication]').forEach(el => {
    el.addEventListener('click', () => openModal('publication', el.dataset.publication));
  });
});

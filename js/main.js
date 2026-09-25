const PROJECTS = {
  thesis:{
    kicker:"M.Plan Thesis · 2026",
    title:"Assessment of Urban Mobility Equity in Kochi Municipal Corporation Area",
    lead:"A spatial assessment of urban mobility equity in Kochi using accessibility, availability, affordability and safety as analytical dimensions. The study combines user surveys, secondary data and GIS-based spatial analysis across six analytical zones.",
    tags:["Urban Mobility","GIS","Spatial Analysis","Planning"],
    process:["Research question","Survey + data","GIS analysis","Planning proposals"],
    sections:[
      ["The study","The thesis translates the conceptual mobility-equity dimensions developed through the earlier dissertation into a spatial assessment of Kochi Municipal Corporation. It examines how transport systems perform across different parts of the city and where disparities emerge."],
      ["Planning response","The proposals include an integrated bus transit network, bus-priority corridors, multimodal hubs, integrated ticketing and fare-system improvements, and a pedestrian safety framework with an implementation strategy."]
    ],
    gallery:[
      "assets/thesis/mobility-network-map.jpg",
      "assets/thesis/zone-analysis-accessibility-availability.jpg",
      "assets/thesis/zone-analysis-affordability-safety.jpg",
      "assets/thesis/bus-network-map.jpg"
    ],
    allSheets:Array.from({length:20},(_,i)=>`assets/thesis-sheets/sheet-${String(i+1).padStart(2,"0")}.jpg`)
  },
  paper:{
    kicker:"Published research · IJFMR · 2026",
    title:"Defining Mobility Equity: A Dimension Based Framework for Assessing Urban Transport in Indian Cities",
    lead:"A published research paper identifying and structuring four core dimensions for mobility-equity assessment in Indian cities through literature review, framework synthesis and comparative analysis of six cities.",
    tags:["Research","Mobility Equity","Transport Planning","Indian Cities"],
    process:["Literature review","Framework synthesis","Indicator selection","Comparative assessment"],
    sections:[
      ["Publication","International Journal for Multidisciplinary Research (IJFMR), Volume 8, Issue 2, March–April 2026. E-ISSN: 2582-2160."],
      ["Core framework","Accessibility, availability, affordability and safety are treated as interrelated dimensions. The study provides a conceptual and analytical foundation for equity-based mobility assessment rather than claiming a complete index."]
    ],
    gallery:[
      "assets/publication/slide-01.jpg","assets/publication/slide-02.jpg","assets/publication/slide-03.jpg",
      "assets/publication/slide-04.jpg","assets/publication/slide-05.jpg","assets/publication/slide-06.jpg"
    ],
    paper:true
  },
  lap:{
    kicker:"Government planning · LSGD (Planning), Thrissur",
    title:"Sakthan Nagar Local Area Plan",
    lead:"Planning internship work for the Sakthan Nagar Local Area Plan in Thrissur. Government project data and unpublished material are intentionally not reproduced in this portfolio.",
    tags:["Local Area Plan","GIS","Traffic Analysis","Government Planning"],
    process:["Site visits","Primary surveys","Data analysis","Planning proposals"],
    sections:[
      ["My contribution","Conducted site visits and primary surveys; analysed survey and traffic-study data; mapped relevant planning information using GIS; contributed to project proposals, development regulations and planning recommendations; prepared reports and presentations."],
      ["Portfolio treatment","Because the work was undertaken for a government planning project, this case study is presented through the workflow and professional contribution rather than confidential datasets, maps or unpublished project material."]
    ]
  },
  dissertation:{
    kicker:"M.Plan Dissertation · 2025",
    title:"Urban Mobility Equity Index",
    lead:"The conceptual and comparative research stage of my mobility-equity work. The study defined four core dimensions and tested them through a secondary-data comparison of six reference cities.",
    tags:["Urban Research","Mobility Equity","Comparative Analysis","Framework"],
    process:["Literature review","Dimension definition","Indicator selection","City comparison"],
    sections:[
      ["Research contribution","The study structured mobility equity around accessibility, availability, affordability and safety and examined how these dimensions can be operationalised in an Indian urban context."],
      ["Relationship to the thesis","This dissertation established the conceptual and analytical foundation for the later spatial assessment of mobility equity in Kochi. It is a separate research work, not the same study."]
    ],
    gallery:[
      "assets/dissertation/slide-02.jpg","assets/dissertation/slide-03.jpg","assets/dissertation/slide-04.jpg",
      "assets/dissertation/slide-07.jpg","assets/dissertation/slide-08.jpg","assets/dissertation/slide-09.jpg"
    ]
  },
  alappuzha:{
    kicker:"M.Plan Semester 3 · Group Planning Project",
    title:"Integrated Urban Growth for a Resilient Future — Alappuzha",
    lead:"A group planning project exploring resilient urban growth in Alappuzha. My contribution focused on land use, employment and economy.",
    tags:["Land Use","Employment & Economy","Resilience","PAPRIKA"],
    process:["Sectoral analysis","Assessment","PAPRIKA scoring","Project prioritisation"],
    sections:[
      ["My contribution","Studied the land-use and employment/economy sectors, assessed their strengths, weaknesses and potential, applied PAPRIKA-based scoring with the group, and contributed to project formulation for resilient development."],
      ["Project context","The wider group project addressed integrated urban growth and resilience. This portfolio entry deliberately distinguishes my contribution from the complete group output."]
    ],
    gallery:[]
  },
  corridor:{
    kicker:"M.Plan Semester 2 · Group Planning Project",
    title:"Kochi Master Plan / North–South Corridor Development",
    lead:"A group planning project based on master-plan appraisal, field investigation and corridor-development studies in Kochi.",
    tags:["Master Plan Appraisal","Corridor Planning","GIS","Field Research"],
    process:["Planning documents","Field investigation","Stakeholder inputs","Spatial proposals"],
    sections:[
      ["My contribution","Studied the master plan and related documents; participated in field visits; collected primary and secondary datasets; participated in stakeholder interviews; analysed the data; contributed to selecting the planning region for North–South Corridor development; and supported surveys and project proposals."],
      ["Portfolio treatment","The project is presented as group work with my contribution separated from the overall project scope."]
    ]
  },
  ucn:{
    kicker:"M.Plan Semester 3 · Alappuzha",
    title:"Urban Continuity Nodes",
    lead:"A distributed resilience framework for post-disaster recovery in climate-vulnerable urban areas, developed for Alappuzha.",
    tags:["Resilience","Spatial Planning","Disaster Recovery","Infrastructure"],
    process:["Hazard analysis","Node framework","Recovery sequencing","Spatial deployment"],
    sections:[
      ["Project concept","Urban Continuity Nodes create a distributed network for maintaining critical services, coordinating recovery and supporting communities after disruptive events."],
      ["Systems explored","The project combined spatial planning, recovery sequencing, infrastructure systems, IoT sensing, communication networks and AI-assisted decision support."]
    ],
    gallery:[
      "assets/studio2/sheet-01.jpg","assets/studio2/sheet-02.jpg","assets/studio2/sheet-03.jpg",
      "assets/studio2/sheet-04.jpg","assets/studio2/sheet-05.jpg"
    ]
  },
  smart:{
    kicker:"M.Plan Semester 2 · Ernakulam North–South Corridor",
    title:"AI-Enabled Smart Infrastructure for Corridor Management",
    lead:"A smart-infrastructure concept combining IoT sensing, real-time monitoring, data analytics and responsive street-level infrastructure for corridor management.",
    tags:["Smart Infrastructure","IoT","Corridor Management","Technology"],
    process:["System framework","Sensor layer","Data + dashboard","Pilot implementation"],
    sections:[
      ["Project concept","The proposal integrates smart sensor nodes, real-time dashboards, pedestrian-oriented infrastructure, citizen feedback and digital/physical infrastructure layers."],
      ["Planning relevance","The project explores how technology can support mobility, safety, environmental quality and urban governance through continuous data and responsive management."]
    ],
    gallery:["assets/studio3/sheet-01.jpg"]
  },
  ponnani:{
    kicker:"M.Plan Semester 1 · Group Planning Project",
    title:"Appraisal of Ponnani Municipal Area — Housing & POE",
    lead:"My contribution to the wider Ponnani appraisal focused on housing and post-occupancy evaluation.",
    tags:["Housing","Post-Occupancy Evaluation","Field Survey","GIS"],
    process:["Questionnaire","Field survey","Data analysis","GIS + recommendations"],
    sections:[
      ["My contribution","Worked with the group to develop a questionnaire, conduct field surveys, analyse housing/POE data using Excel and manual methods, prepare GIS maps and develop recommendations based on the findings."],
      ["Project context","The wider municipal appraisal covered multiple sectors. This portfolio entry focuses specifically on my housing and post-occupancy evaluation contribution."]
    ]
  }
};

const modal = document.getElementById("modal");
const modalKicker = document.getElementById("modal-kicker");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("modal-close");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function openProject(key){
  const d=PROJECTS[key];
  if(!d)return;
  modalKicker.textContent=d.kicker;
  modalTitle.textContent=d.title;
  modalBody.innerHTML=`
    <p class="lead">${esc(d.lead)}</p>
    <div class="modal-meta">${d.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
    <div class="modal-section">
      <div class="process">${d.process.map((p,i)=>`<div><strong>0${i+1}</strong><span>${esc(p)}</span></div>`).join("")}</div>
    </div>
    ${d.sections.map(s=>`<div class="modal-section"><h3>${esc(s[0])}</h3><div class="text-columns"><p>${esc(s[1])}</p></div></div>`).join("")}
    ${d.gallery?.length?`<div class="modal-section"><div class="section-line"><h3>Selected visuals</h3>${d.allSheets?.length?`<button class="sheet-toggle" type="button" data-sheet-toggle>View all ${d.allSheets.length} thesis sheets <span>＋</span></button>`:""}</div><div class="gallery ${d.gallery.length===1?"one":""}">${d.gallery.map((src,i)=>`<figure class="visual-card"><img src="${src}" alt="${esc(d.title)} visual ${i+1}" loading="lazy" data-lightbox="${src}"></figure>`).join("")}</div>${d.allSheets?.length?`<div class="sheet-grid" data-sheet-grid aria-hidden="true">${d.allSheets.map((src,i)=>`<figure class="sheet-card"><button type="button" data-lightbox="${src}" aria-label="Open thesis sheet ${i+1}"><img src="${src}" alt="Thesis sheet ${i+1}" loading="lazy"><span class="sheet-number">Sheet ${String(i+1).padStart(2,"0")}</span></button></figure>`).join("")}</div>`:""}</div>`:""}
    ${d.paper?`<div class="modal-section"><h3>Full paper</h3><div class="paper-pages">${Array.from({length:7},(_,i)=>`<img src="assets/publication-paper/page-${String(i+1).padStart(2,"0")}.jpg" alt="Published paper page ${i+1}" loading="lazy" data-lightbox="assets/publication-paper/page-${String(i+1).padStart(2,"0")}.jpg">`).join("")}</div></div>`:""}
  `;
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
  modal.querySelectorAll("[data-lightbox]").forEach(el=>el.addEventListener("click",()=>openLightbox(el.dataset.lightbox)));
  const sheetToggle=modal.querySelector("[data-sheet-toggle]");
  const sheetGrid=modal.querySelector("[data-sheet-grid]");
  if(sheetToggle&&sheetGrid){
    sheetToggle.addEventListener("click",()=>{
      const isOpen=sheetGrid.classList.toggle("open");
      sheetGrid.setAttribute("aria-hidden",String(!isOpen));
      sheetToggle.classList.toggle("open",isOpen);
      sheetToggle.querySelector("span").textContent=isOpen?"−":"＋";
    });
  }
}

function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")}
function openLightbox(src){lightboxImg.src=src;lightbox.classList.add("open")}
function closeLightbox(){lightbox.classList.remove("open");lightboxImg.src=""}

document.querySelectorAll("[data-project]").forEach(el=>{
  el.addEventListener("click",e=>{
    if(e.target.closest("a") && e.target.closest("a").dataset.projectLink){
      e.preventDefault();
    }
    openProject(el.dataset.project);
  });
  el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openProject(el.dataset.project)}});
});
document.querySelectorAll("[data-project-link]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();openProject(a.dataset.projectLink)}));
closeBtn.addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.getElementById("lightbox-close").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeLightbox()}});

const nav=document.getElementById("site-nav");
window.addEventListener("scroll",()=>{
  nav.classList.toggle("scrolled",window.scrollY>30);
  const sections=[...document.querySelectorAll("main section[id]")];
  const y=window.scrollY+120;
  let active="";
  sections.forEach(s=>{if(y>=s.offsetTop)active=s.id});
  document.querySelectorAll(".nav-links a:not(.nav-cv)").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+active));
},{passive:true});

const menu=document.getElementById("menu"), mobile=document.getElementById("mobile-nav");
menu.addEventListener("click",()=>{
  const open=mobile.classList.toggle("open");
  menu.setAttribute("aria-expanded",open);
});
mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobile.classList.remove("open");menu.setAttribute("aria-expanded","false")}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08,rootMargin:"0px 0px -30px"});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

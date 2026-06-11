/* ═══════════════════════════════════════
   Canvas Animations — Urban Visuals
   ═══════════════════════════════════════ */

/* ── Hero Background Grid Canvas ── */
function initHeroBgCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, lines = [], nodes = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildScene();
  }

  function buildScene() {
    lines = []; nodes = [];
    // Road network lines
    const count = Math.floor(W / 80);
    for (let i = 0; i < count; i++) {
      lines.push({
        x1: Math.random() * W, y1: Math.random() * H,
        x2: Math.random() * W, y2: Math.random() * H,
        speed: .2 + Math.random() * .4,
        progress: Math.random(),
        color: Math.random() > .5 ? '#2B4B6F' : '#C8803A'
      });
    }
    // Node intersections
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * W, y: Math.random() * H,
        r: 1.5 + Math.random() * 3,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    // Draw roads
    lines.forEach(l => {
      l.progress = (l.progress + l.speed * .001) % 1;
      const px = l.x1 + (l.x2 - l.x1) * l.progress;
      const py = l.y1 + (l.y2 - l.y1) * l.progress;
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1); ctx.lineTo(l.x2, l.y2);
      ctx.strokeStyle = l.color; ctx.lineWidth = .6; ctx.globalAlpha = .3;
      ctx.stroke();
      // Moving dot
      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fillStyle = l.color; ctx.globalAlpha = .8;
      ctx.fill();
    });
    // Draw nodes
    nodes.forEach(n => {
      n.pulse += .02;
      const a = .4 + .3 * Math.sin(n.pulse);
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = '#2B4B6F'; ctx.globalAlpha = a; ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
}

/* ── Hero City Panel (dark panel with animated skyline) ── */
function initCityPanelCanvas() {
  const canvas = document.getElementById('city-panel-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  let buildings = [], windows = [], vehicles = [], stars = [];
  let t = 0;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildCity();
  }

  function buildCity() {
    buildings = []; windows = []; vehicles = []; stars = [];

    // Stars / lights in sky
    for (let i = 0; i < 60; i++) {
      stars.push({ x: Math.random() * W, y: Math.random() * H * .45, r: Math.random() * 1.2, t: Math.random() * Math.PI * 2 });
    }

    // Background buildings (far)
    for (let x = 0; x < W + 60; x += 28 + Math.random() * 20) {
      const bh = 60 + Math.random() * 120;
      buildings.push({ x, y: H - bh, w: 20 + Math.random() * 18, h: bh, layer: 0 });
    }
    // Foreground buildings (close)
    for (let x = -20; x < W + 60; x += 40 + Math.random() * 30) {
      const bh = 80 + Math.random() * 160;
      const bw = 30 + Math.random() * 28;
      buildings.push({ x, y: H - bh, w: bw, h: bh, layer: 1 });
      // Windows
      for (let wy = H - bh + 10; wy < H - 10; wy += 14) {
        for (let wx = x + 6; wx < x + bw - 6; wx += 12) {
          if (Math.random() > .3) {
            windows.push({ x: wx, y: wy, on: Math.random() > .3, blink: Math.random() > .85, bt: Math.random() * 200 });
          }
        }
      }
    }

    // Moving vehicles on ground
    for (let i = 0; i < 6; i++) {
      vehicles.push({
        x: Math.random() * W,
        y: H - 8 - Math.floor(Math.random() * 3) * 6,
        speed: .4 + Math.random() * .8,
        color: Math.random() > .5 ? '#E8A55A' : '#fff',
        w: 10 + Math.random() * 8
      });
    }
  }

  function draw() {
    t++;
    ctx.clearRect(0, 0, W, H);

    // Sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H * .6);
    sky.addColorStop(0, '#0A1628');
    sky.addColorStop(1, '#1A2F4A');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // Stars
    stars.forEach(s => {
      s.t += .02;
      const a = .4 + .4 * Math.sin(s.t);
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill();
    });

    // Horizon glow
    const glow = ctx.createLinearGradient(0, H * .45, 0, H * .65);
    glow.addColorStop(0, 'rgba(43,75,111,0)');
    glow.addColorStop(.5, 'rgba(200,128,58,.12)');
    glow.addColorStop(1, 'rgba(43,75,111,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, H * .45, W, H * .2);

    // Far buildings
    buildings.filter(b => b.layer === 0).forEach(b => {
      ctx.fillStyle = '#1E3A5A';
      ctx.fillRect(b.x, b.y, b.w, b.h);
    });

    // Ground
    ctx.fillStyle = '#0D1B2A';
    ctx.fillRect(0, H - 30, W, 30);
    // Road lines
    ctx.strokeStyle = 'rgba(200,128,58,.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([12, 18]);
    ctx.beginPath(); ctx.moveTo(0, H - 15); ctx.lineTo(W, H - 15); ctx.stroke();
    ctx.setLineDash([]);

    // Near buildings
    buildings.filter(b => b.layer === 1).forEach(b => {
      const grad = ctx.createLinearGradient(b.x, b.y, b.x + b.w, b.y);
      grad.addColorStop(0, '#1A2F4A');
      grad.addColorStop(1, '#243D58');
      ctx.fillStyle = grad;
      ctx.fillRect(b.x, b.y, b.w, b.h);
      // Outline
      ctx.strokeStyle = 'rgba(43,75,111,.4)';
      ctx.lineWidth = .5;
      ctx.strokeRect(b.x, b.y, b.w, b.h);
    });

    // Windows
    windows.forEach(w => {
      if (w.blink && t % Math.floor(60 + w.bt) < 5) return;
      ctx.fillStyle = w.on ? 'rgba(232,165,90,.8)' : 'rgba(43,75,111,.3)';
      ctx.fillRect(w.x, w.y, 7, 8);
    });

    // Vehicles
    vehicles.forEach(v => {
      v.x = (v.x + v.speed) % (W + 20);
      // Headlight glow
      const lg = ctx.createRadialGradient(v.x + v.w, v.y, 0, v.x + v.w, v.y, 14);
      lg.addColorStop(0, 'rgba(232,165,90,.6)');
      lg.addColorStop(1, 'rgba(232,165,90,0)');
      ctx.fillStyle = lg;
      ctx.fillRect(v.x, v.y - 8, v.w + 14, 16);
      // Car body
      ctx.fillStyle = v.color;
      ctx.fillRect(v.x, v.y - 3, v.w, 5);
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
}

/* ── About Section Transport Network Canvas ── */
function initAboutCanvas() {
  const canvas = document.getElementById('about-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const nodes = [], edges = [], trains = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    init();
  }

  function init() {
    nodes.length = 0; edges.length = 0; trains.length = 0;
    // Metro network nodes
    const pts = [
      [.1,.5],[.25,.2],[.25,.8],[.45,.35],[.45,.65],
      [.6,.2],[.6,.8],[.75,.5],[.88,.25],[.88,.75]
    ];
    pts.forEach(([rx,ry],i) => nodes.push({ x: rx*W, y: ry*H, id: i, pulse: Math.random()*Math.PI*2 }));
    // Edges (metro lines)
    const conn = [[0,1],[0,2],[1,3],[2,4],[3,4],[3,5],[4,6],[5,7],[6,7],[7,8],[7,9]];
    conn.forEach(([a,b]) => {
      edges.push({ a, b });
      trains.push({ a, b, p: Math.random(), speed: .002 + Math.random()*.003, color: Math.random()>.5?'#2B4B6F':'#C8803A' });
    });
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    // Draw edges
    edges.forEach(e => {
      const na = nodes[e.a], nb = nodes[e.b];
      ctx.beginPath(); ctx.moveTo(na.x,na.y); ctx.lineTo(nb.x,nb.y);
      ctx.strokeStyle='rgba(43,75,111,.25)'; ctx.lineWidth=1.5; ctx.stroke();
    });
    // Draw trains
    trains.forEach(tr => {
      tr.p = (tr.p + tr.speed) % 1;
      const na = nodes[tr.a], nb = nodes[tr.b];
      const x = na.x + (nb.x-na.x)*tr.p;
      const y = na.y + (nb.y-na.y)*tr.p;
      ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2);
      ctx.fillStyle=tr.color; ctx.globalAlpha=.9; ctx.fill();
      ctx.globalAlpha=1;
    });
    // Draw nodes
    nodes.forEach(n => {
      n.pulse += .025;
      // Outer ring pulse
      ctx.beginPath(); ctx.arc(n.x,n.y,8+3*Math.sin(n.pulse),0,Math.PI*2);
      ctx.strokeStyle='rgba(43,75,111,.15)'; ctx.lineWidth=1; ctx.stroke();
      // Inner dot
      ctx.beginPath(); ctx.arc(n.x,n.y,4,0,Math.PI*2);
      ctx.fillStyle='#2B4B6F'; ctx.fill();
      ctx.beginPath(); ctx.arc(n.x,n.y,2,0,Math.PI*2);
      ctx.fillStyle='#fff'; ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
}

/* ── Contact Section Canvas (city map top-down) ── */
function initContactCanvas() {
  const canvas = document.getElementById('contact-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, blocks = [], roads = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildMap();
  }

  function buildMap() {
    blocks = []; roads = [];
    const gs = 60;
    for (let x = 0; x < W; x += gs) {
      roads.push({ x1:x, y1:0, x2:x, y2:H });
    }
    for (let y = 0; y < H; y += gs) {
      roads.push({ x1:0, y1:y, x2:W, y2:y });
    }
    for (let x = 8; x < W; x += gs) {
      for (let y = 8; y < H; y += gs) {
        if (Math.random() > .25) {
          const w = 12 + Math.random()*28, h = 12+Math.random()*28;
          blocks.push({ x, y, w, h });
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='rgba(255,255,255,.06)'; ctx.lineWidth=1;
    roads.forEach(r => {
      ctx.beginPath(); ctx.moveTo(r.x1,r.y1); ctx.lineTo(r.x2,r.y2); ctx.stroke();
    });
    blocks.forEach(b => {
      ctx.fillStyle='rgba(255,255,255,.04)';
      ctx.fillRect(b.x, b.y, b.w, b.h);
    });
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

/* ── Project Thumbnail Canvases ── */
function initProjectThumb(canvasId, style) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    draw();
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    if (style === 'grid') drawGridStyle();
    else if (style === 'network') drawNetworkStyle();
    else if (style === 'contour') drawContourStyle();
  }

  function drawGridStyle() {
    const bg = ctx.createLinearGradient(0,0,W,H);
    bg.addColorStop(0,'#1A2F4A'); bg.addColorStop(1,'#0D1B2A');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(43,75,111,.4)'; ctx.lineWidth=.8;
    for(let x=0;x<W;x+=20){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=20){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    // Buildings outline
    for(let i=0;i<8;i++){
      const bx=20+i*(W/8.5), bh=30+Math.random()*60, bw=18+Math.random()*12;
      ctx.fillStyle='rgba(43,75,111,.5)';
      ctx.fillRect(bx, H-bh, bw, bh);
    }
  }

  function drawNetworkStyle() {
    const bg = ctx.createLinearGradient(0,0,W,H);
    bg.addColorStop(0,'#243D58'); bg.addColorStop(1,'#1A2F4A');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
    const pts=[];
    for(let i=0;i<12;i++) pts.push({x:Math.random()*W, y:Math.random()*H});
    pts.forEach((p,i) => {
      pts.slice(i+1).forEach(q => {
        if(Math.hypot(p.x-q.x,p.y-q.y)<W*.35){
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle='rgba(200,128,58,.35)'; ctx.lineWidth=1; ctx.stroke();
        }
      });
      ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2);
      ctx.fillStyle='#C8803A'; ctx.fill();
    });
  }

  function drawContourStyle() {
    const bg = ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#1A2F4A'); bg.addColorStop(1,'#0A1628');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
    for(let i=5;i>=0;i--){
      ctx.beginPath();
      ctx.ellipse(W/2, H*.6, W*(.15+i*.08), H*(.1+i*.06), -.3, 0, Math.PI*2);
      ctx.strokeStyle=`rgba(43,75,111,${.15+i*.05})`; ctx.lineWidth=1.5; ctx.stroke();
    }
    ctx.strokeStyle='rgba(200,128,58,.3)'; ctx.lineWidth=.8; ctx.setLineDash([4,6]);
    ctx.beginPath(); ctx.moveTo(0,H*.5); ctx.lineTo(W,H*.4); ctx.stroke();
    ctx.setLineDash([]);
  }

  window.addEventListener('resize', resize);
  resize();
}

/* ── Init all canvases ── */
document.addEventListener('DOMContentLoaded', () => {
  // initHeroBgCanvas();   — removed, using SVG blueprint instead
  // initCityPanelCanvas(); — removed, using SVG blueprint instead
  // initAboutCanvas();     — removed, transit vis removed
  initContactCanvas();
  // Project card thumbs now use real images — canvas thumbs not needed
  // initProjectThumb('thumb-thesis','grid');
  // initProjectThumb('thumb-dissertation','network');
  // initProjectThumb('thumb-studio1','contour');
  // initProjectThumb('thumb-studio2','grid');
  // initProjectThumb('thumb-studio3','network');
});

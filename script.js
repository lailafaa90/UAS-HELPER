const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const colors = {
  blue: '#5b7cfa',
  teal: '#14b8a6',
  pink: '#f472b6',
  orange: '#ff9f43',
  ink: '#183046',
  muted: '#8292a3',
  fill: 'rgba(91,124,250,0.18)',
  fill2: 'rgba(20,184,166,0.20)',
  grid: 'rgba(24,48,70,0.10)'
};

const examples = [
  {
    id: 'luas-1',
    group: 'Luas',
    title: 'Luas: y = x + 2 dan y = x²',
    desc: 'Samakan x + 2 = x², hasil batas x = -1 dan x = 2. Pada x = 0, garis berada di atas parabola.',
    formula: '\\[L=\\int_{-1}^{2}[(x+2)-x^2]dx=\\frac{9}{2}\\]',
    samples: ['x = -1', 'x = 0', 'x = 1', 'x = 2'],
    xMin: -1.6, xMax: 2.6, yMin: -0.8, yMax: 5.2,
    fillX: { a: -1, b: 2, top: x => x + 2, bottom: x => x * x },
    curves: [
      { name: 'y = x + 2', formula: 'y=x+2', color: colors.blue, fn: x => x + 2 },
      { name: 'y = x²', formula: 'y=x^2', color: colors.teal, fn: x => x * x }
    ],
    points: [{x:-1,y:1,label:'(-1,1)'},{x:2,y:4,label:'(2,4)'}]
  },
  {
    id: 'luas-2',
    group: 'Luas',
    title: 'Luas: y = x² - 2 dan y = 2x² + x - 4',
    desc: 'Samakan kedua fungsi. Batasnya x = -2 sampai x = 1. Fungsi atas adalah x² - 2.',
    formula: '\\[L=\\int_{-2}^{1}[(x^2-2)-(2x^2+x-4)]dx=\\frac{9}{2}\\]',
    samples: ['x = -2', 'x = -1', 'x = 0', 'x = 1'],
    xMin: -2.5, xMax: 1.5, yMin: -5.2, yMax: 3.4,
    fillX: { a: -2, b: 1, top: x => x*x - 2, bottom: x => 2*x*x + x - 4 },
    curves: [
      { name: 'y = x² - 2', color: colors.blue, fn: x => x*x - 2 },
      { name: 'y = 2x² + x - 4', color: colors.teal, fn: x => 2*x*x + x - 4 }
    ],
    points: [{x:-2,y:2,label:'(-2,2)'},{x:1,y:-1,label:'(1,-1)'}]
  },
  {
    id: 'luas-3',
    group: 'Luas',
    title: 'Luas: y = x dan y = x²',
    desc: 'Titik potong dari x = x² adalah x = 0 dan x = 1. Di antara keduanya, garis y = x berada di atas.',
    formula: '\\[L=\\int_{0}^{1}(x-x^2)dx=\\frac{1}{6}\\]',
    samples: ['x = 0', 'x = 0.5', 'x = 1'],
    xMin: -0.2, xMax: 1.3, yMin: -0.2, yMax: 1.3,
    fillX: { a: 0, b: 1, top: x => x, bottom: x => x*x },
    curves: [
      { name: 'y = x', color: colors.blue, fn: x => x },
      { name: 'y = x²', color: colors.teal, fn: x => x*x }
    ],
    points: [{x:0,y:0,label:'(0,0)'},{x:1,y:1,label:'(1,1)'}]
  },
  {
    id: 'cakram-a',
    group: 'Cakram',
    title: 'Cakram: y = -x + 1, x = 0, x = 1',
    desc: 'Batas x sudah diberikan oleh soal. Diputar terhadap sumbu-X, jadi R = -x + 1.',
    formula: '\\[V=\\pi\\int_0^1(-x+1)^2dx=\\frac{\\pi}{3}\\]',
    samples: ['x = 0 → y = 1', 'x = 1 → y = 0'],
    xMin: -0.25, xMax: 1.25, yMin: -0.35, yMax: 1.35,
    fillX: { a: 0, b: 1, top: x => -x + 1, bottom: x => 0 },
    rotation: 'x',
    curves: [{ name: 'y = -x + 1', color: colors.blue, fn: x => -x + 1 }],
    points: [{x:0,y:1,label:'(0,1)'},{x:1,y:0,label:'(1,0)'}]
  },
  {
    id: 'cakram-b',
    group: 'Cakram',
    title: 'Cakram: y = 4 - x², x = 0, x = 2',
    desc: 'Batas x sudah diberikan. Diputar terhadap sumbu-X, jari-jari R = 4 - x².',
    formula: '\\[V=\\pi\\int_0^2(4-x^2)^2dx=\\frac{256\\pi}{15}\\]',
    samples: ['x = 0 → y = 4', 'x = 1 → y = 3', 'x = 2 → y = 0'],
    xMin: -0.3, xMax: 2.4, yMin: -0.5, yMax: 4.8,
    fillX: { a: 0, b: 2, top: x => 4 - x*x, bottom: x => 0 },
    rotation: 'x',
    curves: [{ name: 'y = 4 - x²', color: colors.blue, fn: x => 4 - x*x }],
    points: [{x:0,y:4,label:'(0,4)'},{x:2,y:0,label:'(2,0)'}]
  },
  {
    id: 'cakram-c',
    group: 'Cakram',
    title: 'Cakram: y = 1 - x² dan sumbu-X',
    desc: 'Karena dibatasi sumbu-X, buat y = 0. Maka 1 - x² = 0, sehingga x = -1 dan x = 1.',
    formula: '\\[V=\\pi\\int_{-1}^{1}(1-x^2)^2dx=\\frac{16\\pi}{15}\\]',
    samples: ['x = -1 → y = 0', 'x = 0 → y = 1', 'x = 1 → y = 0'],
    xMin: -1.35, xMax: 1.35, yMin: -0.3, yMax: 1.35,
    fillX: { a: -1, b: 1, top: x => 1 - x*x, bottom: x => 0 },
    rotation: 'x',
    curves: [{ name: 'y = 1 - x²', color: colors.blue, fn: x => 1 - x*x }],
    points: [{x:-1,y:0,label:'(-1,0)'},{x:0,y:1,label:'(0,1)'},{x:1,y:0,label:'(1,0)'}]
  },
  {
    id: 'cakram-d',
    group: 'Cakram',
    title: 'Cakram: y = √x, x = 1, x = 2',
    desc: 'Batas x sudah diberikan. Saat dikuadratkan, (√x)² = x.',
    formula: '\\[V=\\pi\\int_1^2(\\sqrt{x})^2dx=\\pi\\int_1^2x\\,dx=\\frac{3\\pi}{2}\\]',
    samples: ['x = 1 → y = 1', 'x = 2 → y = √2'],
    xMin: 0.7, xMax: 2.3, yMin: -0.25, yMax: 1.75,
    fillX: { a: 1, b: 2, top: x => Math.sqrt(x), bottom: x => 0 },
    rotation: 'x',
    curves: [{ name: 'y = √x', color: colors.blue, fn: x => Math.sqrt(Math.max(0, x)) }],
    points: [{x:1,y:1,label:'(1,1)'},{x:2,y:Math.sqrt(2),label:'(2,√2)'}]
  },
  {
    id: 'cakram-e',
    group: 'Cakram',
    title: 'Cakram: y = √(9 - x²)',
    desc: 'Isi akar harus ≥ 0. Jadi 9 - x² ≥ 0, sehingga -3 ≤ x ≤ 3.',
    formula: '\\[V=\\pi\\int_{-3}^{3}(\\sqrt{9-x^2})^2dx=36\\pi\\]',
    samples: ['x = -3 → y = 0', 'x = 0 → y = 3', 'x = 3 → y = 0'],
    xMin: -3.5, xMax: 3.5, yMin: -0.5, yMax: 3.6,
    fillX: { a: -3, b: 3, top: x => Math.sqrt(Math.max(0, 9 - x*x)), bottom: x => 0 },
    rotation: 'x',
    curves: [{ name: 'y = √(9 - x²)', color: colors.blue, fn: x => Math.sqrt(Math.max(0, 9 - x*x)) }],
    points: [{x:-3,y:0,label:'(-3,0)'},{x:0,y:3,label:'(0,3)'},{x:3,y:0,label:'(3,0)'}]
  },
  {
    id: 'kulit-a',
    group: 'Kulit tabung',
    title: 'Kulit tabung: y = x², y = 0, x = 3',
    desc: 'Diputar terhadap sumbu-Y. Pakai r = x dan h = x². Batas dari x = 0 sampai x = 3.',
    formula: '\\[V=2\\pi\\int_0^3x(x^2)dx=\\frac{81\\pi}{2}\\]',
    samples: ['x = 0 → y = 0', 'x = 1 → y = 1', 'x = 2 → y = 4', 'x = 3 → y = 9'],
    xMin: -0.5, xMax: 3.5, yMin: -0.8, yMax: 10,
    fillX: { a: 0, b: 3, top: x => x*x, bottom: x => 0 },
    rotation: 'y',
    curves: [{ name: 'y = x²', color: colors.blue, fn: x => x*x }],
    points: [{x:0,y:0,label:'(0,0)'},{x:3,y:9,label:'(3,9)'}]
  },
  {
    id: 'kulit-b',
    group: 'Kulit tabung',
    title: 'Kulit tabung: y = 1/4 x², y = 0, x = 6',
    desc: 'Diputar terhadap sumbu-Y. Pakai r = x dan h = 1/4 x². Batas dari x = 0 sampai x = 6.',
    formula: '\\[V=2\\pi\\int_0^6x\\left(\\frac14x^2\\right)dx=162\\pi\\]',
    samples: ['x = 0 → y = 0', 'x = 2 → y = 1', 'x = 4 → y = 4', 'x = 6 → y = 9'],
    xMin: -0.8, xMax: 6.8, yMin: -0.8, yMax: 10,
    fillX: { a: 0, b: 6, top: x => 0.25*x*x, bottom: x => 0 },
    rotation: 'y',
    curves: [{ name: 'y = ¼x²', color: colors.blue, fn: x => 0.25*x*x }],
    points: [{x:0,y:0,label:'(0,0)'},{x:6,y:9,label:'(6,9)'}]
  },
  {
    id: 'cincin-1',
    group: 'Cincin',
    title: 'Cincin: y = x² dan y = 2x, terhadap sumbu-X',
    desc: 'Titik potong dari x² = 2x adalah x = 0 dan x = 2. Atas R = 2x, bawah r = x².',
    formula: '\\[V=\\pi\\int_0^2[(2x)^2-(x^2)^2]dx=\\frac{64\\pi}{15}\\]',
    samples: ['x = 0', 'x = 1', 'x = 2'],
    xMin: -0.3, xMax: 2.4, yMin: -0.4, yMax: 4.4,
    fillX: { a: 0, b: 2, top: x => 2*x, bottom: x => x*x },
    rotation: 'x',
    curves: [
      { name: 'y = 2x', color: colors.blue, fn: x => 2*x },
      { name: 'y = x²', color: colors.teal, fn: x => x*x }
    ],
    points: [{x:0,y:0,label:'(0,0)'},{x:2,y:4,label:'(2,4)'}]
  },
  {
    id: 'cincin-2',
    group: 'Cincin',
    title: 'Cincin: y = x² dan y = 2x, terhadap sumbu-Y',
    desc: 'Untuk cincin terhadap sumbu-Y, lebih enak pakai dy. R = √y dan r = y/2, batas y = 0 sampai y = 4.',
    formula: '\\[V=\\pi\\int_0^4[(\\sqrt y)^2-(y/2)^2]dy=\\frac{8\\pi}{3}\\]',
    samples: ['y = 0', 'y = 2', 'y = 4'],
    xMin: -0.3, xMax: 2.4, yMin: -0.4, yMax: 4.4,
    fillX: { a: 0, b: 2, top: x => 2*x, bottom: x => x*x },
    rotation: 'y',
    curves: [
      { name: 'y = 2x', color: colors.blue, fn: x => 2*x },
      { name: 'y = x²', color: colors.teal, fn: x => x*x }
    ],
    points: [{x:0,y:0,label:'(0,0)'},{x:2,y:4,label:'(2,4)'}]
  },
  {
    id: 'cincin-3',
    group: 'Cincin',
    title: 'Cincin: x = (y - 2)² dan x + y = 4',
    desc: 'Diputar mengelilingi sumbu-Y. Pakai dy. Batas dari y = 0 sampai y = 3.',
    formula: '\\[V=\\pi\\int_0^3[(4-y)^2-((y-2)^2)^2]dy=\\frac{72\\pi}{5}\\]',
    samples: ['y = 0', 'y = 1', 'y = 2', 'y = 3'],
    xMin: -0.4, xMax: 4.5, yMin: -0.4, yMax: 3.5,
    fillY: { c: 0, d: 3, right: y => 4-y, left: y => (y-2)*(y-2) },
    rotation: 'y',
    paramCurves: [
      { name: 'x = 4 - y', color: colors.blue, y0: 0, y1: 4, xfn: y => 4-y },
      { name: 'x = (y - 2)²', color: colors.teal, y0: -0.1, y1: 3.3, xfn: y => (y-2)*(y-2) }
    ],
    points: [{x:4,y:0,label:'(4,0)'},{x:1,y:3,label:'(1,3)'}]
  },
  {
    id: 'cincin-4',
    group: 'Cincin',
    title: 'Cincin: y = x² dan y = -x² + 4, terhadap sumbu-X',
    desc: 'Titik potong x² = -x² + 4, sehingga x = ±√2. Atas R = -x² + 4, bawah r = x².',
    formula: '\\[V=\\pi\\int_{-\\sqrt2}^{\\sqrt2}[(4-x^2)^2-(x^2)^2]dx=\\frac{64\\sqrt2\\pi}{3}\\]',
    samples: ['x = -√2', 'x = 0', 'x = √2'],
    xMin: -2.0, xMax: 2.0, yMin: -0.6, yMax: 4.7,
    fillX: { a: -Math.SQRT2, b: Math.SQRT2, top: x => 4-x*x, bottom: x => x*x },
    rotation: 'x',
    curves: [
      { name: 'y = -x² + 4', color: colors.blue, fn: x => 4-x*x },
      { name: 'y = x²', color: colors.teal, fn: x => x*x }
    ],
    points: [{x:-Math.SQRT2,y:2,label:'(-√2,2)'},{x:Math.SQRT2,y:2,label:'(√2,2)'}]
  }
];

function setupNav() {
  const toggle = $('.nav-toggle');
  const nav = $('.nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupAccordion() {
  $$('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(item.classList.contains('open')));
      if (window.MathJax) MathJax.typesetPromise?.();
    });
  });
}

function setupTabs() {
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      $$('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      $(`#tab-${tab.dataset.tab}`).classList.add('active');
      if (window.MathJax) MathJax.typesetPromise?.();
    });
  });
}

function setupVisualizer() {
  const select = $('#exampleSelect');
  if (!select) return;
  examples.forEach(ex => {
    const opt = document.createElement('option');
    opt.value = ex.id;
    opt.textContent = `${ex.group} — ${ex.title.replace(/\s+/g, ' ')}`;
    select.appendChild(opt);
  });
  select.value = 'luas-1';
  select.addEventListener('change', () => renderExample(select.value));
  window.addEventListener('resize', () => renderExample(select.value));
  renderExample(select.value);
}

function renderExample(id) {
  const ex = examples.find(item => item.id === id) || examples[0];
  const meta = $('#exampleMeta');
  meta.innerHTML = `
    <h3>${ex.title}</h3>
    <p>${ex.desc}</p>
    <p><strong>Angka untuk tabel/sketsa:</strong></p>
    <ul>${ex.samples.map(s => `<li>${s}</li>`).join('')}</ul>
    <div class="formula-card">${ex.formula}</div>
  `;
  renderLegend(ex);
  drawGraph(ex);
  if (window.MathJax) MathJax.typesetPromise?.([meta]);
}

function renderLegend(ex) {
  const legend = $('#legend');
  const items = [];
  (ex.curves || []).forEach(c => items.push(`<span><i style="background:${c.color}"></i>${c.name}</span>`));
  (ex.paramCurves || []).forEach(c => items.push(`<span><i style="background:${c.color}"></i>${c.name}</span>`));
  items.push(`<span><i style="background:${colors.fill}"></i>Daerah yang dihitung</span>`);
  if (ex.rotation) items.push(`<span><i style="background:${colors.orange}"></i>Diputar terhadap sumbu-${ex.rotation.toUpperCase()}</span>`);
  legend.innerHTML = items.join('');
}

function drawGraph(ex) {
  const canvas = $('#graphCanvas');
  const ctx = canvas.getContext('2d');
  const cssWidth = canvas.clientWidth || canvas.width;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssWidth * 0.62 * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const W = cssWidth;
  const H = cssWidth * 0.62;
  const pad = { left: 55, right: 26, top: 28, bottom: 48 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  const xMin = ex.xMin, xMax = ex.xMax, yMin = ex.yMin, yMax = ex.yMax;
  const X = x => pad.left + ((x - xMin) / (xMax - xMin)) * plotW;
  const Y = y => pad.top + (1 - (y - yMin) / (yMax - yMin)) * plotH;

  ctx.clearRect(0, 0, W, H);
  drawGrid(ctx, W, H, pad, xMin, xMax, yMin, yMax, X, Y);
  drawFill(ctx, ex, X, Y);
  drawCurves(ctx, ex, X, Y, xMin, xMax);
  drawPoints(ctx, ex.points || [], X, Y);
  drawRotationCue(ctx, ex, X, Y, xMin, xMax, yMin, yMax);
  drawTitle(ctx, ex);
}

function drawGrid(ctx, W, H, pad, xMin, xMax, yMin, yMax, X, Y) {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = colors.grid;
  ctx.fillStyle = colors.muted;
  ctx.font = '12px Inter, sans-serif';

  const xStep = niceStep((xMax - xMin) / 6);
  const yStep = niceStep((yMax - yMin) / 5);
  const startX = Math.ceil(xMin / xStep) * xStep;
  for (let x = startX; x <= xMax + 1e-9; x += xStep) {
    const sx = X(x);
    ctx.beginPath();
    ctx.moveTo(sx, pad.top);
    ctx.lineTo(sx, H - pad.bottom);
    ctx.stroke();
    ctx.fillText(cleanNum(x), sx - 8, H - pad.bottom + 22);
  }
  const startY = Math.ceil(yMin / yStep) * yStep;
  for (let y = startY; y <= yMax + 1e-9; y += yStep) {
    const sy = Y(y);
    ctx.beginPath();
    ctx.moveTo(pad.left, sy);
    ctx.lineTo(W - pad.right, sy);
    ctx.stroke();
    ctx.fillText(cleanNum(y), 12, sy + 4);
  }

  ctx.strokeStyle = 'rgba(24,48,70,0.65)';
  ctx.lineWidth = 1.4;
  if (xMin <= 0 && xMax >= 0) {
    ctx.beginPath();
    ctx.moveTo(X(0), pad.top);
    ctx.lineTo(X(0), H - pad.bottom);
    ctx.stroke();
    ctx.fillText('y', X(0) + 8, pad.top + 16);
  }
  if (yMin <= 0 && yMax >= 0) {
    ctx.beginPath();
    ctx.moveTo(pad.left, Y(0));
    ctx.lineTo(W - pad.right, Y(0));
    ctx.stroke();
    ctx.fillText('x', W - pad.right - 10, Y(0) - 8);
  }
  ctx.restore();
}

function drawFill(ctx, ex, X, Y) {
  ctx.save();
  if (ex.fillX) {
    const { a, b, top, bottom } = ex.fillX;
    const n = 180;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const x = a + (b - a) * i / n;
      const y = top(x);
      if (i === 0) ctx.moveTo(X(x), Y(y));
      else ctx.lineTo(X(x), Y(y));
    }
    for (let i = n; i >= 0; i--) {
      const x = a + (b - a) * i / n;
      const y = bottom(x);
      ctx.lineTo(X(x), Y(y));
    }
    ctx.closePath();
    ctx.fillStyle = colors.fill;
    ctx.fill();
  }
  if (ex.fillY) {
    const { c, d, right, left } = ex.fillY;
    const n = 180;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const y = c + (d - c) * i / n;
      const x = right(y);
      if (i === 0) ctx.moveTo(X(x), Y(y));
      else ctx.lineTo(X(x), Y(y));
    }
    for (let i = n; i >= 0; i--) {
      const y = c + (d - c) * i / n;
      const x = left(y);
      ctx.lineTo(X(x), Y(y));
    }
    ctx.closePath();
    ctx.fillStyle = colors.fill2;
    ctx.fill();
  }
  ctx.restore();
}

function drawCurves(ctx, ex, X, Y, xMin, xMax) {
  ctx.save();
  (ex.curves || []).forEach(curve => {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = curve.color;
    let started = false;
    const n = 420;
    for (let i = 0; i <= n; i++) {
      const x = xMin + (xMax - xMin) * i / n;
      const y = curve.fn(x);
      if (!Number.isFinite(y)) { started = false; continue; }
      if (!started) { ctx.moveTo(X(x), Y(y)); started = true; }
      else ctx.lineTo(X(x), Y(y));
    }
    ctx.stroke();
  });
  (ex.paramCurves || []).forEach(curve => {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = curve.color;
    let started = false;
    const n = 420;
    for (let i = 0; i <= n; i++) {
      const y = curve.y0 + (curve.y1 - curve.y0) * i / n;
      const x = curve.xfn(y);
      if (!Number.isFinite(x)) { started = false; continue; }
      if (!started) { ctx.moveTo(X(x), Y(y)); started = true; }
      else ctx.lineTo(X(x), Y(y));
    }
    ctx.stroke();
  });
  ctx.restore();
}

function drawPoints(ctx, points, X, Y) {
  ctx.save();
  ctx.font = '700 12px Inter, sans-serif';
  points.forEach(p => {
    const sx = X(p.x), sy = Y(p.y);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = colors.pink;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(sx, sy, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = colors.ink;
    ctx.fillText(p.label, sx + 8, sy - 8);
  });
  ctx.restore();
}

function drawRotationCue(ctx, ex, X, Y, xMin, xMax, yMin, yMax) {
  if (!ex.rotation) return;
  ctx.save();
  ctx.strokeStyle = colors.orange;
  ctx.fillStyle = colors.orange;
  ctx.lineWidth = 2.2;
  ctx.setLineDash([8, 8]);
  if (ex.rotation === 'x' && yMin <= 0 && yMax >= 0) {
    const y0 = Y(0);
    ctx.beginPath();
    ctx.moveTo(X(Math.max(xMin, (ex.fillX?.a ?? xMin))), y0);
    ctx.lineTo(X(Math.min(xMax, (ex.fillX?.b ?? xMax))), y0);
    ctx.stroke();
    ctx.setLineDash([]);
    drawArcArrow(ctx, X((xMin + xMax) / 2), y0 - 25, 34, 0.1, Math.PI * 1.45);
    ctx.font = '700 13px Inter, sans-serif';
    ctx.fillText('putar ke sumbu-X', X((xMin + xMax) / 2) + 42, y0 - 20);
  }
  if (ex.rotation === 'y' && xMin <= 0 && xMax >= 0) {
    const x0 = X(0);
    ctx.beginPath();
    ctx.moveTo(x0, Y(Math.min(yMax, 0)));
    ctx.lineTo(x0, Y(Math.max(yMin, yMax)));
    ctx.stroke();
    ctx.setLineDash([]);
    drawArcArrow(ctx, x0 + 34, Y((yMin + yMax) / 2), 34, -Math.PI / 2, Math.PI * .75);
    ctx.font = '700 13px Inter, sans-serif';
    ctx.fillText('putar ke sumbu-Y', x0 + 52, Y((yMin + yMax) / 2));
  }
  ctx.restore();
}

function drawArcArrow(ctx, cx, cy, r, start, end) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, start, end);
  ctx.stroke();
  const angle = end;
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 8 * Math.cos(angle - .7), y - 8 * Math.sin(angle - .7));
  ctx.lineTo(x - 8 * Math.cos(angle + .7), y - 8 * Math.sin(angle + .7));
  ctx.closePath();
  ctx.fill();
}

function drawTitle(ctx, ex) {
  ctx.save();
  ctx.fillStyle = colors.ink;
  ctx.font = '800 16px Inter, sans-serif';
  ctx.fillText(ex.group, 18, 24);
  ctx.restore();
}

function niceStep(raw) {
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const f = raw / pow;
  if (f <= 1) return pow;
  if (f <= 2) return 2 * pow;
  if (f <= 5) return 5 * pow;
  return 10 * pow;
}

function cleanNum(n) {
  if (Math.abs(n) < 1e-9) return '0';
  const rounded = Math.round(n * 100) / 100;
  return String(rounded).replace('.00', '');
}

setupNav();
setupAccordion();
setupTabs();
setupVisualizer();

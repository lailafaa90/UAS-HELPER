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


const byId = id => examples.find(ex => ex.id === id);

examples.push(
  {
    id: 'luas-4',
    group: 'Luas',
    title: 'Luas: y = √x dan y = -x + 6',
    desc: 'Dua kurva berpotongan di x = 4. Di website ini diasumsikan ada batas tambahan x = 0 agar daerah tertutup. Pada 0 ≤ x ≤ 4, garis berada di atas akar.',
    formula: '\[L=\int_{0}^{4}[(-x+6)-\sqrt{x}]dx=\frac{32}{3}\]',
    samples: ['x = 0', 'x = 1', 'x = 4'],
    xMin: -0.5, xMax: 6.5, yMin: -0.6, yMax: 6.8,
    fillX: { a: 0, b: 4, top: x => -x + 6, bottom: x => Math.sqrt(Math.max(0, x)) },
    curves: [
      { name: 'y = -x + 6', color: colors.blue, fn: x => -x + 6 },
      { name: 'y = √x', color: colors.teal, fn: x => Math.sqrt(Math.max(0, x)) }
    ],
    points: [{x:0,y:0,label:'(0,0)'},{x:0,y:6,label:'(0,6)'},{x:4,y:2,label:'(4,2)'}],
    assumption: 'Catatan: soal ini baru membentuk daerah tertutup jika diberi batas tambahan, misalnya sumbu-Y (x = 0). Website ini memakai asumsi itu.',
  },
  {
    id: 'luas-5',
    group: 'Luas',
    title: 'Luas: y = x + 6, y = x², dan x = 1',
    desc: 'Garis dan parabola berpotongan di x = -2 dan x = 3. Garis x = 1 dipakai dosen sebagai garis bantu yang membelah daerah menjadi bagian kiri dan kanan.',
    formula: '\[L_{total}=\int_{-2}^{3}[(x+6)-x^2]dx=\frac{125}{6}\]',
    samples: ['x = -2', 'x = 1', 'x = 3'],
    xMin: -2.8, xMax: 3.6, yMin: -4.5, yMax: 10,
    fillX: { a: -2, b: 3, top: x => x + 6, bottom: x => x*x },
    curves: [
      { name: 'y = x + 6', color: colors.blue, fn: x => x + 6 },
      { name: 'y = x²', color: colors.teal, fn: x => x*x }
    ],
    extraLines: [{ type: 'vertical', x: 1, label: 'x = 1', color: colors.orange }],
    points: [{x:-2,y:4,label:'(-2,4)'},{x:1,y:7,label:'x=1'},{x:3,y:9,label:'(3,9)'}]
  },
  {
    id: 'luas-6',
    group: 'Luas',
    title: 'Luas: y² = 4 - x dan y² = 4 - 4x',
    desc: 'Karena bentuknya y², lebih enak diubah ke bentuk x dan dihitung terhadap y. Batas y = -2 sampai y = 2.',
    formula: '\[L=\int_{-2}^{2}\left[(4-y^2)-\left(1-\frac{y^2}{4}\right)\right]dy=8\]',
    samples: ['y = -2', 'y = 0', 'y = 2'],
    xMin: -0.2, xMax: 4.5, yMin: -2.8, yMax: 2.8,
    fillY: { c: -2, d: 2, right: y => 4 - y*y, left: y => 1 - (y*y)/4 },
    paramCurves: [
      { name: 'x = 4 - y²', color: colors.blue, y0: -2.2, y1: 2.2, xfn: y => 4 - y*y },
      { name: 'x = 1 - y²/4', color: colors.teal, y0: -2.2, y1: 2.2, xfn: y => 1 - (y*y)/4 }
    ],
    points: [{x:0,y:-2,label:'(0,-2)'},{x:4,y:0,label:'(4,0)'},{x:0,y:2,label:'(0,2)'}]
  },
  {
    id: 'luas-7',
    group: 'Luas',
    title: 'Luas: y = (x - 3)(x - 1) dan y = x',
    desc: 'Titik potong diperoleh dari x² - 4x + 3 = x, yaitu x = (5 ± √13)/2. Di antara dua batas itu, garis y = x berada di atas parabola.',
    formula: '\[L=\int_{\frac{5-\sqrt{13}}{2}}^{\frac{5+\sqrt{13}}{2}}[x-(x^2-4x+3)]dx=\frac{13\sqrt{13}}{6}\]',
    samples: ['x ≈ 0.70', 'x = 2', 'x ≈ 4.30'],
    xMin: 0, xMax: 5, yMin: -1.8, yMax: 5,
    fillX: { a: (5-Math.sqrt(13))/2, b: (5+Math.sqrt(13))/2, top: x => x, bottom: x => x*x - 4*x + 3 },
    curves: [
      { name: 'y = x', color: colors.blue, fn: x => x },
      { name: 'y = x² - 4x + 3', color: colors.teal, fn: x => x*x - 4*x + 3 }
    ],
    points: [{x:(5-Math.sqrt(13))/2,y:(5-Math.sqrt(13))/2,label:'A'},{x:(5+Math.sqrt(13))/2,y:(5+Math.sqrt(13))/2,label:'B'}]
  },
  {
    id: 'luas-8',
    group: 'Luas',
    title: 'Luas: y = x² - 9 dan y = (2x - 1)(x + 3)',
    desc: 'Fungsi kedua menjadi y = 2x² + 5x - 3. Titik potong berada di x = -3 dan x = -2.',
    formula: '\[L=\int_{-3}^{-2}[(x^2-9)-(2x^2+5x-3)]dx=\frac{1}{6}\]',
    samples: ['x = -3', 'x = -2.5', 'x = -2'],
    xMin: -3.4, xMax: -1.6, yMin: -3.4, yMax: 1.4,
    fillX: { a: -3, b: -2, top: x => x*x - 9, bottom: x => 2*x*x + 5*x - 3 },
    curves: [
      { name: 'y = x² - 9', color: colors.blue, fn: x => x*x - 9 },
      { name: 'y = 2x² + 5x - 3', color: colors.teal, fn: x => 2*x*x + 5*x - 3 }
    ],
    points: [{x:-3,y:0,label:'(-3,0)'},{x:-2,y:-5,label:'(-2,-5)'}]
  },
  {
    id: 'cincin-5',
    group: 'Cincin',
    title: 'Cincin: y = x² dan y = x⁵',
    desc: 'Di website ini diasumsikan diputar terhadap sumbu-X. Titik potong di x = 0 dan x = 1. Pada interval itu, x² berada di atas x⁵.',
    formula: '\[V=\pi\int_0^1[(x^2)^2-(x^5)^2]dx=\frac{6\pi}{55}\]',
    samples: ['x = 0', 'x = 0.5', 'x = 1'],
    xMin: -0.1, xMax: 1.2, yMin: -0.1, yMax: 1.2,
    fillX: { a: 0, b: 1, top: x => x*x, bottom: x => Math.pow(x,5) },
    rotation: 'x',
    curves: [
      { name: 'y = x²', color: colors.blue, fn: x => x*x },
      { name: 'y = x⁵', color: colors.teal, fn: x => Math.pow(x,5) }
    ],
    points: [{x:0,y:0,label:'(0,0)'},{x:1,y:1,label:'(1,1)'}],
    assumption: 'Catatan: soal asli belum menulis sumbu putar. Website ini memakai asumsi diputar terhadap sumbu-X.'
  },
  {
    id: 'kulit-c',
    group: 'Kulit tabung',
    title: 'Kulit tabung: y = 4 - x², x = 0, y = 4',
    desc: 'Soal aslinya kurang jelas karena y = 4, x = 0, dan y = 4 - x² bertemu di titik yang sama. Website ini mengikuti pembahasan dengan asumsi yang dimaksud adalah y = 0.',
    formula: '\[V=2\pi\int_0^2x(4-x^2)dx=8\pi\]',
    samples: ['x = 0', 'x = 1', 'x = 2'],
    xMin: -0.3, xMax: 2.5, yMin: -0.5, yMax: 4.7,
    fillX: { a: 0, b: 2, top: x => 4 - x*x, bottom: x => 0 },
    rotation: 'y',
    curves: [
      { name: 'y = 4 - x²', color: colors.blue, fn: x => 4 - x*x }
    ],
    points: [{x:0,y:4,label:'(0,4)'},{x:2,y:0,label:'(2,0)'}],
    assumption: 'Catatan: grafik di bawah memakai asumsi bahwa batas ketiganya adalah y = 0, sesuai pembahasan yang sudah dijelaskan.'
  }
);

// Penjelasan detail cara memilih angka tabel / sketsa
Object.assign(byId('luas-1'), {
  sampleGuide: [
    'Cari batas dulu dari titik potong. Karena x + 2 = x² menghasilkan x = -1 dan x = 2, dua angka itu wajib masuk tabel.',
    'Setelah itu pilih angka bulat yang berada di tengah interval, yaitu x = 0 dan x = 1.',
    'x = 0 dipakai untuk mengecek siapa yang di atas: garis bernilai 2, parabola bernilai 0.',
    'Jadi dosen biasanya menulis tabel dengan x = -1, 0, 1, 2.'
  ],
  tableHeaders: ['x', 'y = x + 2', 'y = x²'],
  tableRows: [['-1','1','1'], ['0','2','0'], ['1','3','1'], ['2','4','4']],
  graphCaption: 'Grafik diarsir pada interval x = -1 sampai x = 2. Warna biru adalah garis, warna hijau adalah parabola. Daerah yang diarsir itulah luas yang dihitung.'
});
Object.assign(byId('luas-2'), {
  sampleGuide: [
    'Batas didapat dari titik potong x² - 2 = 2x² + x - 4, yaitu x = -2 dan x = 1.',
    'Ambil angka tengah yang sederhana di antara -2 dan 1, misalnya x = -1 dan x = 0.',
    'x = 0 membantu memutuskan kurva atas: x² - 2 = -2, sedangkan 2x² + x - 4 = -4, jadi fungsi pertama ada di atas.',
    'Jadi tabel yang nyaman dipakai adalah x = -2, -1, 0, 1.'
  ],
  tableHeaders: ['x', 'y = x² - 2', 'y = 2x² + x - 4'],
  tableRows: [['-2','2','2'], ['-1','-1','-1'], ['0','-2','-4'], ['1','-1','-1']],
  graphCaption: 'Kedua kurva berpotongan di x = -2 dan x = 1. Di antara batas itu, y = x² - 2 berada di atas.'
});
Object.assign(byId('luas-3'), {
  sampleGuide: [
    'Titik potong x = x² memberi batas x = 0 dan x = 1.',
    'Karena intervalnya pendek, cukup ambil satu angka uji di tengah, misalnya x = 0.5.',
    'Pada x = 0.5, garis bernilai 0.5 dan parabola bernilai 0.25, jadi garis ada di atas.',
    'Tabel yang dipakai dosen biasanya x = 0, 0.5, 1.'
  ],
  tableHeaders: ['x', 'y = x', 'y = x²'],
  tableRows: [['0','0','0'], ['0.5','0.5','0.25'], ['1','1','1']],
  graphCaption: 'Luas hanya dihitung di antara x = 0 dan x = 1. Garis y = x berada di atas parabola y = x².'
});
Object.assign(byId('luas-4'), {
  sampleGuide: [
    'Karena ada akar, domainnya x ≥ 0. Supaya daerah tertutup, di sini dipakai batas tambahan x = 0.',
    'Titik potong garis dan kurva akar terjadi saat x = 4, jadi tabel wajib memuat x = 0 dan x = 4.',
    'Pilih angka mudah di tengah, misalnya x = 1. Kalau mau lebih detail bisa tambah x = 2 atau x = 3.',
    'Jadi tabel minimumnya bisa x = 0, 1, 4.'
  ],
  tableHeaders: ['x', 'y = √x', 'y = -x + 6'],
  tableRows: [['0','0','6'], ['1','1','5'], ['4','2','2']],
  graphCaption: 'Grafik memakai asumsi tambahan x = 0. Garis y = -x + 6 ada di atas kurva y = √x pada 0 ≤ x ≤ 4.'
});
Object.assign(byId('luas-5'), {
  sampleGuide: [
    'Titik potong garis dan parabola ada di x = -2 dan x = 3.',
    'Karena dosen memberi garis x = 1, angka 1 juga wajib ditulis karena itu batas tambahan yang membelah daerah.',
    'Untuk sketsa cepat, cukup catat x = -2, x = 1, dan x = 3. Kalau ingin lebih halus boleh tambah x = 0 dan x = 2.',
    'Angka x = 0 berguna untuk cek bahwa garis y = x + 6 berada di atas parabola y = x².'
  ],
  tableHeaders: ['x', 'y = x + 6', 'y = x²'],
  tableRows: [['-2','4','4'], ['1','7','1'], ['3','9','9']],
  graphCaption: 'Garis putus-putus x = 1 adalah batas tambahan dari soal. Ia membelah daerah antara garis dan parabola menjadi dua bagian.'
});
Object.assign(byId('luas-6'), {
  sampleGuide: [
    'Karena persamaan berbentuk y², lebih mudah membuat tabel terhadap y, bukan x.',
    'Batas diperoleh dari titik potong kedua kurva, yaitu y = -2 dan y = 2.',
    'Pilih y = 0 sebagai angka tengah karena paling mudah dihitung.',
    'Jadi tabel sketsanya memakai y = -2, 0, 2.'
  ],
  tableHeaders: ['y', 'x = 4 - y²', 'x = 1 - y²/4'],
  tableRows: [['-2','0','0'], ['0','4','1'], ['2','0','0']],
  graphCaption: 'Untuk soal ini, lebih enak dibaca sebagai kurva samping. Daerah diarsir berada di antara x = 1 - y²/4 dan x = 4 - y².'
});
Object.assign(byId('luas-7'), {
  sampleGuide: [
    'Batas kiri dan kanan berasal dari titik potong, yaitu x = (5 - √13)/2 dan x = (5 + √13)/2.',
    'Karena bentuknya rumit, dosen sering mengambil satu angka yang mudah di tengah, misalnya x = 2.',
    'Pada x = 2, garis bernilai 2 sedangkan parabola bernilai -1, jadi garis ada di atas.',
    'Untuk tabel kasar, cukup tulis x ≈ 0.70, 2, 4.30.'
  ],
  tableHeaders: ['x', 'y = x', 'y = x² - 4x + 3'],
  tableRows: [['≈ 0.70','≈ 0.70','≈ 0.70'], ['2','2','-1'], ['≈ 4.30','≈ 4.30','≈ 4.30']],
  graphCaption: 'Daerah arsiran terletak di antara garis dan parabola. Garis y = x berada di atas pada seluruh interval yang dibatasi titik potong.'
});
Object.assign(byId('luas-8'), {
  sampleGuide: [
    'Dari titik potong diperoleh batas x = -3 dan x = -2.',
    'Karena intervalnya sempit, satu angka tengah saja cukup, misalnya x = -2.5.',
    'Nilai x = -2.5 dipakai untuk mengecek kurva atas. Hasilnya y = x² - 9 lebih besar.',
    'Jadi tabel minimumnya x = -3, -2.5, -2.'
  ],
  tableHeaders: ['x', 'y = x² - 9', 'y = 2x² + 5x - 3'],
  tableRows: [['-3','0','0'], ['-2.5','-2.75','-3'], ['-2','-5','-5']],
  graphCaption: 'Di interval sempit ini, cukup tiga titik untuk melihat mana kurva atas dan bawah. Daerah yang diarsir hanya dari x = -3 sampai x = -2.'
});
Object.assign(byId('cakram-a'), {
  sampleGuide: [
    'Soal sudah memberi batas x = 0 dan x = 1, jadi dua angka itu langsung masuk tabel.',
    'Kalau dosen ingin tabel lebih rinci, boleh tambah satu angka tengah, misalnya x = 0.5.',
    'Karena grafiknya garis lurus, dua titik saja sebenarnya sudah cukup untuk sketsa.',
    'Jadi tabel cepatnya x = 0, 0.5, 1.'
  ],
  tableHeaders: ['x', 'y = -x + 1'],
  tableRows: [['0','1'], ['0.5','0.5'], ['1','0']],
  graphCaption: 'Garis turun dari (0,1) ke (1,0). Daerah di bawah garis diputar terhadap sumbu-X sehingga membentuk cakram.'
});
Object.assign(byId('cakram-b'), {
  sampleGuide: [
    'Batas x sudah diberikan, yaitu 0 sampai 2.',
    'Tambahkan angka bulat di tengah, misalnya x = 1, agar bentuk parabola lebih kelihatan.',
    'Karena parabola mudah dihitung di titik bulat, tabel dosen biasanya x = 0, 1, 2.',
    'Nilai-nilainya adalah 4, 3, dan 0.'
  ],
  tableHeaders: ['x', 'y = 4 - x²'],
  tableRows: [['0','4'], ['1','3'], ['2','0']],
  graphCaption: 'Parabola memotong sumbu-X di x = 2. Daerah di antara kurva dan sumbu-X diputar terhadap sumbu-X.'
});
Object.assign(byId('cakram-c'), {
  sampleGuide: [
    'Karena ada sumbu-X, cari dulu saat y = 0. Hasilnya x = -1 dan x = 1.',
    'Setelah batas kiri dan kanan didapat, ambil x = 0 sebagai titik tengah.',
    'x = 0 juga memperlihatkan puncak parabola, jadi sangat membantu untuk sketsa.',
    'Tabel dasarnya menjadi x = -1, 0, 1.'
  ],
  tableHeaders: ['x', 'y = 1 - x²'],
  tableRows: [['-1','0'], ['0','1'], ['1','0']],
  graphCaption: 'Parabola membuka ke bawah dan memotong sumbu-X di -1 dan 1. Daerah inilah yang diputar untuk metode cakram.'
});
Object.assign(byId('cakram-d'), {
  sampleGuide: [
    'Soal memberi batas x = 1 dan x = 2, jadi keduanya wajib masuk tabel.',
    'Untuk kurva akar, boleh tambah satu angka di tengah, misalnya x = 1.5, walau hasil akarnya tidak bulat.',
    'Kalau hanya butuh sketsa kasar, x = 1 dan x = 2 saja juga cukup.',
    'Dosen sering memilih angka yang memang sesuai batas soal.'
  ],
  tableHeaders: ['x', 'y = √x'],
  tableRows: [['1','1'], ['1.5','≈ 1.225'], ['2','≈ 1.414']],
  graphCaption: 'Saat volume dihitung, (√x)² menjadi x. Itulah sebabnya integral volume menjadi sangat sederhana.'
});
Object.assign(byId('cakram-e'), {
  sampleGuide: [
    'Karena ada akar, cari domain: 9 - x² ≥ 0, jadi x dari -3 sampai 3.',
    'Masukkan batas kiri dan kanan dulu: -3 dan 3.',
    'Tambahkan titik simetris di tengah seperti -2, -1, 0, 1, 2 agar bentuk setengah lingkaran terlihat.',
    'x = 0 memberi titik tertinggi, yaitu y = 3.'
  ],
  tableHeaders: ['x', 'y = √(9 - x²)'],
  tableRows: [['-3','0'], ['-2','√5'], ['-1','√8'], ['0','3'], ['1','√8'], ['2','√5'], ['3','0']],
  graphCaption: 'Grafik ini adalah setengah lingkaran bagian atas dengan jari-jari 3. Ketika diputar terhadap sumbu-X, terbentuk bola penuh.'
});
Object.assign(byId('kulit-a'), {
  sampleGuide: [
    'Karena soal memberi x = 3 dan batas bawahnya sumbu-Y, intervalnya 0 sampai 3.',
    'Pilih angka bulat berturut-turut supaya tinggi kulit tabung mudah dihitung: 0, 1, 2, 3.',
    'Setiap nilai x memberi satu kulit tabung dengan jari-jari x dan tinggi x².',
    'Maka tabel dosen biasanya x = 0, 1, 2, 3.'
  ],
  tableHeaders: ['x', 'r = x', 'h = x²'],
  tableRows: [['0','0','0'], ['1','1','1'], ['2','2','4'], ['3','3','9']],
  graphCaption: 'Setiap irisan vertikal kecil akan berputar terhadap sumbu-Y dan menjadi kulit tabung.'
});
Object.assign(byId('kulit-b'), {
  sampleGuide: [
    'Batas x jelas: 0 sampai 6.',
    'Pilih angka yang kuadratnya mudah: 0, 2, 4, 6.',
    'Tinggi setiap kulit tabung adalah 1/4 x², sehingga hasilnya 0, 1, 4, 9.',
    'Itulah mengapa dosen sering memilih x = 0, 2, 4, 6 untuk sketsa.'
  ],
  tableHeaders: ['x', 'r = x', 'h = 1/4 x²'],
  tableRows: [['0','0','0'], ['2','2','1'], ['4','4','4'], ['6','6','9']],
  graphCaption: 'Sketsa menunjukkan daerah di bawah y = 1/4 x². Irisan vertikal menjadi kulit tabung saat diputar terhadap sumbu-Y.'
});
Object.assign(byId('kulit-c'), {
  sampleGuide: [
    'Website ini memakai asumsi bahwa batas ketiganya adalah y = 0, sehingga interval x menjadi 0 sampai 2.',
    'Setelah batasnya jelas, pilih angka bulat 0, 1, dan 2.',
    'Setiap nilai x memberi jari-jari r = x dan tinggi h = 4 - x².',
    'Jadi tabel minimumnya adalah x = 0, 1, 2.'
  ],
  tableHeaders: ['x', 'r = x', 'h = 4 - x²'],
  tableRows: [['0','0','4'], ['1','1','3'], ['2','2','0']],
  graphCaption: 'Grafik ini mengikuti asumsi pembahasan bahwa daerahnya berada di kuadran I dan dibatasi sumbu-X.'
});
Object.assign(byId('cincin-1'), {
  sampleGuide: [
    'Batas didapat dari x² = 2x, yaitu x = 0 dan x = 2.',
    'Pilih angka tengah yang mudah, misalnya x = 1.',
    'Pada x = 1, 2x = 2 lebih besar dari x² = 1, jadi y = 2x menjadi jari-jari luar.',
    'Tabel cepatnya x = 0, 1, 2.'
  ],
  tableHeaders: ['x', 'R = 2x', 'r = x²'],
  tableRows: [['0','0','0'], ['1','2','1'], ['2','4','4']],
  graphCaption: 'Daerah yang diarsir berada di antara y = 2x dan y = x². Saat diputar terhadap sumbu-X, irisan tegak membentuk cincin.'
});
Object.assign(byId('cincin-2'), {
  sampleGuide: [
    'Untuk sumbu-Y lebih nyaman pakai y, jadi batas y dicari dari titik potong: y = 0 sampai y = 4.',
    'Pilih satu angka tengah, misalnya y = 2.',
    'Pada y tertentu, jari-jari luar adalah x = √y dan jari-jari dalam adalah x = y/2.',
    'Jadi tabel yang cocok: y = 0, 2, 4.'
  ],
  tableHeaders: ['y', 'R = √y', 'r = y/2'],
  tableRows: [['0','0','0'], ['2','√2','1'], ['4','2','2']],
  graphCaption: 'Grafik tetap ditampilkan dalam koordinat x-y, tetapi perhitungan volume dilakukan terhadap y agar bentuk cincin lebih mudah.'
});
Object.assign(byId('cincin-3'), {
  sampleGuide: [
    'Karena fungsi ditulis sebagai x terhadap y, lebih mudah membuat tabel y.',
    'Batas y didapat dari titik potong: y = 0 dan y = 3.',
    'Pilih angka tengah yang sederhana: y = 1 dan y = 2.',
    'Pada setiap y, jari-jari luar adalah 4 - y dan jari-jari dalam adalah (y - 2)².'
  ],
  tableHeaders: ['y', 'R = 4 - y', 'r = (y - 2)²'],
  tableRows: [['0','4','4'], ['1','3','1'], ['2','2','0'], ['3','1','1']],
  graphCaption: 'Karena diputar mengelilingi sumbu-Y, cincin dibaca dari jarak ke sumbu-Y. Itulah sebabnya tabelnya memakai y.'
});
Object.assign(byId('cincin-4'), {
  sampleGuide: [
    'Batas didapat dari x² = -x² + 4, yaitu x = -√2 dan x = √2.',
    'Ambil satu titik tengah, x = 0, karena paling mudah dan menunjukkan kurva atas-bawah dengan jelas.',
    'Pada x = 0, kurva atas bernilai 4 sedangkan bawah bernilai 0.',
    'Tabel minimumnya: x = -√2, 0, √2.'
  ],
  tableHeaders: ['x', 'R = 4 - x²', 'r = x²'],
  tableRows: [['-√2','2','2'], ['0','4','0'], ['√2','2','2']],
  graphCaption: 'Dua parabola saling berhadapan dan menutup daerah simetris. Saat diputar terhadap sumbu-X, terbentuk benda putar berlubang.'
});
Object.assign(byId('cincin-5'), {
  sampleGuide: [
    'Titik potong didapat dari x² = x⁵, yaitu x = 0 dan x = 1.',
    'Ambil angka tengah x = 0.5 agar kelihatan mana fungsi atas.',
    'Pada x = 0.5, x² = 0.25 dan x⁵ = 0.03125, jadi x² berada di atas.',
    'Tabel yang dipakai: x = 0, 0.5, 1.'
  ],
  tableHeaders: ['x', 'R = x²', 'r = x⁵'],
  tableRows: [['0','0','0'], ['0.5','0.25','0.03125'], ['1','1','1']],
  graphCaption: 'Contoh ini memakai asumsi sumbu-X. Daerah antara x² dan x⁵ pada 0 ≤ x ≤ 1 diputar sehingga membentuk cincin.'
});



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
  meta.innerHTML = buildExampleMetaHTML(ex, true);
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
  drawGraphToCanvas(canvas, ex);
}

function drawGraphToCanvas(canvas, ex) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cssWidth = canvas.clientWidth || canvas.width || 900;
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
  drawExtraLines(ctx, ex, X, Y, xMin, xMax, yMin, yMax);
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


function drawExtraLines(ctx, ex, X, Y, xMin, xMax, yMin, yMax) {
  if (!ex.extraLines) return;
  ctx.save();
  ctx.lineWidth = 2;
  ctx.font = '700 12px Inter, sans-serif';
  ex.extraLines.forEach(line => {
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = line.color || colors.orange;
    ctx.fillStyle = line.color || colors.orange;
    if (line.type === 'vertical') {
      const sx = X(line.x);
      ctx.beginPath();
      ctx.moveTo(sx, Y(yMin));
      ctx.lineTo(sx, Y(yMax));
      ctx.stroke();
      if (line.label) ctx.fillText(line.label, sx + 8, Y(yMax) + 18);
    }
    if (line.type === 'horizontal') {
      const sy = Y(line.y);
      ctx.beginPath();
      ctx.moveTo(X(xMin), sy);
      ctx.lineTo(X(xMax), sy);
      ctx.stroke();
      if (line.label) ctx.fillText(line.label, X(xMin) + 6, sy - 8);
    }
    ctx.setLineDash([]);
  });
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


function buildTableHTML(ex) {
  if (!ex.tableHeaders || !ex.tableRows) return '';
  const thead = `<thead><tr>${ex.tableHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead>`;
  const tbody = `<tbody>${ex.tableRows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>`;
  return `<div class="table-wrap"><table>${thead}${tbody}</table></div>`;
}

function buildExampleMetaHTML(ex, includeCaption = false) {
  const guideHTML = ex.sampleGuide ? `<div class="mini-note"><strong>Cara memilih angka untuk tabel/sketsa:</strong><ol class="clean-list">${ex.sampleGuide.map(item => `<li>${item}</li>`).join('')}</ol></div>` : '';
  const sampleChips = ex.samples ? `<div class="sample-chips">${ex.samples.map(s => `<span class="sample-chip">${s}</span>`).join('')}</div>` : '';
  const tableHTML = buildTableHTML(ex);
  const caption = includeCaption && ex.graphCaption ? `<p class="graph-caption">${ex.graphCaption}</p>` : '';
  const assumption = ex.assumption ? `<div class="assumption-note">${ex.assumption}</div>` : '';
  return `
    <h3>${ex.title}</h3>
    <p>${ex.desc}</p>
    ${guideHTML}
    <p><strong>Angka yang dipakai dosen untuk tabel/sketsa:</strong></p>
    ${sampleChips}
    ${tableHTML}
    <div class="formula-card">${ex.formula}</div>
    ${assumption}
    ${caption}
  `;
}

function setupExerciseGraphs() {
  $$('.exercise-card[data-example]').forEach(card => {
    card.addEventListener('toggle', () => {
      if (card.open) renderExerciseExtra(card);
    });
    if (card.open) renderExerciseExtra(card);
  });
}

function renderExerciseExtra(card) {
  const ex = byId(card.dataset.example);
  if (!ex) return;
  const solution = $('.solution', card);
  if (!solution) return;
  let extra = $('.exercise-extra', solution);
  if (!extra) {
    extra = document.createElement('div');
    extra.className = 'exercise-extra';
    extra.innerHTML = `
      <h4>Angka untuk tabel/sketsa dan grafiknya</h4>
      <div class="exercise-extra-meta"></div>
      <div class="exercise-graph-block">
        <h4>Sketsa grafik / daerah</h4>
        <canvas class="exercise-canvas" width="760" height="470" aria-label="Sketsa grafik"></canvas>
        <div class="graph-caption"></div>
      </div>
    `;
    solution.appendChild(extra);
  }
  const meta = $('.exercise-extra-meta', extra);
  meta.innerHTML = buildExampleMetaHTML(ex, false);
  const caption = $('.graph-caption', extra);
  caption.textContent = ex.graphCaption || '';
  const canvas = $('.exercise-canvas', extra);
  drawGraphToCanvas(canvas, ex);
  if (window.MathJax) MathJax.typesetPromise?.([meta]);
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
setupExerciseGraphs();

import type { Product } from '../types/product';

// Catálogo de demostración: nombres, marcas y especificaciones son genéricos.
// No representan modelos oficiales ni tecnologías patentadas de fabricantes.

export const products: Product[] = [
  // Cubos 2x2 (6)
  {
    id: 'p-2x2-01', name: 'Cubo 2x2 Demo Aurora (producto de demostración)', slug: 'cubo-2x2-demo-aurora',
    description: 'Producto de demostración. Cubo 2x2 compacto con presentación a color y giro pensado para práctica casual.',
    price: 29900, compareAtPrice: 34900, category: 'Cubos 2x2', brand: 'CUBIQ Demo',
    images: ['/images/products/2x2/cubo-2x2-demo-aurora.svg'], stock: 18, featured: true, isNew: true, isActive: true,
    tags: ['2x2', 'demo'], characteristics: ['Formato 2x2', 'Producto de demostración', 'Uso recreativo']
  },
  {
    id: 'p-2x2-02', name: 'Cubo 2x2 Demo Neon (producto de demostración)', slug: 'cubo-2x2-demo-neon',
    description: 'Producto de demostración. Diseño 2x2 con acabado visual brillante para colección o iniciación.',
    price: 27900, category: 'Cubos 2x2', brand: 'CUBIQ Demo',
    images: ['/images/products/2x2/cubo-2x2-demo-neon.svg'], stock: 22, featured: false, isNew: false, isActive: true,
    tags: ['2x2', 'demo'], characteristics: ['Formato 2x2', 'Producto de demostración']
  },
  {
    id: 'p-2x2-03', name: 'Cubo 2x2 Demo Carbon (producto de demostración)', slug: 'cubo-2x2-demo-carbon',
    description: 'Producto de demostración. Cubo 2x2 de estilo sobrio, pensado como pieza de práctica.',
    price: 31900, category: 'Cubos 2x2', brand: 'CUBIQ Studio',
    images: ['/images/products/2x2/cubo-2x2-demo-carbon.svg'], stock: 14, featured: false, isNew: false, isActive: true,
    tags: ['2x2', 'demo'], characteristics: ['Formato 2x2', 'Producto de demostración']
  },
  {
    id: 'p-2x2-04', name: 'Cubo 2x2 Demo Pastel (producto de demostración)', slug: 'cubo-2x2-demo-pastel',
    description: 'Producto de demostración. Versión 2x2 con paleta suave para una presentación moderna.',
    price: 28900, category: 'Cubos 2x2', brand: 'CUBIQ Studio',
    images: ['/images/products/2x2/cubo-2x2-demo-pastel.svg'], stock: 16, featured: false, isNew: true, isActive: true,
    tags: ['2x2', 'demo'], characteristics: ['Formato 2x2', 'Producto de demostración']
  },
  {
    id: 'p-2x2-05', name: 'Cubo 2x2 Demo Stickerless (producto de demostración)', slug: 'cubo-2x2-demo-stickerless',
    description: 'Producto de demostración. Cubo 2x2 con apariencia de colores integrados para exhibición.',
    price: 30900, category: 'Cubos 2x2', brand: 'CUBIQ Demo',
    images: ['/images/products/2x2/cubo-2x2-demo-stickerless.svg'], stock: 20, featured: false, isNew: false, isActive: true,
    tags: ['2x2', 'demo'], characteristics: ['Formato 2x2', 'Producto de demostración']
  },
  {
    id: 'p-2x2-06', name: 'Cubo 2x2 Demo Sprint (producto de demostración)', slug: 'cubo-2x2-demo-sprint',
    description: 'Producto de demostración. Modelo 2x2 ligero para rutinas cortas de práctica.',
    price: 26900, category: 'Cubos 2x2', brand: 'CUBIQ Demo',
    images: ['/images/products/2x2/cubo-2x2-demo-sprint.svg'], stock: 25, featured: false, isNew: false, isActive: true,
    tags: ['2x2', 'demo'], characteristics: ['Formato 2x2', 'Producto de demostración']
  },

  // Cubos 3x3 (6)
  {
    id: 'p-3x3-01', name: 'Cubo 3x3 Demo Classic (producto de demostración)', slug: 'cubo-3x3-demo-classic',
    description: 'Producto de demostración. Cubo 3x3 clásico para aprendizaje y práctica general.',
    price: 39900, compareAtPrice: 45900, category: 'Cubos 3x3', brand: 'CUBIQ Demo',
    images: ['/images/products/3x3/cubo-3x3-demo-classic.svg'], stock: 24, featured: true, isNew: false, isActive: true,
    tags: ['3x3', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-3x3-02', name: 'Cubo 3x3 Demo Violet (producto de demostración)', slug: 'cubo-3x3-demo-violet',
    description: 'Producto de demostración. Cubo 3x3 con estilo visual moderno y colores definidos.',
    price: 44900, category: 'Cubos 3x3', brand: 'CUBIQ Studio',
    images: ['/images/products/3x3/cubo-3x3-demo-violet.svg'], stock: 17, featured: false, isNew: true, isActive: true,
    tags: ['3x3', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-3x3-03', name: 'Cubo 3x3 Demo Aqua (producto de demostración)', slug: 'cubo-3x3-demo-aqua',
    description: 'Producto de demostración. Modelo 3x3 para práctica diaria con presentación limpia.',
    price: 42900, category: 'Cubos 3x3', brand: 'CUBIQ Demo',
    images: ['/images/products/3x3/cubo-3x3-demo-aqua.svg'], stock: 19, featured: false, isNew: false, isActive: true,
    tags: ['3x3', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-3x3-04', name: 'Cubo 3x3 Demo Flame (producto de demostración)', slug: 'cubo-3x3-demo-flame',
    description: 'Producto de demostración. Cubo 3x3 con diseño en tonos cálidos para catálogo.',
    price: 41900, category: 'Cubos 3x3', brand: 'CUBIQ Studio',
    images: ['/images/products/3x3/cubo-3x3-demo-flame.svg'], stock: 15, featured: false, isNew: false, isActive: true,
    tags: ['3x3', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-3x3-05', name: 'Cubo 3x3 Demo Mint (producto de demostración)', slug: 'cubo-3x3-demo-mint',
    description: 'Producto de demostración. Versión 3x3 con apariencia fresca y comercial.',
    price: 40900, category: 'Cubos 3x3', brand: 'CUBIQ Demo',
    images: ['/images/products/3x3/cubo-3x3-demo-mint.svg'], stock: 21, featured: false, isNew: false, isActive: true,
    tags: ['3x3', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-3x3-06', name: 'Cubo 3x3 Demo Frost (producto de demostración)', slug: 'cubo-3x3-demo-frost',
    description: 'Producto de demostración. Cubo 3x3 con estilo claro, ideal para vitrina digital.',
    price: 45900, category: 'Cubos 3x3', brand: 'CUBIQ Studio',
    images: ['/images/products/3x3/cubo-3x3-demo-frost.svg'], stock: 13, featured: true, isNew: true, isActive: true,
    tags: ['3x3', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },

  // Cubos 4x4 (6)
  {
    id: 'p-4x4-01', name: 'Cubo 4x4 Demo Master (producto de demostración)', slug: 'cubo-4x4-demo-master',
    description: 'Producto de demostración. Cubo 4x4 para quienes buscan un reto mayor al 3x3.',
    price: 89900, compareAtPrice: 99900, category: 'Cubos 4x4', brand: 'CUBIQ Demo',
    images: ['/images/products/4x4/cubo-4x4-demo-master.svg'], stock: 10, featured: true, isNew: false, isActive: true,
    tags: ['4x4', 'demo'], characteristics: ['Formato 4x4', 'Producto de demostración']
  },
  {
    id: 'p-4x4-02', name: 'Cubo 4x4 Demo Ocean (producto de demostración)', slug: 'cubo-4x4-demo-ocean',
    description: 'Producto de demostración. Modelo 4x4 con presentación en tonos azules.',
    price: 94900, category: 'Cubos 4x4', brand: 'CUBIQ Studio',
    images: ['/images/products/4x4/cubo-4x4-demo-ocean.svg'], stock: 8, featured: false, isNew: true, isActive: true,
    tags: ['4x4', 'demo'], characteristics: ['Formato 4x4', 'Producto de demostración']
  },
  {
    id: 'p-4x4-03', name: 'Cubo 4x4 Demo Solar (producto de demostración)', slug: 'cubo-4x4-demo-solar',
    description: 'Producto de demostración. Cubo 4x4 con estilo visual de alto contraste.',
    price: 91900, category: 'Cubos 4x4', brand: 'CUBIQ Demo',
    images: ['/images/products/4x4/cubo-4x4-demo-solar.svg'], stock: 9, featured: false, isNew: false, isActive: true,
    tags: ['4x4', 'demo'], characteristics: ['Formato 4x4', 'Producto de demostración']
  },
  {
    id: 'p-4x4-04', name: 'Cubo 4x4 Demo Grape (producto de demostración)', slug: 'cubo-4x4-demo-grape',
    description: 'Producto de demostración. Cubo 4x4 de presentación moderna para práctica intermedia.',
    price: 93900, category: 'Cubos 4x4', brand: 'CUBIQ Studio',
    images: ['/images/products/4x4/cubo-4x4-demo-grape.svg'], stock: 7, featured: false, isNew: false, isActive: true,
    tags: ['4x4', 'demo'], characteristics: ['Formato 4x4', 'Producto de demostración']
  },
  {
    id: 'p-4x4-05', name: 'Cubo 4x4 Demo Lime (producto de demostración)', slug: 'cubo-4x4-demo-lime',
    description: 'Producto de demostración. Modelo 4x4 con imagen comercial nítida y colores vivos.',
    price: 90900, category: 'Cubos 4x4', brand: 'CUBIQ Demo',
    images: ['/images/products/4x4/cubo-4x4-demo-lime.svg'], stock: 11, featured: false, isNew: false, isActive: true,
    tags: ['4x4', 'demo'], characteristics: ['Formato 4x4', 'Producto de demostración']
  },
  {
    id: 'p-4x4-06', name: 'Cubo 4x4 Demo Graphite (producto de demostración)', slug: 'cubo-4x4-demo-graphite',
    description: 'Producto de demostración. Cubo 4x4 con estética sobria para coleccionistas.',
    price: 96900, category: 'Cubos 4x4', brand: 'CUBIQ Studio',
    images: ['/images/products/4x4/cubo-4x4-demo-graphite.svg'], stock: 6, featured: false, isNew: true, isActive: true,
    tags: ['4x4', 'demo'], characteristics: ['Formato 4x4', 'Producto de demostración']
  },

  // Cubos 5x5 y superiores (6)
  {
    id: 'p-5x5-01', name: 'Cubo 5x5 Demo Challenge (producto de demostración)', slug: 'cubo-5x5-demo-challenge',
    description: 'Producto de demostración. Cubo 5x5 para retos de mayor complejidad que 4x4.',
    price: 129900, compareAtPrice: 144900, category: 'Cubos 5x5 y superiores', brand: 'CUBIQ Demo',
    images: ['/images/products/5x5-superiores/cubo-5x5-demo-challenge.svg'], stock: 7, featured: true, isNew: true, isActive: true,
    tags: ['5x5', 'demo'], characteristics: ['Formato 5x5', 'Producto de demostración']
  },
  {
    id: 'p-5x5-02', name: 'Cubo 5x5 Demo Glacier (producto de demostración)', slug: 'cubo-5x5-demo-glacier',
    description: 'Producto de demostración. Modelo 5x5 con presentación limpia y profesional.',
    price: 134900, category: 'Cubos 5x5 y superiores', brand: 'CUBIQ Studio',
    images: ['/images/products/5x5-superiores/cubo-5x5-demo-glacier.svg'], stock: 6, featured: false, isNew: false, isActive: true,
    tags: ['5x5', 'demo'], characteristics: ['Formato 5x5', 'Producto de demostración']
  },
  {
    id: 'p-5x5-03', name: 'Cubo 5x5 Demo Amber (producto de demostración)', slug: 'cubo-5x5-demo-amber',
    description: 'Producto de demostración. Cubo 5x5 con estilo visual cálido para exhibición.',
    price: 132900, category: 'Cubos 5x5 y superiores', brand: 'CUBIQ Demo',
    images: ['/images/products/5x5-superiores/cubo-5x5-demo-amber.svg'], stock: 5, featured: false, isNew: false, isActive: true,
    tags: ['5x5', 'demo'], characteristics: ['Formato 5x5', 'Producto de demostración']
  },
  {
    id: 'p-6x6-01', name: 'Cubo 6x6 Demo Superior (producto de demostración)', slug: 'cubo-6x6-demo-superior',
    description: 'Producto de demostración. Formato 6x6 (superior) para colecciones avanzadas.',
    price: 179900, category: 'Cubos 5x5 y superiores', brand: 'CUBIQ Studio',
    images: ['/images/products/5x5-superiores/cubo-6x6-demo-superior.svg'], stock: 4, featured: false, isNew: true, isActive: true,
    tags: ['6x6', 'superior', 'demo'], characteristics: ['Formato 6x6', 'Producto de demostración']
  },
  {
    id: 'p-6x6-02', name: 'Cubo 6x6 Demo Rose (producto de demostración)', slug: 'cubo-6x6-demo-rose',
    description: 'Producto de demostración. Cubo 6x6 con presentación comercial diferenciada.',
    price: 184900, category: 'Cubos 5x5 y superiores', brand: 'CUBIQ Demo',
    images: ['/images/products/5x5-superiores/cubo-6x6-demo-rose.svg'], stock: 3, featured: false, isNew: false, isActive: true,
    tags: ['6x6', 'superior', 'demo'], characteristics: ['Formato 6x6', 'Producto de demostración']
  },
  {
    id: 'p-7x7-01', name: 'Cubo 7x7 Demo Superior (producto de demostración)', slug: 'cubo-7x7-demo-superior',
    description: 'Producto de demostración. Formato 7x7 (superior) para retos de alta complejidad.',
    price: 229900, category: 'Cubos 5x5 y superiores', brand: 'CUBIQ Studio',
    images: ['/images/products/5x5-superiores/cubo-7x7-demo-superior.svg'], stock: 2, featured: true, isNew: false, isActive: true,
    tags: ['7x7', 'superior', 'demo'], characteristics: ['Formato 7x7', 'Producto de demostración']
  },

  // Cubos profesionales (6) - demo, sin afirmar modelos/tecnologías oficiales
  {
    id: 'p-pro-01', name: 'Cubo 3x3 Pro Demo Velocity (producto de demostración)', slug: 'cubo-3x3-pro-demo-velocity',
    description: 'Producto de demostración. Presentación inspirada en cubos de alto rendimiento para práctica enfocada.',
    price: 109900, compareAtPrice: 124900, category: 'Cubos profesionales', brand: 'CUBIQ Pro (demo)',
    images: ['/images/products/profesionales/cubo-3x3-pro-demo-velocity.svg'], stock: 9, featured: true, isNew: true, isActive: true,
    tags: ['3x3', 'profesional', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración', 'Práctica avanzada']
  },
  {
    id: 'p-pro-02', name: 'Cubo 3x3 Pro Demo Circuit (producto de demostración)', slug: 'cubo-3x3-pro-demo-circuit',
    description: 'Producto de demostración. Estilo visual premium para catálogo de alto rendimiento.',
    price: 114900, category: 'Cubos profesionales', brand: 'CUBIQ Pro (demo)',
    images: ['/images/products/profesionales/cubo-3x3-pro-demo-circuit.svg'], stock: 8, featured: false, isNew: false, isActive: true,
    tags: ['3x3', 'profesional', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-pro-03', name: 'Cubo 3x3 Pro Demo Crimson (producto de demostración)', slug: 'cubo-3x3-pro-demo-crimson',
    description: 'Producto de demostración. Cubo 3x3 con imagen comercial de gama alta (demo).',
    price: 119900, category: 'Cubos profesionales', brand: 'CUBIQ Pro (demo)',
    images: ['/images/products/profesionales/cubo-3x3-pro-demo-crimson.svg'], stock: 7, featured: false, isNew: false, isActive: true,
    tags: ['3x3', 'profesional', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-pro-04', name: 'Cubo 3x3 Pro Demo Matrix (producto de demostración)', slug: 'cubo-3x3-pro-demo-matrix',
    description: 'Producto de demostración. Diseño orientado a práctica consistente y repetible.',
    price: 112900, category: 'Cubos profesionales', brand: 'CUBIQ Pro (demo)',
    images: ['/images/products/profesionales/cubo-3x3-pro-demo-matrix.svg'], stock: 10, featured: false, isNew: true, isActive: true,
    tags: ['3x3', 'profesional', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-pro-05', name: 'Cubo 3x3 Pro Demo Indigo (producto de demostración)', slug: 'cubo-3x3-pro-demo-indigo',
    description: 'Producto de demostración. Presentación profesional para usuarios que entrenan con frecuencia.',
    price: 117900, category: 'Cubos profesionales', brand: 'CUBIQ Pro (demo)',
    images: ['/images/products/profesionales/cubo-3x3-pro-demo-indigo.svg'], stock: 6, featured: false, isNew: false, isActive: true,
    tags: ['3x3', 'profesional', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-pro-06', name: 'Cubo 3x3 Pro Demo Apex (producto de demostración)', slug: 'cubo-3x3-pro-demo-apex',
    description: 'Producto de demostración. Pieza de vitrina con estética de rendimiento (demo).',
    price: 124900, category: 'Cubos profesionales', brand: 'CUBIQ Pro (demo)',
    images: ['/images/products/profesionales/cubo-3x3-pro-demo-apex.svg'], stock: 5, featured: true, isNew: false, isActive: true,
    tags: ['3x3', 'profesional', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },

  // Variantes y Megaminx (6)
  {
    id: 'p-var-01', name: 'Megaminx Demo Classic (producto de demostración)', slug: 'megaminx-demo-classic',
    description: 'Producto de demostración. Variante dodecaédrica tipo Megaminx para colección y reto.',
    price: 99900, compareAtPrice: 109900, category: 'Variantes y Megaminx', brand: 'CUBIQ Variants (demo)',
    images: ['/images/products/variantes-megaminx/megaminx-demo-classic.svg'], stock: 8, featured: true, isNew: false, isActive: true,
    tags: ['megaminx', 'variante', 'demo'], characteristics: ['Forma dodecaédrica', 'Producto de demostración']
  },
  {
    id: 'p-var-02', name: 'Megaminx Demo Nova (producto de demostración)', slug: 'megaminx-demo-nova',
    description: 'Producto de demostración. Megaminx con presentación de colores vivos.',
    price: 104900, category: 'Variantes y Megaminx', brand: 'CUBIQ Variants (demo)',
    images: ['/images/products/variantes-megaminx/megaminx-demo-nova.svg'], stock: 6, featured: false, isNew: true, isActive: true,
    tags: ['megaminx', 'variante', 'demo'], characteristics: ['Forma dodecaédrica', 'Producto de demostración']
  },
  {
    id: 'p-var-03', name: 'Pyraminx Demo Classic (producto de demostración)', slug: 'pyraminx-demo-classic',
    description: 'Producto de demostración. Variante piramidal (Pyraminx) con forma triangular clara.',
    price: 54900, category: 'Variantes y Megaminx', brand: 'CUBIQ Variants (demo)',
    images: ['/images/products/variantes-megaminx/pyraminx-demo-classic.svg'], stock: 14, featured: false, isNew: false, isActive: true,
    tags: ['pyraminx', 'variante', 'demo'], characteristics: ['Forma piramidal', 'Producto de demostración']
  },
  {
    id: 'p-var-04', name: 'Pyraminx Demo Bloom (producto de demostración)', slug: 'pyraminx-demo-bloom',
    description: 'Producto de demostración. Pyraminx con paleta moderna y presentación comercial.',
    price: 57900, category: 'Variantes y Megaminx', brand: 'CUBIQ Variants (demo)',
    images: ['/images/products/variantes-megaminx/pyraminx-demo-bloom.svg'], stock: 12, featured: false, isNew: true, isActive: true,
    tags: ['pyraminx', 'variante', 'demo'], characteristics: ['Forma piramidal', 'Producto de demostración']
  },
  {
    id: 'p-var-05', name: 'Mirror Cube Demo (producto de demostración)', slug: 'mirror-cube-demo',
    description: 'Producto de demostración. Variante tipo mirror para resolver por forma/volumen (demo).',
    price: 64900, category: 'Variantes y Megaminx', brand: 'CUBIQ Variants (demo)',
    images: ['/images/products/variantes-megaminx/mirror-cube-demo.svg'], stock: 10, featured: false, isNew: false, isActive: true,
    tags: ['mirror', 'variante', 'demo'], characteristics: ['Variante por forma', 'Producto de demostración']
  },
  {
    id: 'p-var-06', name: 'Skewb Demo (producto de demostración)', slug: 'skewb-demo',
    description: 'Producto de demostración. Variante Skewb con mecánica de giros distinta al 3x3.',
    price: 59900, category: 'Variantes y Megaminx', brand: 'CUBIQ Variants (demo)',
    images: ['/images/products/variantes-megaminx/skewb-demo.svg'], stock: 11, featured: true, isNew: false, isActive: true,
    tags: ['skewb', 'variante', 'demo'], characteristics: ['Variante Skewb', 'Producto de demostración']
  },

  // Cubos magnéticos (6) - demo, sin afirmar mecanismos/tecnologías oficiales
  {
    id: 'p-mag-01', name: 'Cubo 3x3 Demo Control A (producto de demostración)', slug: 'cubo-3x3-demo-control-a',
    description: 'Producto de demostración. Cubo 3x3 presentado en la línea de control estable (demo).',
    price: 69900, compareAtPrice: 79900, category: 'Cubos magnéticos', brand: 'CUBIQ Control (demo)',
    images: ['/images/products/magneticos/cubo-3x3-demo-control-a.svg'], stock: 13, featured: true, isNew: false, isActive: true,
    tags: ['3x3', 'control', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-mag-02', name: 'Cubo 3x3 Demo Control B (producto de demostración)', slug: 'cubo-3x3-demo-control-b',
    description: 'Producto de demostración. Modelo 3x3 con enfoque en sensación de alineación (demo).',
    price: 74900, category: 'Cubos magnéticos', brand: 'CUBIQ Control (demo)',
    images: ['/images/products/magneticos/cubo-3x3-demo-control-b.svg'], stock: 12, featured: false, isNew: true, isActive: true,
    tags: ['3x3', 'control', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-mag-03', name: 'Cubo 2x2 Demo Control (producto de demostración)', slug: 'cubo-2x2-demo-control',
    description: 'Producto de demostración. Formato 2x2 en la línea de control estable (demo).',
    price: 49900, category: 'Cubos magnéticos', brand: 'CUBIQ Control (demo)',
    images: ['/images/products/magneticos/cubo-2x2-demo-control.svg'], stock: 16, featured: false, isNew: false, isActive: true,
    tags: ['2x2', 'control', 'demo'], characteristics: ['Formato 2x2', 'Producto de demostración']
  },
  {
    id: 'p-mag-04', name: 'Cubo 4x4 Demo Control (producto de demostración)', slug: 'cubo-4x4-demo-control',
    description: 'Producto de demostración. Formato 4x4 presentado para práctica con sensación estable (demo).',
    price: 104900, category: 'Cubos magnéticos', brand: 'CUBIQ Control (demo)',
    images: ['/images/products/magneticos/cubo-4x4-demo-control.svg'], stock: 7, featured: false, isNew: true, isActive: true,
    tags: ['4x4', 'control', 'demo'], characteristics: ['Formato 4x4', 'Producto de demostración']
  },
  {
    id: 'p-mag-05', name: 'Cubo 3x3 Demo Control C (producto de demostración)', slug: 'cubo-3x3-demo-control-c',
    description: 'Producto de demostración. Cubo 3x3 de práctica con presentación comercial moderna (demo).',
    price: 72900, category: 'Cubos magnéticos', brand: 'CUBIQ Control (demo)',
    images: ['/images/products/magneticos/cubo-3x3-demo-control-c.svg'], stock: 10, featured: false, isNew: false, isActive: true,
    tags: ['3x3', 'control', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },
  {
    id: 'p-mag-06', name: 'Cubo 3x3 Demo Control D (producto de demostración)', slug: 'cubo-3x3-demo-control-d',
    description: 'Producto de demostración. Modelo 3x3 de la línea control, enfocado en uso recreativo (demo).',
    price: 76900, category: 'Cubos magnéticos', brand: 'CUBIQ Control (demo)',
    images: ['/images/products/magneticos/cubo-3x3-demo-control-d.svg'], stock: 9, featured: true, isNew: false, isActive: true,
    tags: ['3x3', 'control', 'demo'], characteristics: ['Formato 3x3', 'Producto de demostración']
  },

  // Accesorios (8, mínimo 6) - reales como categoría de producto, imágenes propias
  {
    id: 'p-acc-01', name: 'Lubricante para cubos Demo A (producto de demostración)', slug: 'lubricante-cubos-demo-a',
    description: 'Producto de demostración. Lubricante presentado para mantenimiento general de cubos.',
    price: 15900, category: 'Accesorios', brand: 'CUBIQ Care (demo)',
    images: ['/images/products/accesorios/lubricante-cubos-demo-a.svg'], stock: 40, featured: true, isNew: true, isActive: true,
    tags: ['lubricante', 'accesorio', 'demo'], characteristics: ['Mantenimiento', 'Producto de demostración']
  },
  {
    id: 'p-acc-02', name: 'Lubricante para cubos Demo B (producto de demostración)', slug: 'lubricante-cubos-demo-b',
    description: 'Producto de demostración. Variante de lubricante para rutinas de cuidado (demo).',
    price: 17900, category: 'Accesorios', brand: 'CUBIQ Care (demo)',
    images: ['/images/products/accesorios/lubricante-cubos-demo-b.svg'], stock: 35, featured: false, isNew: false, isActive: true,
    tags: ['lubricante', 'accesorio', 'demo'], characteristics: ['Mantenimiento', 'Producto de demostración']
  },
  {
    id: 'p-acc-03', name: 'Cronómetro de práctica Demo (producto de demostración)', slug: 'cronometro-practica-demo',
    description: 'Producto de demostración. Cronómetro para medir tiempos de resolución en práctica.',
    price: 69900, compareAtPrice: 79900, category: 'Accesorios', brand: 'CUBIQ Gear (demo)',
    images: ['/images/products/accesorios/cronometro-practica-demo.svg'], stock: 12, featured: true, isNew: false, isActive: true,
    tags: ['cronómetro', 'accesorio', 'demo'], characteristics: ['Medición de tiempos', 'Producto de demostración']
  },
  {
    id: 'p-acc-04', name: 'Tapete de práctica Demo (producto de demostración)', slug: 'tapete-practica-demo',
    description: 'Producto de demostración. Tapete para superficie de práctica y protección del cubo.',
    price: 39900, category: 'Accesorios', brand: 'CUBIQ Gear (demo)',
    images: ['/images/products/accesorios/tapete-practica-demo.svg'], stock: 18, featured: false, isNew: true, isActive: true,
    tags: ['tapete', 'accesorio', 'demo'], characteristics: ['Superficie de práctica', 'Producto de demostración']
  },
  {
    id: 'p-acc-05', name: 'Bolsa/estuche protector Demo (producto de demostración)', slug: 'estuche-protector-demo',
    description: 'Producto de demostración. Estuche para transportar y proteger cubos.',
    price: 24900, category: 'Accesorios', brand: 'CUBIQ Gear (demo)',
    images: ['/images/products/accesorios/estuche-protector-demo.svg'], stock: 26, featured: false, isNew: false, isActive: true,
    tags: ['estuche', 'accesorio', 'demo'], characteristics: ['Protección y transporte', 'Producto de demostración']
  },
  {
    id: 'p-acc-06', name: 'Soporte de exhibición Demo (producto de demostración)', slug: 'soporte-exhibicion-demo',
    description: 'Producto de demostración. Soporte para exhibir cubos en escritorio o vitrina.',
    price: 19900, category: 'Accesorios', brand: 'CUBIQ Gear (demo)',
    images: ['/images/products/accesorios/soporte-exhibicion-demo.svg'], stock: 30, featured: false, isNew: false, isActive: true,
    tags: ['soporte', 'accesorio', 'demo'], characteristics: ['Exhibición', 'Producto de demostración']
  },
  {
    id: 'p-acc-07', name: 'Kit de mantenimiento Demo (producto de demostración)', slug: 'kit-mantenimiento-demo',
    description: 'Producto de demostración. Kit básico para cuidado y mantenimiento de cubos.',
    price: 34900, compareAtPrice: 39900, category: 'Accesorios', brand: 'CUBIQ Care (demo)',
    images: ['/images/products/accesorios/kit-mantenimiento-demo.svg'], stock: 15, featured: false, isNew: true, isActive: true,
    tags: ['kit', 'mantenimiento', 'accesorio', 'demo'], characteristics: ['Cuidado del cubo', 'Producto de demostración']
  },
  {
    id: 'p-acc-08', name: 'Herramienta de ajuste Demo (producto de demostración)', slug: 'herramienta-ajuste-demo',
    description: 'Producto de demostración. Herramienta básica para ajustes generales (demo).',
    price: 12900, category: 'Accesorios', brand: 'CUBIQ Care (demo)',
    images: ['/images/products/accesorios/herramienta-ajuste-demo.svg'], stock: 28, featured: false, isNew: false, isActive: true,
    tags: ['herramienta', 'ajuste', 'accesorio', 'demo'], characteristics: ['Ajuste básico', 'Producto de demostración']
  }
];

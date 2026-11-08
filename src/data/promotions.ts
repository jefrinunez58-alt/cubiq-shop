import type { Promotion } from '../types/product';

export const promotions: Promotion[] = [
  {
    id: 'promo-001',
    title: 'Selección Profesional (demo)',
    description: 'Productos de demostración con presentación comercial para práctica avanzada',
    image: '/images/products/categorias/categoria-profesionales.svg',
    buttonText: 'Ver Cubos Profesionales',
    buttonLink: '/productos?categoria=Cubos profesionales',
    backgroundColor: 'bg-[#FFF7D6]'
  },
  {
    id: 'promo-002',
    title: 'Control y Precisión (demo)',
    description: 'Explora la categoría de cubos magnéticos con imágenes y datos de demostración',
    image: '/images/products/categorias/categoria-magneticos.svg',
    buttonText: 'Ver Magnéticos',
    buttonLink: '/productos?categoria=Cubos magnéticos',
    backgroundColor: 'bg-[#EAF4FF]'
  },
  {
    id: 'promo-003',
    title: 'Accesorios Esenciales (demo)',
    description: 'Lubricantes, cronómetros, tapetes, estuches y herramientas de demostración',
    image: '/images/products/categorias/categoria-accesorios.svg',
    buttonText: 'Ver Accesorios',
    buttonLink: '/productos?categoria=Accesorios',
    backgroundColor: 'bg-[#F3EFFF]'
  }
];
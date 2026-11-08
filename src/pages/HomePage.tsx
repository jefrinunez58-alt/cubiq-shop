import { Hero } from '../components/home/Hero';
import { CategorySection } from '../components/home/CategorySection';
import { ProductRail } from '../components/home/ProductRail';
import { BrandsSection } from '../components/home/BrandsSection';
import { PromotionsSection } from '../components/home/PromotionsSection';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { products } from '../data/products';

export const HomePage = () => {
  const active = products.filter(p => p.isActive);
  const bestSellers = active.filter(p => p.featured).slice(0, 4);
  const novedades = active.filter(p => p.isNew).slice(0, 4);
  const profesionales = active.filter(p => p.category === 'Cubos profesionales').slice(0, 4);
  const magneticos = active.filter(p => p.category === 'Cubos magnéticos').slice(0, 4);
  const accesorios = active.filter(p => p.category === 'Accesorios').slice(0, 4);

  return (
    <div>
      <Hero />
      <CategorySection />
      <ProductRail eyebrow="Selección" title="Productos más vendidos" description="Selección destacada del catálogo (productos de demostración)." products={bestSellers} viewAllTo="/productos" />
      <ProductRail eyebrow="Novedades" title="Nuevas incorporaciones" description="Productos marcados como nuevos dentro del catálogo de demostración." products={novedades} viewAllTo="/productos" />
      <ProductRail eyebrow="Alto rendimiento" title="Cubos profesionales" description="Presentación inspirada en la práctica avanzada. Datos e imágenes de demostración, sin afirmaciones oficiales no verificadas." products={profesionales} viewAllTo="/productos?categoria=Cubos profesionales" dark />
      <ProductRail eyebrow="Colección" title="Cubos magnéticos" description="Línea enfocada en control y sensación estable (productos de demostración)." products={magneticos} viewAllTo="/productos?categoria=Cubos magnéticos" />
      <ProductRail eyebrow="Esenciales" title="Accesorios destacados" description="Lubricantes, cronómetro, tapete, estuche, soporte, kit y herramienta — cada uno con su propia imagen." products={accesorios} viewAllTo="/productos?categoria=Accesorios" />
      <BrandsSection />
      <PromotionsSection />
      <BenefitsSection />
    </div>
  );
};

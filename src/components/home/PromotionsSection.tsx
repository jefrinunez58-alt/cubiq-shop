import { Link } from 'react-router-dom';
import { promotions } from '../../data/promotions';
import { SectionHeader } from './SectionHeader';
import { ArrowRight } from 'lucide-react';

export const PromotionsSection = () => (
  <section className="py-14 sm:py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Ofertas" title="Promociones especiales" description="Selecciones destacadas para explorar categorías clave con una presentación comercial clara." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {promotions.map((promo) => (
          <div key={promo.id} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-[16/10] bg-gradient-to-b from-slate-50 to-white p-5 flex items-center justify-center">
              <img src={promo.image} alt={promo.title} className="max-h-full w-full object-contain group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-slate-900 text-lg">{promo.title}</h3>
              <p className="text-sm text-slate-600 mt-1.5">{promo.description}</p>
              <Link to={promo.buttonLink} className="inline-flex items-center mt-4 text-sm font-semibold text-violet-700 hover:text-violet-800">
                {promo.buttonText} <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

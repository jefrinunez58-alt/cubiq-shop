import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { SectionHeader } from './SectionHeader';

export const CategorySection = () => {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Explora"
          title="Categorías destacadas"
          description="Navega por formatos, variantes, líneas de control y accesorios. Cada categoría incluye productos con imagen propia y datos de demostración claramente identificados."
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/productos?categoria=${encodeURIComponent(category.name)}`} className="group">
              <div className="h-full rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-b from-white to-slate-50 p-4 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-h-full w-full object-contain drop-shadow-sm group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 group-hover:text-violet-700 transition-colors">{category.name}</h3>
                  <p className="text-sm text-slate-600 mt-1 line-clamp-2">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

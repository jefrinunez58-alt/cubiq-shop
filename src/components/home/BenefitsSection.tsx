import { ShieldCheck, Package, BadgeDollarSign, Sparkles, Truck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const benefits = [
  { icon: Sparkles, title: 'Especialización', description: 'Catálogo enfocado en cubos, variantes y accesorios de speedcubing.' },
  { icon: Package, title: 'Disponibilidad visible', description: 'Estado de stock mostrado en fichas y tarjetas (datos de demostración).' },
  { icon: BadgeDollarSign, title: 'Precios en COP', description: 'Valores presentados en pesos colombianos para una compra clara.' },
  { icon: ShieldCheck, title: 'Compra intuitiva', description: 'Búsqueda, filtros, favoritos y carrito con flujo sencillo.' },
  { icon: Truck, title: 'Información transparente', description: 'Detalles de producto y condiciones comunicadas con claridad.' }
];

export const BenefitsSection = () => {
  return (
    <section className="py-14 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Confianza" title="Ventajas de comprar en CUBIQ" description="Una experiencia diseñada para verse profesional, moderna y fácil de usar en cualquier dispositivo." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center mb-4">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">{benefit.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { SectionHeader } from './SectionHeader';

const brands = [
  { name: 'GAN', note: 'Referencia de marca (modelos oficiales: integrar solo si están verificados)' },
  { name: 'MoYu', note: 'Referencia de marca (modelos oficiales: integrar solo si están verificados)' },
  { name: 'QiYi', note: 'Referencia de marca (modelos oficiales: integrar solo si están verificados)' },
  { name: 'DaYan', note: 'Referencia de marca (modelos oficiales: integrar solo si están verificados)' },
  { name: 'YJ', note: 'Referencia de marca (modelos oficiales: integrar solo si están verificados)' },
];

export const BrandsSection = () => (
  <section className="py-14 sm:py-16 bg-white border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Referencias" title="Marcas reconocidas en speedcubing" description="Presentamos marcas de referencia del sector. Los productos del catálogo actual están identificados como demostración cuando no cuentan con datos comerciales oficiales verificados en este proyecto." />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {brands.map((b) => (
          <div key={b.name} className="rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-6 text-center hover:border-violet-200 hover:bg-white transition-colors">
            <div className="text-2xl font-extrabold tracking-tight text-slate-900">{b.name}</div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">{b.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

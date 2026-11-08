import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* background composition */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950" />
        <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-violet-200 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Catálogo especializado · Presentación comercial
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-5">
              Precisión, control y diseño en cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300">giro</span>.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Explora una tienda moderna de cubos Rubik y speedcubing: formatos 2x2 a 7x7, variantes, líneas de control, profesionales y accesorios esenciales. Precios en COP y experiencia de compra clara.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/productos">
                <Button size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-white">
                  Explorar productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/productos?categoria=Accesorios">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/25 bg-white/0 text-white hover:bg-white/10 hover:border-white/40">
                  Descubrir accesorios
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>2x2 a 7x7+</span><span>·</span><span>Variantes y Megaminx</span><span>·</span><span>Accesorios con imagen propia</span>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 p-4 sm:p-5">
                  <img src="/images/products/profesionales/cubo-3x3-pro-demo-velocity.svg" alt="Cubo de alto rendimiento (producto de demostración)" className="w-full h-44 sm:h-56 object-contain drop-shadow-2xl" />
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-violet-300 font-medium">Línea profesional</p>
                      <p className="text-sm font-semibold text-white">Presentación comercial (demo)</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-200 border border-violet-400/20">Destacado</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                  <img src="/images/products/magneticos/cubo-3x3-demo-control-a.svg" alt="Cubo magnético (producto de demostración)" className="w-full h-28 sm:h-32 object-contain" />
                  <p className="text-xs text-slate-300 mt-2 text-center">Control (demo)</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                  <img src="/images/products/accesorios/cronometro-practica-demo.svg" alt="Cronómetro (producto de demostración)" className="w-full h-28 sm:h-32 object-contain" />
                  <p className="text-xs text-slate-300 mt-2 text-center">Accesorio (demo)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

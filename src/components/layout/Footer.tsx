import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-white">CUBIQ</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Tienda especializada en cubos Rubik y speedcubing. Catálogo de demostración con presentación comercial, precios en COP y experiencia de compra moderna.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="hover:text-white transition-colors">Todos los productos</Link></li>
              <li><Link to="/favoritos" className="hover:text-white transition-colors">Favoritos</Link></li>
              <li><Link to="/carrito" className="hover:text-white transition-colors">Carrito</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/productos?categoria=Cubos 3x3" className="hover:text-white transition-colors">Cubos 3x3</Link></li>
              <li><Link to="/productos?categoria=Cubos 4x4" className="hover:text-white transition-colors">Cubos 4x4</Link></li>
              <li><Link to="/productos?categoria=Cubos profesionales" className="hover:text-white transition-colors">Profesionales</Link></li>
              <li><Link to="/productos?categoria=Variantes y Megaminx" className="hover:text-white transition-colors">Variantes y Megaminx</Link></li>
              <li><Link to="/productos?categoria=Cubos magnéticos" className="hover:text-white transition-colors">Cubos magnéticos</Link></li>
              <li><Link to="/productos?categoria=Accesorios" className="hover:text-white transition-colors">Accesorios</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">Preguntas frecuentes</span></li>
              <li><span className="text-slate-400">Políticas de privacidad</span></li>
              <li><span className="text-slate-400">Términos y condiciones</span></li>
              <li><span className="text-slate-400">Envíos y devoluciones</span></li>
              <li><span className="text-slate-400">Contacto</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>&copy; 2026 CUBIQ. Todos los derechos reservados.</p>
          <p>Imágenes y datos de productos marcados como demostración.</p>
        </div>
      </div>
    </footer>
  );
};

import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFoundPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <p className="text-sm font-semibold text-violet-600 mb-2">Error 404</p>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Página no encontrada</h1>
      <p className="text-slate-600 mb-6">La página que buscas no existe o fue movida.</p>
      <Link to="/"><Button size="lg">Volver al inicio</Button></Link>
    </div>
  </div>
);

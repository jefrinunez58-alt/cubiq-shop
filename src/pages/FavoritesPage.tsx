import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { products } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const favoriteProducts = products.filter(p => favorites.includes(p.id) && p.isActive);
  
  if (favoriteProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <Heart className="h-14 w-14 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">No tienes favoritos</h2>
          <p className="text-slate-600 mb-6">Guarda productos para verlos aquí más tarde.</p>
          <Link to="/productos"><Button size="lg">Explorar productos</Button></Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Mis Favoritos</h1>
        <p className="text-slate-600 mb-8">{favoriteProducts.length} producto{favoriteProducts.length !== 1 ? 's' : ''} guardado{favoriteProducts.length !== 1 ? 's' : ''}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};


import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts = () => {
  const featuredProducts = products.filter(p => p.featured && p.isActive).slice(0, 4);
  
  return (
    <section className="py-16 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#30343B] mb-4">
              Productos Destacados
            </h2>
            <p className="text-gray-600 text-lg">
              Los favoritos de nuestra comunidad
            </p>
          </div>
          <Link to="/productos">
            <Button variant="outline">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

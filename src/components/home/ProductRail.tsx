import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import { ProductCard } from '../products/ProductCard';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const ProductRail = ({
  eyebrow,
  title,
  description,
  products,
  viewAllTo,
  viewAllLabel = 'Ver todos',
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  products: Product[];
  viewAllTo?: string;
  viewAllLabel?: string;
  dark?: boolean;
}) => {
  if (products.length === 0) return null;
  return (
    <section className={`py-14 sm:py-16 ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={dark ? '[&_h2]:text-white [&_p]:text-slate-300 [&_.text-violet-600]:text-violet-300' : ''}>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            action={
              viewAllTo ? (
                <Link to={viewAllTo}>
                  <Button variant={dark ? 'outline' : 'outline'} className={dark ? 'border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30' : ''}>
                    {viewAllLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : undefined
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

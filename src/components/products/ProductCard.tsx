import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Check } from 'lucide-react';
import type { Product } from '../../types/product';
import { formatCOP, calculateDiscount } from '../../lib/currency';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const currentPrice = selectedVariant?.price || product.price;
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > currentPrice;
  const discount = hasDiscount ? calculateDiscount(product.compareAtPrice!, currentPrice) : 0;
  const stock = selectedVariant?.stock ?? product.stock;
  const imageSrc = selectedVariant?.image || product.images[0];
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (stock === 0) return;
    addItem({
      id: `${product.id}-${selectedVariant?.id || 'default'}`,
      productId: product.id,
      name: product.name,
      image: imageSrc,
      price: currentPrice,
      quantity: 1,
      variantId: selectedVariant?.id,
      colorName: selectedVariant?.colorName,
      colorHex: selectedVariant?.colorHex
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(product.id);
  };
  
  return (
    <Link to={`/producto/${product.slug}`} className="group block h-full">
      <article className="bg-white rounded-2xl border border-slate-200 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] sm:aspect-square bg-gradient-to-b from-slate-50 via-white to-slate-50/80 overflow-hidden p-4">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-contain drop-shadow-sm group-hover:scale-[1.04] transition-transform duration-300"
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.25'; }}
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && <span className="bg-emerald-500 text-white px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide">NUEVO</span>}
            {hasDiscount && <span className="bg-rose-500 text-white px-2.5 py-1 rounded-full text-[11px] font-bold">-{discount}%</span>}
            {stock === 0 && <span className="bg-slate-700 text-white px-2.5 py-1 rounded-full text-[11px] font-bold">AGOTADO</span>}
          </div>
          <button onClick={handleToggleFavorite} className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white border border-slate-200/80 rounded-xl shadow-sm transition-colors" aria-label={isFavorite(product.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`} />
          </button>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 truncate">{product.category}</p>
              {product.brand && <p className="text-[11px] font-semibold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full truncate max-w-[55%] border border-violet-100">{product.brand}</p>}
            </div>
            <h3 className="font-bold text-slate-900 leading-snug line-clamp-2 min-h-[2.75rem] group-hover:text-violet-700 transition-colors">{product.name}</h3>
            {product.characteristics && product.characteristics.length > 0 && (
              <p className="text-xs text-slate-600 mt-1 line-clamp-1">{product.characteristics.slice(0, 2).join(' · ')}</p>
            )}
          </div>
          
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-slate-900">{formatCOP(currentPrice)}</span>
              {hasDiscount && <span className="text-sm text-slate-400 line-through">{formatCOP(product.compareAtPrice!)}</span>}
            </div>
          </div>

          {product.variants && product.variants.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center gap-1.5">
                {product.variants.slice(0, 4).map((variant) => (
                  <button key={variant.id} onClick={(e) => { e.preventDefault(); if (variant.stock > 0) setSelectedVariant(variant); }} className={`w-5.5 h-5.5 w-[22px] h-[22px] rounded-full border-2 transition-all ${selectedVariant?.id === variant.id ? 'border-violet-600 scale-110 ring-1 ring-violet-200' : 'border-slate-200'} ${variant.stock === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105'}`} style={{ backgroundColor: variant.colorHex }} title={variant.colorName} disabled={variant.stock === 0} aria-label={`Color ${variant.colorName}`} />
                ))}
                {product.variants.length > 4 && <span className="text-[11px] text-slate-500">+{product.variants.length - 4}</span>}
              </div>
            </div>
          )}
          
          <div className="mb-3 text-xs">
            {stock === 0 ? <span className="text-red-600 font-medium">Agotado</span> : stock < 5 ? <span className="text-amber-700 font-medium">Últimas {stock} unidades</span> : <span className="text-emerald-700 font-medium">Disponible</span>}
          </div>
          
          <div className="mt-auto space-y-2">
            <Button onClick={handleAddToCart} disabled={stock === 0} size="sm" className="w-full" variant={stock === 0 ? 'ghost' : 'primary'}>
              {added ? <Check className="h-4 w-4 mr-2" /> : <ShoppingCart className="h-4 w-4 mr-2" />}
              {stock === 0 ? 'Agotado' : added ? 'Agregado' : 'Agregar al carrito'}
            </Button>
            <span className="block text-center text-xs font-semibold text-violet-700 group-hover:text-violet-800">Ver detalles</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { formatCOP, calculateDiscount } from '../lib/currency';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/products/ProductCard';
import { ShoppingCart, Heart, ChevronLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter(p => p.isActive && p.id !== product.id && p.category === product.category).slice(0, 4);
  }, [product]);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Producto no encontrado</h2>
        <Link to="/productos"><Button>Volver al catálogo</Button></Link>
      </div>
    );
  }
  
  const currentPrice = selectedVariant?.price || product.price;
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > currentPrice;
  const discount = hasDiscount ? calculateDiscount(product.compareAtPrice!, currentPrice) : 0;
  const maxStock = selectedVariant?.stock ?? product.stock;
  const displayImage = selectedVariant?.image || product.images[activeImage] || product.images[0];
  
  const handleAddToCart = () => {
    if (maxStock === 0) return;
    addItem({
      id: `${product.id}-${selectedVariant?.id || 'default'}`,
      productId: product.id,
      name: product.name,
      image: displayImage,
      price: currentPrice,
      quantity,
      variantId: selectedVariant?.id,
      colorName: selectedVariant?.colorName,
      colorHex: selectedVariant?.colorHex
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };
  
  return (
    <div className="bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-slate-900">Inicio</Link><span>/</span>
          <Link to="/productos" className="hover:text-slate-900">Productos</Link><span>/</span>
          <Link to={`/productos?categoria=${encodeURIComponent(product.category)}`} className="hover:text-slate-900">{product.category}</Link>
        </nav>
        <Link to="/productos" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6 text-sm font-medium">
          <ChevronLeft className="h-4 w-4 mr-1" /> Volver al catálogo
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Gallery */}
          <div>
            <div className="aspect-square bg-gradient-to-b from-white to-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-6 sm:p-10 shadow-sm">
              <img src={displayImage} alt={product.name} className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {product.images.map((img, i) => (
                  <button key={img} onClick={() => setActiveImage(i)} className={`w-16 h-16 rounded-xl border p-1.5 bg-white ${activeImage === i ? 'border-violet-500 ring-2 ring-violet-200' : 'border-slate-200'}`}>
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Info */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category}</span>
              {product.brand && <span className="text-xs font-semibold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-100">{product.brand}</span>}
              {product.isNew && <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Nuevo</span>}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 leading-tight">{product.name}</h1>
            <p className="text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 mb-5">Producto de demostración: imagen y datos presentados con fines de catálogo; no representa necesariamente un modelo oficial verificado.</p>
            
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl font-extrabold text-slate-900">{formatCOP(currentPrice)}</span>
              {hasDiscount && (
                <>
                  <span className="text-lg text-slate-400 line-through">{formatCOP(product.compareAtPrice!)}</span>
                  <span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full text-sm font-bold">-{discount}%</span>
                </>
              )}
            </div>
            
            <p className="text-slate-700 leading-relaxed mb-6">{product.description}</p>

            {product.characteristics && product.characteristics.length > 0 && (
              <div className="mb-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Características</h3>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {product.characteristics.map((char, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-2"><span className="text-violet-500 mt-0.5">•</span><span>{char}</span></li>
                  ))}
                </ul>
              </div>
            )}
            
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">Variante / color</label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button key={variant.id} onClick={() => variant.stock > 0 && setSelectedVariant(variant)} className={`w-10 h-10 rounded-full border-2 transition-all ${selectedVariant?.id === variant.id ? 'border-violet-600 scale-110 ring-2 ring-violet-200' : 'border-slate-200'} ${variant.stock === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105'}`} style={{ backgroundColor: variant.colorHex }} title={variant.colorName} disabled={variant.stock === 0} aria-label={`Color ${variant.colorName}`} />
                  ))}
                </div>
                {selectedVariant && <p className="text-sm text-slate-600 mt-2">{selectedVariant.colorName}</p>}
              </div>
            )}
            
            <div className="mb-5 text-sm">
              {maxStock === 0 ? <p className="text-red-600 font-semibold">Agotado</p> : maxStock < 5 ? <p className="text-amber-700 font-semibold">Últimas {maxStock} unidades disponibles</p> : <p className="text-emerald-700 font-semibold">Disponible ({maxStock} unidades)</p>}
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Cantidad</label>
              <div className="inline-flex items-center border border-slate-200 rounded-xl overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-11 h-11 hover:bg-slate-50" disabled={maxStock === 0}>-</button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(Math.min(maxStock, quantity + 1))} className="w-11 h-11 hover:bg-slate-50" disabled={maxStock === 0}>+</button>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button onClick={handleAddToCart} disabled={maxStock === 0} size="lg" className="flex-1">
                {added ? <Check className="h-5 w-5 mr-2" /> : <ShoppingCart className="h-5 w-5 mr-2" />}
                {maxStock === 0 ? 'Agotado' : added ? 'Agregado al carrito' : 'Agregar al carrito'}
              </Button>
              <button onClick={() => toggleFavorite(product.id)} className="p-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors" aria-label="Agregar a favoritos">
                <Heart className={`h-6 w-6 ${isFavorite(product.id) ? 'fill-rose-400 text-rose-400' : 'text-slate-600'}`} />
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

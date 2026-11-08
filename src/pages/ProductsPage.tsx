import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductCard } from '../components/products/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const forcedCategory = location.pathname === '/accesorios' ? 'Accesorios' : '';
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || forcedCategory);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [onlyNew, setOnlyNew] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const brands = useMemo(() => Array.from(new Set(products.filter(p => p.isActive && p.brand).map(p => p.brand!))).sort(), []);

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('categoria') || forcedCategory);
  }, [searchParams, forcedCategory]);
  
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => p.isActive);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.brand?.toLowerCase().includes(query) ||
        p.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        p.description.toLowerCase().includes(query)
      );
    }
    if (selectedCategory) filtered = filtered.filter(p => p.category === selectedCategory);
    if (selectedBrand) filtered = filtered.filter(p => p.brand === selectedBrand);
    if (minPrice) filtered = filtered.filter(p => p.price >= parseInt(minPrice));
    if (maxPrice) filtered = filtered.filter(p => p.price <= parseInt(maxPrice));
    if (onlyNew) filtered = filtered.filter(p => p.isNew);
    
    if (sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);
    else if (sortBy === 'name') filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'featured') filtered = [...filtered].sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || a.name.localeCompare(b.name));
    
    return filtered;
  }, [searchQuery, selectedCategory, selectedBrand, minPrice, maxPrice, sortBy, onlyNew]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const next = new URLSearchParams(searchParams);
    if (category) next.set('categoria', category); else next.delete('categoria');
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSelectedBrand(''); setMinPrice(''); setMaxPrice(''); setSortBy('default'); setOnlyNew(false);
    handleCategoryChange('');
    setSearchQuery('');
    setSearchParams({});
  };
  
  const Filters = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">Buscar</label>
        <div className="relative">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Nombre, marca, categoría..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">Categorías</label>
        <div className="space-y-1.5 max-h-72 overflow-auto pr-1">
          <button onClick={() => handleCategoryChange('')} className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === '' ? 'bg-violet-600 text-white' : 'hover:bg-slate-100 text-slate-700'}`}>Todas las categorías</button>
          {categories.map((category) => (
            <button key={category.id} onClick={() => handleCategoryChange(category.name)} className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === category.name ? 'bg-violet-600 text-white' : 'hover:bg-slate-100 text-slate-700'}`}>{category.name}</button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">Marca</label>
        <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/30">
          <option value="">Todas las marcas</option>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">Precio (COP)</label>
        <div className="grid grid-cols-2 gap-2">
          <input type="number" placeholder="Mín" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/30" />
          <input type="number" placeholder="Máx" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/30" />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={onlyNew} onChange={(e) => setOnlyNew(e.target.checked)} className="rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
        Mostrar solo novedades
      </label>
      <button onClick={clearFilters} className="text-sm font-medium text-violet-700 hover:text-violet-800">Limpiar filtros</button>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-[60vh]">
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-600 mb-2">Catálogo</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{selectedCategory || 'Todos los productos'}</h1>
          <p className="text-slate-600 mt-2">{filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} · Catálogo de demostración con precios en COP</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:hidden mb-4">
          <button onClick={() => setShowFilters(v => !v)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800">
            <SlidersHorizontal className="h-4 w-4" /> {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`lg:w-72 shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:sticky lg:top-24">{Filters}</div>
          </aside>
          <main className="flex-1 min-w-0">
            <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-slate-600">Ordena y filtra para encontrar el producto adecuado.</p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/30 text-sm">
                <option value="default">Ordenar por: relevancia</option>
                <option value="featured">Ordenar por: destacados</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
                <option value="name">Nombre: A-Z</option>
              </select>
            </div>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <p className="text-slate-700 font-medium">No se encontraron productos</p>
                <p className="text-sm text-slate-500 mt-1">Prueba ajustando los filtros o la búsqueda.</p>
                <button onClick={clearFilters} className="mt-4 text-sm font-semibold text-violet-700">Limpiar filtros</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

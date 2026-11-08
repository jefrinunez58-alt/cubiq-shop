import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Todos los productos' },
  { to: '/productos?categoria=Cubos 2x2', label: '2x2' },
  { to: '/productos?categoria=Cubos 3x3', label: '3x3' },
  { to: '/productos?categoria=Cubos 4x4', label: '4x4' },
  { to: '/productos?categoria=Cubos profesionales', label: 'Profesionales' },
  { to: '/productos?categoria=Variantes y Megaminx', label: 'Variantes' },
  { to: '/productos?categoria=Cubos magnéticos', label: 'Magnéticos' },
  { to: '/productos?categoria=Accesorios', label: 'Accesorios' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const itemCount = getItemCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const close = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="bg-slate-900 text-slate-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          <p className="truncate">CUBIQ · Tienda especializada en cubos y speedcubing (catálogo de demostración)</p>
          <p className="hidden sm:block">Precios en COP · Envíos a coordinar</p>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={close}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-extrabold tracking-tight text-slate-900">CUBIQ</span>
              <span className="hidden sm:block text-[11px] text-slate-500 -mt-0.5">Speedcubing Store</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to + item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive && item.to === '/' ? 'text-violet-700 bg-violet-50' : 'text-slate-700 hover:text-violet-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar cubos, marcas, accesorios..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 w-48 lg:w-72 text-sm"
                  aria-label="Buscar productos"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </form>

            <Link to="/favoritos" className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors" aria-label="Favoritos" onClick={close}>
              <Heart className="h-5 w-5 text-slate-700" />
            </Link>
            <Link to="/carrito" className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors relative" aria-label="Carrito" onClick={close}>
              <ShoppingCart className="h-5 w-5 text-slate-700" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-violet-600 text-white text-[11px] rounded-full min-w-5 h-5 px-1 flex items-center justify-center font-semibold">
                  {itemCount}
                </span>
              )}
            </Link>
            <button type="button" className="hidden sm:inline-flex p-2.5 hover:bg-slate-100 rounded-xl transition-colors" aria-label="Perfil de usuario">
              <User className="h-5 w-5 text-slate-700" />
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2.5 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <form onSubmit={handleSearch} className="md:hidden">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </form>
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <Link key={item.to + item.label} to={item.to} onClick={close} className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-violet-700">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="#" onClick={close} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
              <User className="h-4 w-4" /> Perfil de usuario
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

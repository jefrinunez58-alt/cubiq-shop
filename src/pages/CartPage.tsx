import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../lib/currency';
import { Button } from '../components/ui/Button';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

export const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotal } = useCart();
  const total = getTotal();
  
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <ShoppingBag className="h-14 w-14 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-slate-600 mb-6">Agrega productos para comenzar tu compra de demostración.</p>
          <Link to="/productos"><Button size="lg">Explorar productos</Button></Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-8">Carrito de compras</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-contain bg-slate-50 rounded-xl border border-slate-100 p-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.name}</h3>
                      {item.colorName && <p className="text-sm text-slate-600">Color: {item.colorName}</p>}
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-600 p-1" aria-label="Eliminar producto"><Trash2 className="h-4 w-4" /></button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center border border-slate-200 rounded-xl overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-9 h-9 hover:bg-slate-50 flex items-center justify-center"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="w-9 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-9 h-9 hover:bg-slate-50 flex items-center justify-center"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{formatCOP(item.price * item.quantity)}</p>
                      <p className="text-xs text-slate-500">{formatCOP(item.price)} c/u</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Resumen de compra</h2>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Subtotal</span><span className="text-slate-900 font-medium">{formatCOP(total)}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Envío</span><span className="text-slate-900">Por calcular</span></div>
              </div>
              <div className="border-t border-slate-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-extrabold"><span className="text-slate-900">Total</span><span className="text-slate-900">{formatCOP(total)}</span></div>
              </div>
              <Link to="/checkout"><Button className="w-full mb-3">Iniciar compra</Button></Link>
              <Link to="/productos"><Button variant="outline" className="w-full">Seguir comprando</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

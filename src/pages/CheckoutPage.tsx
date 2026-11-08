import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../lib/currency';
import { Button } from '../components/ui/Button';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';

export const CheckoutPage = () => {
  const { items, getTotal, clearCart } = useCart();
  const total = getTotal();
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', department: '', city: '', address: '' });
  const [orderComplete, setOrderComplete] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400";
  
  if (items.length === 0 && !orderComplete) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">No hay productos en el carrito</h2>
        <Link to="/productos"><Button>Volver al catálogo</Button></Link>
      </div>
    );
  }
  
  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">¡Pedido recibido!</h2>
          <p className="text-slate-600 mb-6">Gracias por tu compra. Este es un checkout de demostración, no se ha realizado ningún pago real.</p>
          <Link to="/"><Button size="lg">Volver al inicio</Button></Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/carrito" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6 text-sm font-medium">
          <ChevronLeft className="h-4 w-4 mr-1" /> Volver al carrito
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-8">Finalizar compra</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Datos del comprador</h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo *</label>
                <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className={inputCls} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className={inputCls} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Departamento *</label>
                  <input type="text" required value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ciudad *</label>
                  <input type="text" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Dirección de entrega *</label>
                <input type="text" required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className={inputCls} />
              </div>
              <div className="pt-4">
                <p className="text-sm text-slate-500 mb-4">* Checkout de demostración. No se solicitarán datos de tarjeta bancaria.</p>
                <Button type="submit" size="lg" className="w-full">Confirmar pedido</Button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Resumen del pedido</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-slate-50 rounded-lg border border-slate-100 p-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
                      <p className="text-xs text-slate-500">Cant: {item.quantity}</p>
                      <p className="text-sm font-semibold text-slate-900">{formatCOP(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Subtotal</span><span className="text-slate-900 font-medium">{formatCOP(total)}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Envío</span><span className="text-slate-900">Por calcular</span></div>
                <div className="border-t border-slate-200 pt-2 flex justify-between text-lg font-extrabold"><span className="text-slate-900">Total</span><span className="text-slate-900">{formatCOP(total)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

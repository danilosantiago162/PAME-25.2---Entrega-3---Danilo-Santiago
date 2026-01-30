"use client";

import { useCart } from "../carrinho_global/carrinho_global";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Carrinho</h1>

      {cart.length === 0 && <p>Carrinho vazio</p>}

      {cart.map(item => (
        <div key={item.id} className="flex justify-between mb-3">
          <div>
            <p>{item.nome}</p>
            <p>Qtd: {item.quantity}</p>
          </div>
          <button
            className="text-red-600"
            onClick={() => removeFromCart(item.id)}
          >
            Remover
          </button>
        </div>
      ))}

      <hr className="my-4" />

      <p className="text-xl font-bold">Total: R$ {total}</p>
    </div>
  );
}
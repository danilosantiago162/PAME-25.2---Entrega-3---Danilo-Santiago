"use client";

import { useCart } from "../carrinho_global/carrinho_global";

export default function CartToast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div
      className="
        fixed top-6 right-6 z-50
        bg-green-600 text-white
        px-4 py-2 rounded-lg shadow-lg
        animate-toast-in
      "
      role="status"
      aria-live="polite"
    >
      {toastMessage}
    </div>
  );
}

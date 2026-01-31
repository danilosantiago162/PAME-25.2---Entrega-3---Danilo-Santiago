"use client";

import Image from "next/image";
import { products } from "../Produtos/produtos";
import { useCart } from "../carrinho_global/carrinho_global";
import Link from "next/link";

export default function Colecao() {
  const { addToCart } = useCart();

  return (
    <div className="bg-white flex flex-col items-center p-6">
      <div className="h-20 w-full flex items-center">
        <p className="text-amber-700 text-3xl">Coleção</p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
            <div
                key={product.id}
                className="bg-amber-50 border border-amber-100 rounded-xl overflow-hidden shadow-sm flex flex-col"
            >
                <div className="relative w-full h-72 p-2">
                    <Link href={`/pagProdutos/${product.id}`}>
                        <Image
                            src={product.imagem} 
                            alt={product.nome}
                            fill
                            className="object-contain"
                            priority={false}
                        />
                    </Link>
                </div>

                <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col">
                    <p className="text-black text-lg font-semibold">{product.nome}</p>
                    <p className="text-black">
                    R$ {Number(product.preco).toFixed(2)}
                    </p>
                    <p className="text-black">
                        {product.categoria}
                    </p>
                </div>

                <button
                    className="mt-2 bg-white text-black px-4 py-2 rounded-lg hover:opacity-90 transition"
                    onClick={() => addToCart(product)}
                >
                    Adicionar ao carrinho
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
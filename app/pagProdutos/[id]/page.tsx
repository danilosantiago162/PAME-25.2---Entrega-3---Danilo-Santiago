"use client";

import Image from "next/image";
import { products } from "@/app/Produtos/produtos";
import { useCart } from "@/app/carrinho_global/carrinho_global";
import { use } from "react";

export default function ProdutoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => String(p.id) === id);
  const { addToCart } = useCart();


  if (!product) {
    return <p className="p-10">Produto não encontrado</p>;
  }

  return (
    <>
      <div className="bg-white h-20 w-full">

      </div>
      <div className="bg-amber-50 border border-amber-100 rounded-xl overflow-hidden shadow-sm flex flex-col pt-20 pb-20 p-10 max-w-4xl mx-auto">
        <Image
          src={product.imagem}
          alt={product.nome}
          width={400}
          height={400}
          className="mx-auto object-contain"
        />

        <h1 className="text-3xl font-semibold mt-6">{product.nome}</h1>
        <p className="text-xl mt-2">R$ {product.preco.toFixed(2)}</p>

        <button
          className="
            mt-6 bg-black text-white px-6 py-3 rounded
            transition-transform duration-150
            active:scale-95 active:opacity-80
          "
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
      <div className="bg-white h-20 w-full">

      </div>
    </>
  );
}
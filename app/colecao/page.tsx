"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "../Produtos/produtos";
import { useCart } from "../carrinho_global/carrinho_global";
import Link from "next/link";


{/*Função exportadora de página de coleção*/}
export default function Colecao() {
  const { addToCart } = useCart(); {/*Função a ser usada*/}


  
  return (
    <div className="bg-white flex flex-col items-center p-6">
      <div className="h-20 w-full flex items-center">
        <p className="text-amber-700 text-3xl">Coleção</p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/*Procura cada produto e o insere no grid formatado, geralmente de 3 colunas, mas varia de acordo com a largura da tela*/}
        {products.map((product) => ( 
            <div
                key={product.id}
                className="bg-amber-50 border border-amber-100 rounded-xl overflow-hidden shadow-sm flex flex-col"
            >
                {/*Link no componente de grid que leva para página do produto*/}
                <Link
                    href={`/pagProdutos/${encodeURIComponent(String(product.id))}`}
                    className="flex flex-col flex-1"
                >
                    <div className="relative w-full h-72 p-2 group overflow-hidden">
                    <Image
                        src={product.imagem}
                        alt={product.nome}
                        fill
                        className="object-contain transition-transform duration-300 md:group-hover:scale-110"
                    />
                    </div>

                    <div className="p-4 flex flex-col gap-3">
                    <p className="text-lg font-semibold">{product.nome}</p>
                    <p>R$ {Number(product.preco).toFixed(2)}</p>
                    <p>{product.categoria}</p>
                    </div>
                </Link>
                {/*Botão de adição ao carrinho*/}
                <button
                    className="
                        mt-2 bg-white text-black px-4 py-2 
                        rounded-lg hover:opacity-90 transition 
                        transition-transform duration-150 
                        active:scale-95 active:opacity-80
                        "
                    onClick={() => addToCart(product)}
                >
                    Adicionar ao carrinho
                </button>
            </div>
        ))}
      </div>
    </div>
  );
}
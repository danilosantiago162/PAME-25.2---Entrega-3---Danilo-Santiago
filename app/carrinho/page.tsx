"use client";

import { useCart } from "../carrinho_global/carrinho_global";
import Image from "next/image";

{/*Função exportadora da página do carrinho*/}
export default function CartPage() {
  const { cart, removeFromCart, total } = useCart(); {/*Funções a serem usadas*/}

  return (
    <div className="p-8"> 
      <h1 className="text-3xl font-bold mb-4">Carrinho</h1>

      {cart.length === 0 && <p>Carrinho vazio</p>} {/*Se nenhum item em cart "Carrinho Vazio"*/}

      {/*Encontra item através do id e o imprime na página carrinho*/}
      {cart.map(item => ( 
        <div key={item.id} className="flex justify-between mb-3">
          <div>
            <div className="flex flex-row p-6 gap-6">
              
              <Image src={item.imagem} alt="Foto" width={150} height={150} />
              <div className="flex flex-col p-2">
                <p>{item.nome}</p>
                <p>Qtd: {item.quantity}</p>
              </div>
            </div>
          </div>

          {/*Botão que remove item do carrinho*/}
          <button
            className="text-red-600"
            onClick={() => removeFromCart(item.id)}
          >
            Remover
          </button>
        </div>
      ))}

      <hr className="my-4" />

      <p className="text-xl font-bold">Total: R$ {total}</p> {/*Função total retorna o valor do carrinho*/}
    </div>
  );
}
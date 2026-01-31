import Image from "next/image";
import { products } from "@/app/Produtos/produtos";

export default function ProdutoPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p className="p-10">Produto não encontrado</p>;
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <Image
        src={product.imagem}
        alt={product.nome}
        width={400}
        height={400}
        className="mx-auto object-contain"
      />

      <h1 className="text-3xl font-semibold mt-6">{product.nome}</h1>
      <p className="text-xl mt-2">R$ {product.preco.toFixed(2)}</p>

      <button className="mt-6 bg-black text-white px-6 py-3 rounded">
        Adicionar ao carrinho
      </button>
    </div>
  );
}
export type Product = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
};

export const products: Product[] = [
  {
    id: "1",
    nome: "Brinco de Ouro",
    preco: 15000,
    imagem: "/logo_livia_fontinelli_2.png"
  },
  {
    id: "2",
    nome: "Colar Prata",
    preco: 8000,
    imagem: "/logo_livia_fontinelli_2.png"
  },
  {
    id: "3",
    nome: "Anel Luxo",
    preco: 12000,
    imagem: "/logo_livia_fontinelli_2.png"
  },
];
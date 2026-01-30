export type Product = {
  id: string;
  nome: string;
  preco: number;
};

export const products: Product[] = [
  { id: "1", nome: "Brinco de Ouro", preco: 15000 },
  { id: "2", nome: "Colar Prata", preco: 8000 },
  { id: "3", nome: "Anel Luxo", preco: 12000 },
];
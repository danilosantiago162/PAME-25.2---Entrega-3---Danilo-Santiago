export type Product = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  categoria: string;
};

export const products: Product[] = [
  {
    id: "1",
    nome: "Brinco de Ouro",
    preco: 15000,
    imagem: "/brincos_sem_fundo.png",
    categoria: "Brinco",
  },
  {
    id: "2",
    nome: "Colar Dourado",
    preco: 8000,
    imagem: "/colar_alternativo_transparente.png",
    categoria: "Colar",
  },
  {
    id: "3",
    nome: "Anel Luxo",
    preco: 12000,
    imagem: "/anel_transparente.png",
    categoria: "Anel",
  },
  {
    id: "4",
    nome: "Relógio de Luxo",
    preco: 12000,
    imagem: "/relogio_final.png",
    categoria: "Relógio",
  },
];
export type Product = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  categoria: string;
  descricao: string;
};

export const products: Product[] = [
  {
    id: "1",
    nome: "Brinco de Ouro",
    preco: 15000,
    imagem: "/brincos_sem_fundo.png",
    categoria: "Brinco",
    descricao: "Brinco de pedras de diamante 10 quilates com estrutura de ouro, ideal para eventos noturnos de gala"
  },
  {
    id: "2",
    nome: "Colar Dourado",
    preco: 8000,
    imagem: "/colar_alternativo_transparente.png",
    categoria: "Colar",
    descricao: "Colar dourado grande, ideal para uso com vestido simples, pois o destaque do outfit fica concentrado no colar"
  },
  {
    id: "3",
    nome: "Anel Luxo",
    preco: 12000,
    imagem: "/anel_transparente.png",
    categoria: "Anel",
    descricao: "Aliança premium, o presente ideal para um casal que valorize um ao outro e que possa externalizar esse amor através desse lindo item"
  },
  {
    id: "4",
    nome: "Relógio de Luxo",
    preco: 12000,
    imagem: "/relogio_final.png",
    categoria: "Relógio",
    descricao: "Relógio luxuoso, cravejado em diamantes únicos e com estrutura de ouro, ideal para eventos de gala. Destaca o usuário do mesmo."
  },
];
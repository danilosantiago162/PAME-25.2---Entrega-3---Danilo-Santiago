import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-amber-100 flex flex-row p-6 w-full h-40 justify-center items-center">
        <div className="flex-1">
          <p className="text-black text-2xl">
            LOGO 2 22
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <a  
            href="http://localhost:3001/pages/colecao"
            className="text-black text-2xl">
            COLEÇÃO
          </a>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <a 
            href="#"
            className="text-black text-2xl">
            CARRINHO 5 8
          </a> 
        </div>  
      </header>
      <div className="bg-white h-20 w-full">

      </div>
      <div className="flex flex-row justify-center items-center bg-amber-800 h-120 w-full">
        <div className="flex-1 flex justify-center items-center">
          <Image src="/vercel.svg" alt="Foto" width={50} height={50} />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-amber-200 text-3xl">
            Jóias Lívia Fontinelli
          </p>
          <p className="text-white text-2xl">
            Posicionamento moderno em Joalheria
          </p>
        </div>
      </div>
    </>
  );

}

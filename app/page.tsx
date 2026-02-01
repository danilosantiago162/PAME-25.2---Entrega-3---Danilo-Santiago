import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Espaço entre header e Hero section */}
      <div className="bg-white h-20 w-full">

      </div>
      {/*Hero section*/}
      <div className="flex flex-row justify-center items-center bg-amber-100 h-120 w-full">
        <div className="flex-1 flex justify-center items-center">
          <Image src="/anel_sem_fundo.png" alt="Foto" width={600} height={600} />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-amber-800 font-bold text-3xl">
            Jóias Lívia Fontinelli
          </p>
          <p className="text-amber-700 text-2xl">
            Abordagem moderna em Joalheria
          </p>
        </div>  
      </div>
      {/*Espaçamento de seções */}
      <div className="bg-white h-20 w-full">

      </div>
      {/*Seção de História da marca*/}
      <div className="flex flex-col bg-amber-100 justify-center items-center p-6">
        <p className="text-3xl text-amber-800 font-bold p-10 ">
          História da Marca
        </p>
        <p className="text-amber-700 text-justify max-w-4xl leading-relaxed">
          Livia Fontinelli Joalheria nasce da união entre tradição, 
          sensibilidade artística e um olhar contemporâneo sobre o design. 
          Fundada pela empresária que leva seu nome, a marca traduz uma 
          trajetória construída com propósito, atenção aos detalhes e excelência artesanal. 
          Inspirada pela ideia de que joias vão além do adorno, cada criação é pensada para 
          marcar momentos, celebrar conquistas e expressar identidade. A marca alia 
          técnicas artesanais, materiais nobres e design atemporal, resultando em 
          peças sofisticadas e carregadas de significado. Com processos rigorosos, 
          da seleção das gemas ao acabamento final, a Livia Fontinelli Joalheria 
          entrega qualidade, autenticidade e exclusividade. Mais do que luxo, a 
          marca representa permanência, afeto e histórias que merecem ser eternizadas.
        </p>
      </div>
      {/*Espaçamento do footer*/}
      <div className="bg-white h-20 w-full">

      </div>

      
    </>
  );

}

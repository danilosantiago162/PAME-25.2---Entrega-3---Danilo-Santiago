import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <div className="bg-green h-20 w-full">

      </div>
      <div className="flex flex-row justify-center items-center bg-green-100 h-120 w-full">
        <div className="flex-1 flex justify-center items-center">
          <Image src="/anel_sem_fundo.png" alt="Foto" width={600} height={600} />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-black font-bold text-3xl">
            Jóias Lívia Fontinelli
          </p>
          <p className="text-black text-2xl">
            Posicionamento moderno em Joalheria
          </p>
        </div>  
      </div>
      <div className="bg-white h-20 w-full">

      </div>
      <div className="flex flex-col bg-green-100 justify-center items-center p-6">
        <p className="text-3xl text-green-400 font-bold p-10">
          História da Marca
        </p>
        <p className="text-green-800 pl-60 pr-60">
          A marca Livia Fontinelli nasce do encontro entre sensibilidade artística, tradição e um olhar contemporâneo sobre a joalheria. Fundada pela empresária que leva seu nome, a marca é reflexo de uma trajetória construída com propósito, delicadeza e paixão pelo detalhe.
          Desde muito cedo, Livia Fontinelli enxergava nas joias mais do que adornos: via nelas histórias, emoções e símbolos de momentos que merecem ser eternizados. Inspirada por essa visão, decidiu transformar sua admiração em ofício, unindo técnicas artesanais, materiais nobres e um design atemporal.
          Cada criação da marca carrega um conceito claro: joias feitas para marcar fases da vida. Seja para celebrar conquistas, eternizar vínculos ou expressar identidade, as peças são pensadas para acompanhar quem as usa com significado e elegância.
          A marca valoriza processos cuidadosos, desde a escolha criteriosa das gemas até o acabamento final, garantindo qualidade, autenticidade e exclusividade em cada joia. O resultado são coleções que equilibram sofisticação e sensibilidade, tradição e inovação.
          Hoje, Livia Fontinelli Joalheria representa mais do que luxo — representa expressão pessoal, afeto e permanência. Uma marca criada por uma mulher que acredita que o verdadeiro brilho está nas histórias que cada joia carrega.
        </p>
      </div>

      <div className="bg-white h-20 w-full">

      </div>

      
    </>
  );

}

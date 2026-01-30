import Image from "next/image";
import Link from "next/link";

export default function Colecao() {
    return(
        <div className="bg-white flex-col items-center flex p-6">
            <div className="h-20 w-full" >
                <p className="text-amber-700 text-3xl">Coleção</p>
            </div>
            <div className= "bg-amber-100 flex flex-row justify-center items-center text-amber-200 w-full">
                <div className="flex-1 flex items-center flex-col">
                    <Image src="/logo_livia_fontinelli_2.png" alt="Foto" width={350} height={350} />
                    <div className="w-full flex flex-col item-center">
                        <p className="p-2 text-black text-2xl ">Brinco de ouro argentino</p>
                        <p className="p-2 text-black ">Valor: R$ 15000,00</p>
                    </div>
                    <Image src="/logo_livia_fontinelli_2.png" alt="Foto" width={350} height={350} />
                    <div className="w-full flex flex-col item-center">
                        <p className="p-2 text-black text-2xl ">Brinco de ouro argentino</p>
                        <p className="p-2 text-black ">Valor: R$ 15000,00</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <Image src="/logo_livia_fontinelli_2.png" alt="Foto" width={350} height={350} />
                    <div className="w-full flex flex-col item-center">
                        <p className="p-2 text-black text-2xl">Brinco de ouro argentino</p>
                        <p className="p-2 text-black ">Valor: R$ 15000,00</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <Image src="/logo_livia_fontinelli_2.png" alt="Foto" width={350} height={350} />
                    <div className="w-full flex flex-col item-center">
                        <p className="p-2 text-black text-2xl">Brinco de ouro argentino</p>
                        <p className="p-2 text-black ">Valor: R$ 15000,00</p>
                    </div>
                </div>
            </div>
        </div>  
    );
}
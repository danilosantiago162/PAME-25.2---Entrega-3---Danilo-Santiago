import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Header(){
    return(
        <header className="bg-amber-100 flex flex-row p-6 w-full h-40 justify-center items-center">
            <div className="flex-1">
                <Link href={"/"}>
                    <p className="text-amber-800 text-2xl pt-2">
                        <Image src="/logo_livia_fontinelli_2.png" alt="Foto" width={250} height={250} />
                    </p>
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <Link  
                href="/colecao"
                className="text-amber-800 text-2xl">
                COLEÇÃO
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-end">
                <Link
                href="/carrinho"
                className="text-amber-800 text-2xl pr-6">
                    <ShoppingBag size={50} strokeWidth={2} />
                </Link> 
            </div>  
        </header>
    )
}
import Link from "next/link";

export default function Footer(){ 
    return(
        <footer className="bg-black text-green-100 flex flex-row justify-center w-full">
            <div className="flex flex-col flex-1 w-full">
            <p className="text-2xl pl-6 p-3 ">CONTATO</p>
            <div className="flex flex-row flex-1 w-full gap-6">
            <p className="pl-6 p-2">Instagram</p>
            <p className="pl-6 p-2">Facebook</p>
            <p className="pl-6 p-2">Email</p>
            <p className="pl-6 p-2">Telefone</p>
            </div>
            </div>
        </footer>
    )
}
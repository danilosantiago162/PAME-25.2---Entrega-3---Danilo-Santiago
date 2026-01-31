import Link from "next/link";

export default function Footer(){ 
    return(
        <footer id="fim" className="bg-black text-amber-100 flex flex-row justify-center w-full">
            <div className="flex flex-col flex-1 w-full">
            <p className="text-2xl pl-6 p-3 ">CONTATO</p>
            <div className="flex flex-row flex-1 w-full gap-6">
            <Link className="pl-6 p-2" href={"#"}>Instagram</Link>
            <Link className="pl-6 p-2" href={"#"}>Facebook</Link>
            <Link className="pl-6 p-2" href={"#"}>Email</Link>
            <Link className="pl-6 p-2" href={"#"}>0800 000 0000</Link>
            </div>
            </div>
        </footer>
    )
}
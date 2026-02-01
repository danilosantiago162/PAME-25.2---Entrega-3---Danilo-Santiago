import Link from "next/link";

{/*Função exportadora de footer*/}
export default function Footer(){ 
    return(
        <footer id="fim" className="bg-black text-amber-100 flex flex-row justify-center w-full"> {/*Fundo preto texto ambar claro e links para redes sociais*/}
            <div className="flex flex-col flex-1 w-full">
                <p className="text-2xl pl-6 p-3 ">CONTATO</p>
                <div className="flex flex-row flex-1 w-full gap-6">
                <Link className="pl-6 p-2" href={"#"}>Instagram</Link> {/*Link para instagram*/}
                <Link className="pl-6 p-2" href={"#"}>Facebook</Link> {/*Link para facebook*/}
                <Link className="pl-6 p-2" href={"#"}>Email</Link> {/*Link para email*/}
                <Link className="pl-6 p-2" href={"#"}>0800 000 0000</Link> {/*Link para número de telefone*/}
                </div>
            </div>
        </footer>
    )
}
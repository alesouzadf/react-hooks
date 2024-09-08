import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function(){
    const quantidadeCaracteres = 400
    let [caracteresFaltantes, setCaracteresFaltantes] = useState(0)
    let [texto, setTexto] = useState("")

    useEffect(()=>{
        let timer = setTimeout(()=> {
            setCaracteresFaltantes(quantidadeCaracteres - texto.length)
        },1000)
        return ()=>{clearTimeout(timer)}
    },[texto])

    return (
        <Pagina titulo="Contagem de Caracteres" subtitulo="Mostra caracteres faltantes">
            <Display
                texto={"Digite um texto"} 
                textoComplementar={`Caracteres faltantes: ${caracteresFaltantes}`} 
            />
            <textarea
                className="
                    w-3/5 h-72 border-gray-500 bg-gray-500
                     text-white text-2xl rounded p-5
                "
                value={texto}
                onInput={(e)=> setTexto(e.currentTarget.value)}
            ></textarea>
        </Pagina>
    )
}
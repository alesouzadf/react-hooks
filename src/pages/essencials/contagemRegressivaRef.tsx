import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import {useRef, useState } from "react";

export default function(){
    const quantidadeCaracteres = 400
    let [caracteresFaltantes, setCaracteresFaltantes] = useState(0)
    let refTexto = useRef<any>()
    let contador = useRef<any>()

    function executarContagem(){
        clearTimeout(contador.current)
        contador.current = setTimeout(()=>{
            let quantidadeCaracteresDigitados = refTexto.current.value.length
            setCaracteresFaltantes(quantidadeCaracteres - quantidadeCaracteresDigitados)
        },1000)
    }

    return (
        <Pagina titulo="Contagem de Caracteres" subtitulo="Mostra caracteres faltantes">
            <Display
                texto={"Digite um texto"} 
                textoComplementar={`Caracteres faltantes: ${caracteresFaltantes}`} 
            />
            <textarea
                ref={refTexto}
                onInput={executarContagem}
                className="
                    w-3/5 h-72 border-gray-500 bg-gray-500
                     text-white text-2xl rounded p-5
                "
            ></textarea>
        </Pagina>
    )
}
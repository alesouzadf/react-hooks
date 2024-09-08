import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function(){
    let [estado, setEstado] = useState(0)
    let referencia = useRef(0)

    function alteraReferencia(){
        referencia.current =  referencia.current +1
    }
    return (
        <Pagina titulo="UseEffect ou UseRef?" subtitulo="Entendendo as diferencas">
            <Display
                 texto={"Aperte o botão"}
                 textoComplementar={`Estado:${estado} | Referencia:${referencia.current}`} 
            />
            <Flex>
                <Botao 
                    redondo 
                    tamanho="2xl" 
                    cor="bg-sky-500" 
                    texto="S+" 
                    onClick={()=> setEstado(estado + 1)}
                />
                <Botao 
                    redondo
                    tamanho="2xl" 
                    cor="bg-pink-500" 
                    texto="R+"
                    onClick={()=> alteraReferencia()}
                />
            </Flex>
        </Pagina>
    )
}
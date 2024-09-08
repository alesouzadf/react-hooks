import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function(){
    let [n1, setNet1] = useState(0)
    let [n2, setNet2] = useState(0)
    let [maior, setMaior] = useState(0)

    function calculaMaior(){
        return n1>n2 ? n1 : n2
    }

    useEffect(()=> {
        setMaior(calculaMaior())
    }, [n1, n2])

    useEffect(()=> {
        if (maior > 5) alert('O numbero está ficando maior!')
    },[maior])

    return (
        <Pagina titulo="Maior Numero" subtitulo="com useEffect">
            <Display texto={`N1:${n1} | N2:${n2}`} textoComplementar={`Maior número: ${maior}`}/>
            <Flex gap={5}>
                <Botao
                    redondo
                    cor="bg-purple-500"
                    tamanho="2xl"
                    texto="N1"
                    onClick={()=> setNet1(n1 + 1)}
                />
                <Botao
                    redondo
                    cor="bg-yellow-400"
                    tamanho="2xl"
                    texto="N2"
                    onClick={()=> setNet2(n2 + 1)}
                />
            </Flex>
        </Pagina>
    )
}
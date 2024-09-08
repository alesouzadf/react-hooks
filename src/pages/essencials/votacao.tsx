import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Votacao(){
    let [dados, setDados] = useState({votosVerde: 0, votosRoxo:0})

    function votoRoxo(){
        setDados((dadosAtuais)=> {
            return {votosRoxo: dadosAtuais.votosRoxo +1,
                votosVerde: dadosAtuais.votosVerde
            }
        })
    }
    function votoVerde(){
        setDados((dadosAtuais)=> {
            return {votosRoxo: dadosAtuais.votosRoxo,
                votosVerde: dadosAtuais.votosVerde +1
            }
        })
    }
    function zeraVotos(){
        setDados((dadosAtuais)=> {
            return {votosRoxo: 0,
                votosVerde: 0
            }
        })
    }


    return (
        <Pagina titulo="Votacao" subtitulo="Usando estado com objeto">
            <Flex col center>
                <Display 
                    texto="Qual a melhor cor?"
                    textoComplementar={`Verde: ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}
                />
                <Flex gap={5}>
                    <Botao texto="Verde" cor="bg-green-500" onClick={votoVerde} redondo tamanho="2xl"/>
                    <Botao texto="Roxo" cor="bg-purple-500" onClick={votoRoxo} redondo tamanho="2xl"/>
                </Flex>
                <Botao texto="0" onClick={zeraVotos} cor="bg-gray-400" tamanho="lg"/>
            </Flex>
        </Pagina>
    )
}
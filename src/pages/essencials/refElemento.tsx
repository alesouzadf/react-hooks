import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRef } from "react";

export default function(){
    let referencia = useRef<any>()

    function apagar(){
        referencia.current.innerText = referencia.current.innerText.slice(0, -1)
    }

    return (
        <Pagina titulo="Utilizando referencia" subtitulo="Fazendo uso do useRef">
            <Flex col center>
                <p  ref={referencia}  
                    className="text-sky-500 m-4 text-4xl">Texto Legal!</p>
                <Botao 
                    redondo 
                    tamanho="2xl" 
                    cor="bg-purple-700" 
                    icone={<IconArrowLeft />}
                    onClick={()=> apagar()}
                />
            </Flex>
        </Pagina>
    )
}
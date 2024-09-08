import UseToogle from "@/data/hooks/useToogle";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconX } from "@tabler/icons-react";

export default function(){
    let [mostrar, toogleMostrar] = UseToogle(false)

    return (
        <Pagina titulo="Modal" subtitulo="Personalizando o hook useState para toggle">
            <Botao  texto="Abrir" cor="bg-yellow-500" onClick={toogleMostrar} />
            {mostrar ?(
                <Flex col center className={`
                    w-80 h-80 bg-gray-500 text-white
                    text-2xl p-4 m-4 rounded-md
                `}>
                    <Botao  
                        cor="bg-green-700" 
                        tamanho="xl"
                        onClick={toogleMostrar}
                        icone={<IconX />}
                    />
                    <h1 className="mt-5">Clique em X para sair</h1>
                </Flex>
            ):""}

        </Pagina>
    )
}
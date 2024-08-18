import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import IconMinus from "@tabler/icons"

export default function(){
    let count = 0;

    return(
        <Pagina titulo="Contador" subtitulo="Utiliza hook useState">
            <Display texto={count} /> 
            <Flex gap={5}>
                <Botao 
                    redondo
                    icone={<IconMinus size={40}/>}
                    tamanho="2xl"
                    cor="bg-blue-500"
                    onClick={()=> count--}
                />
            </Flex>
        </Pagina>
    )
}
import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";

export default function(){
    let tamanho = useTamanhoJanela()
    return(
        <Pagina titulo="Qual tamanho da página" subtitulo="Hook para descobrir tamanho da window">
            <Display texto={tamanho}/>
            <div className={`
                w-40 h-80
                sm:bg-blue-400
                md:bg-pink-400
                lg:bg-green-400
                xl:bg-purple-400
                2xl:bg-orange-400
            `} />
        </Pagina>
    )
}
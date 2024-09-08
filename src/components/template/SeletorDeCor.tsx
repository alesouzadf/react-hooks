import useTema from "@/data/hooks/useTema"
import Botao from "./Botao"
import Flex from "./Flex"

export default function SeletorDeCor(){
    let {cores} = useTema()
    let listCores = cores.map((cor: any)=>{
        return <Botao key={cor} cor={`bg-${cor}`}/>
    })

    return <Flex center gap={4} className={`absolute right  -3 top-20`}>
        {listCores}
    </Flex>  
}
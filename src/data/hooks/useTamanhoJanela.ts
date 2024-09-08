import { useEffect, useState } from "react"

function getTamanhoJanela(){
    if(typeof window !== 'undefined'){
       const {innerWidth: largura, innerHeight: altura} = window
       return {largura, altura}
    }
    return {largura: -1, altura: -1}
}

export default function useTamanhoJanela(){
    let [tamanhoJanela, setTamanhoJanela] = useState(getTamanhoJanela())

    useEffect(()=>{
        function tamanhoMudou(){
            setTamanhoJanela(getTamanhoJanela())
        }
        window.addEventListener("resize", tamanhoMudou)
        return ()=> window.removeEventListener("resize", tamanhoMudou)
    }, [])

    function entre(min: number, max: number){
        return (tamanhoJanela.largura >= min) && (tamanhoJanela.largura < max)
    }

    const dimensoes = {
        sm: entre(640, 768),
        md: entre(768, 1024),
        lg: entre(1024, 1280),
        xl: entre(1280, 1356),
        xl2: entre(1356, Number.MAX_VALUE)
    }

    const tamanhoVerdadeiro  = Object.entries(dimensoes).filter((el)=> el[1])

    return tamanhoVerdadeiro[0]?.[0]

}   
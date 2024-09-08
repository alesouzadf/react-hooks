import { useState } from "react";

export default function useStateValidado(valorInicial: any, funcaoValidado: (e: any)=> boolean){
    let [valor, setValor] = useState(valorInicial)
    let [validado, setValidado] = useState(false)

    function setValorValidado(novoValor: any){
        setValor(novoValor)
        setValidado(funcaoValidado(novoValor))
    }

    return [valor, validado, setValorValidado]
}
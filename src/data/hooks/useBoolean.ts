import { useState } from "react";

export default function UseBoolean(valor?: boolean){
    let [ativo, setAtivo] = useState(valor ?? false)

    function setAtivoTrue(){
        setAtivo(true)
    }
    function setAtivoFalse(){
        setAtivo(false)
    }

    const r:[boolean, ()=> void, ()=> void, ()=> void] = [ativo, function toogleAtivo() {
        setAtivo(!ativo)
    }, setAtivoTrue, setAtivoFalse]
    return r
}
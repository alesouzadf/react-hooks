import { useState } from "react";

export default function UseToogle(valor?: boolean){
    let [ativo, setAtivo] = useState(valor ?? false)

    const r:[boolean, ()=> void] = [ativo, function toogleAtivo() {
        setAtivo(!ativo)
    }]
    return r
}
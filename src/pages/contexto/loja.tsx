import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { createContext, useState } from "react";

export let Contexto = createContext({} as any)

export default function Loja(){
    let [carrinho, setCarrinho] = useState<any>([])
    let ctx = {
        carrinho, 
        setCarrinho,
        total(){
           const r =  carrinho.reduce((acc, produto) => acc + (+produto.preco * produto.quantidade), 0)
           return r
        }
    }

    return (
        <Contexto.Provider value={ctx}>
            <Pagina titulo="Loja" subtitulo="Compartilhando informações entre múltiplos componentes com contexto">
                <Flex col gap={4}>
                    <Flex gap={4}>
                        <AdicionarProduto/>
                        <FinalizarCompra/>
                    </Flex>
                    <Carrinho/>
                </Flex>
            </Pagina>
        </Contexto.Provider>
    )
}
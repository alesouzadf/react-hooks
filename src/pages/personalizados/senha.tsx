import InputFormatado from "@/components/formulario/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function(){
    function validaSenha(senha: any){
        let correspondente = senha.match(/[\d\S]{8,}/)
        console.log(correspondente)

        //conditional chainning
        return correspondente?.[0].length === senha.length
    }

    const [senha, senhaValida, setSenha] = useStateValidado("", validaSenha)

    let borda

    if(senha === ""){
        borda = "border-none"
    } else if(senhaValida) {
        borda = "border-green-600"
    } else if(!senhaValida){
        borda = "border-red-600"
    }

    return (
        <Pagina titulo="Validando senha" subtitulo="Utilizando hook personalizado">
            <InputFormatado 
                valor={senha}
                onInput={(e) => setSenha(e.target.value)}
                label="Senha"
                tipo="text"
                className={`${borda} border-4 w-16 flex`}    
            />
        </Pagina>
    )
}
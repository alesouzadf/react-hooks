import UseToogle from "@/data/hooks/useToogle";
import Flex from "./Flex";
import Titulo from "./Titulo";
import { IconPaint, IconX } from "@tabler/icons-react";
import SeletorDeCor from "./SeletorDeCor";

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
    let [mostraSeletor, toogleMostraSeletor] = UseToogle(false)
    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> :<div></div> }
            <div onClick={toogleMostraSeletor}>
                {mostraSeletor? <IconX/>: <IconPaint/>}
            </div>
            {mostraSeletor? <SeletorDeCor/> : ""}       
        </Flex>
    );
}

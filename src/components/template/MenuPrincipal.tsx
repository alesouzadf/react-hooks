import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";
import { IconAppWindow, IconArrowLeftRight, IconFaceMask, IconForms, IconLetterCase, IconLock, IconMathGreater, IconMenu, IconNumbers, IconRefreshAlert, IconSection, IconShoppingCart, IconWindow, IconX } from "@tabler/icons-react";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";
import { useEffect } from "react";
import UseBoolean from "@/data/hooks/useBoolean";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: false,
            itens: [
                {
                    titulo: "Contador",
                    url: "/essencials/contador",
                    tag: "useState",
                    icone: <IconNumbers/>
                },
                {
                    titulo: "Votacao",
                    url: "/essencials/votacao",
                    tag: "useStateComObjeto",
                    icone: <IconForms/>
                },
                {
                    titulo: "Consulta API",
                    url: "/essencials/consultaAPI",
                    tag: "useEffect",
                    icone: <IconArrowLeftRight />
                },
                {
                    titulo: "Maior número",
                    url: "/essencials/maior",
                    tag: "useEffect",
                    icone: <IconMathGreater />
                },
                {
                    titulo: "Caracteres Faltantes",
                    url: "/essencials/contagemRegressiva",
                    tag: "useEffect",
                    icone: <IconLetterCase />
                },
                {
                    titulo: "StateVsRef",
                    url: "/essencials/stateVsRef",
                    tag: "useRef",
                    icone: <IconRefreshAlert />
                },
                {
                    titulo: "Referenciando Elemento",
                    url: "/essencials/refElemento",
                    tag: "useRef",
                    icone: <IconSection />
                },
                {
                    titulo: "Contagem Regressiva",
                    url: "/essencials/contagemRegressivaRef",
                    tag: "useRef",
                    icone: <IconLetterCase />
                }
            ]
        },
        {
            titulo: "Personalizados",
            aberta: true,
            itens: [
                {
                    titulo: "Modal",
                    url: "/personalizados/modal",
                    tag: "hook personalizado",
                    icone: <IconAppWindow />
                },
                {
                    titulo: "Tamanho da Janela",
                    url: "/personalizados/tamanhoJanela",
                    tag: "hook personalizado",
                    icone: <IconWindow />
                },
                {
                    titulo: "Valida Senha",
                    url: "/personalizados/senha",
                    tag: "hook personalizado",
                    icone: <IconLock />
                }
            ]
        },     
        {
            titulo: "Contexto",
            aberta: true,
            itens: [
                {
                    titulo: "Loja",
                    url: "/contexto/loja",
                    tag: "useContext",
                    icone: <IconShoppingCart />
                }
            ]
        }     
    ];
    const [mini, miniToogle, setAtivoTrue] = UseBoolean(false);
    let tamanho = useTamanhoJanela()

    useEffect(() => {
        if(tamanho === 'sm' || tamanho === 'md'){
            setAtivoTrue()
        }
    }, [tamanho])

    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={miniToogle}>
                    {mini ?<IconX/> :<IconMenu/>}
                </div> 
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}

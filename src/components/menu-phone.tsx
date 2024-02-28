import { useEffect, useState } from "react";
import { RiCloseFill, RiFileVideoLine, RiHome6Line, RiInformation2Line, RiMenu3Fill, RiStoreLine, RiTeamLine } from "./icones_ts";
import Link from "next/link";

export default function Menu(){
    const [open, setOpen] = useState(false)
    return(
        <div className="w-full h-full flex items-center justify-center relative">
            <button onClick={() => setOpen(true)}>
                <RiMenu3Fill className = 'w-6 h-6 text-black' />
            </button>
            <div className={`fixed top-[0] ${open ? 'right-0' : 'right-[-90vw]'} w-[90vw] bg-white z-10 h-[100vh] duration-300 ease-in-out`}>
                <div className="p-4 flex justify-between items-center">
                    <div className="font-bold text-xl">Menu</div>
                    <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full border flex items-center justify-center"><RiCloseFill className = "w-6 h-6 text-black" /></button>
                </div>
                <ul className="text-left">
                    <NavLi 
                        icon = {<RiHome6Line className=" w-7 h-7" />}
                        name ={'Accueil'} url="/" 
                        onClick={() => setOpen(false)}
                        />
                    <NavLi 
                        icon={<RiStoreLine className="w-7 h-7" />}
                        name={'Boutique'} url="/boutique" 
                        onClick={() => setOpen(false)}
                        />
                    <NavLi 
                        icon={<RiFileVideoLine className="w-7 h-7" />}
                        name={'Tutoriels'} url="/tutoriel" 
                        onClick={() => setOpen(false)}
                        />
                    <NavLi 
                        icon={<RiTeamLine className="w-7 h-7" />}
                        name={'Coiffeuses'} url="/coiffeuses" 
                        onClick={() => setOpen(false)}
                        />
                    <NavLi 
                        icon={<RiInformation2Line className="w-7 h-7" />}
                        name={'A Propos'} url="/about" 
                        onClick={() => setOpen(false)}
                        />
                </ul>
            </div>
        </div>
    )
}

type NavLiProp = {
    icon : any,
    name : string,
    url : string, 
    onClick? : () => void
}

function NavLi({
    icon,
    name, 
    url = '/',
    onClick
} : NavLiProp){
    const [active, setActive] = useState(false)
    useEffect(() => {
        if(location.pathname === url) setActive(true)
        else setActive(false)
    })

    return(
        <li className={`py-3 px-6 active:bg-slate-100 text-slate-900 ${active ? 'bg-slate-100' : 'bg-white'} `}><Link href={url} onClick={onClick} className="flex gap-4 items-center">{icon} {name}</Link></li>
    )
}
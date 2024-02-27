'use client'
import { useEffect, useState } from "react";
import BoutonFace from "./bottonFacebook";
import Menu from "./menu-phone";
import { NavItems } from "./navItem";
import Link from "next/link";

export default function Header(){
    
    const [state, setState] = useState({
        position : 0,
        sens : 0
    })
    const [position, setPosition] = useState(0)


    useEffect(() => {
        if(state.sens < 0){
            setPosition(-72)
        } else {
            setPosition(0)
        }

        window.addEventListener('scroll', () => {
            setState({ sens : state.position - scrollY, position : scrollY})
        })
    }, [state])

    return(
        <div id="navigation" className={`w-full h-max fixed z-50 transition-all duration-300 top-[0px]`} style={{ top : `${position}px`}}>
            <nav className={`h-[72px] bg-white flex items-center pl-4 pr-0 lg:px-6`}>
                <div className="flex-1">
                    <Link href="/" className="flex h-6 w-fit">
                        <img src="/Name.png" />
                    </Link>
                </div>
                <div className="lg:flex flex-1 justify-center lg:flex-[2] hidden">
                    <NavItems name = 'Boutique' url='/boutique' />
                    <NavItems name = 'Tutoriels' url='/tutoriel' />
                    <NavItems name = 'Coiffeuses' url='/coiffeuses' />
                    <NavItems name = 'A Propos' url='/about' />
                </div>
                <div className="flex-1 flex justify-end">
                    <BoutonFace  />
                </div>
                <div className="h-full aspect-square flex items-center justify-center lg:hidden">
                    <Menu />
                </div>
            </nav>
        </div>
    )
}
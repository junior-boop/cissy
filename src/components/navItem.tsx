'use client'

import { useEffect, useState } from "react"

type navItemsProps = {
    name : string,
    url : string
}
export function NavItems({name, url = '/'} : navItemsProps){

    const [active, setActive] = useState(false)

    useEffect(() => {
        if(location.pathname === url){
            setActive(true)
        } else {
            setActive(false)
        }
    }, [active])

    return(
        <a href={url} className={`px-3 ${!active ? 'text-black': 'text-sky-600 font-semibold'}`}>
            {name}
        </a>
    )
}
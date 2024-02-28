'use client'

import { useSearchParams,  } from "next/navigation";
import { useRouter } from 'next/router'

export default function BtnAchat(){
    const searchParams = useSearchParams();
 
    function handleClick() {
      location.search = '?achat=true'
    }
    return(
        <button onClick={handleClick} className=" mb-8 px-4 py-4 font-semibold bg-black text-white w-full">
            Acheter Maintenant
        </button>
    )
}
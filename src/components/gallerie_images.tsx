'use client'
import { useState } from "react"


interface gallerie_image_props {
    images : Array<string>
}

export default function Gallerie_img ({ images } : gallerie_image_props){
    
    const [position, setPosition] = useState(0)

    return(
        <div className="flex-1 ">
            <div className="w-full lg:w-full aspect-square bg-cover bg-center rounded-sm mb-3 overflow-hidden border">
                <img src={images && images[position]} alt="" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="flex flex-wrap gap-3">
                {
                    images 
                    && images.map(
                        (el, key) => 
                        (<button onClick={() => setPosition(key)} className={`w-[23%] aspect-square rounded-xl border ${position === key ? 'border-[3px] border-red-600' : 'border'}`} key={key}>
                            <img src={el} alt="" className="w-full h-full aspect-square object-cover" />
                        </button>))
                }
            </div>
        </div>
    )
}
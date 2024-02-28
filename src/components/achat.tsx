'use client'

import { useEffect, useState } from "react"
import Formulaire from "./formulaire"
import { IcBaselineMinus, IcBaselinePlus, RiCloseFill } from "./icones_ts"

export default function Achat({data} :any){
    const [visible, setVisible] = useState(false)
    const [counter, setCounter] = useState(1)
    const [newData, setNewData] = useState({...data, amount : 0})
    
    const handleClose = () => {
        const locat = location.pathname
        const origin = location.origin
        const newSet = origin + locat

        location.href = newSet
    }


    useEffect(() => {
        const search = new URLSearchParams(location.search).get('achat')
        if(search !== null)  setVisible(true)
        else setVisible(false)
    }, [])

    useEffect (() => {
        if(counter === 0) setCounter(1)
        setNewData({ ...data, amount : counter * data.price})
    }, [counter])

    const Prices = new Intl.NumberFormat('fr-Fr', { style : 'currency', currency : 'XAF'}).format(newData.amount)
    return(
        <section className={`bg-white w-full fixed bottom-0 left-0 h-[98dvh] border-t z-[1000] duration-300 transition-all ${visible ? 'translate-y-[0]' : 'translate-y-[100dvh] lg:translate-y-[90dvh]'}`}>
            <main className="relative">
                <button onClick={handleClose} className="absolute top-[-28px] right-0 px-3 py-3 bg-red-100 text-red-700 font-bold rounded-full">
                    <RiCloseFill className="w-6 h-6" />
                </button>
                <div className="mt-[21px] lg:mt-0">Votre commande</div>
                <div className="flex flex-col lg:flex-row  items-center justify-between border rounded-md px-5 py-4">
                    <div >
                        <div className="text-sm text-center lg:text-left ">{data.name} - Nombre : {counter <= 9 ? `0${counter}` : counter}</div>
                        <div className="text-xl text-center mx-auto lg:mx-0 mb-5 lg:text-left  w-[70%] lg:w-auto">Total : <strong>{Prices}</strong></div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <button onClick={() => setCounter(counter -1)} className="flex w-9 lg:w-[48px] aspect-square items-center justify-center rounded-full border text-lg font-semibold">
                        <IcBaselineMinus />
                        </button>
                        <div className="w-[72px] aspect-square rounded-full flex items-center justify-center font-semibold text-3xl bg-slate-100">{counter}</div>
                        <button onClick={() => setCounter(counter +1)} className="flex w-9 lg:w-[48px] aspect-square items-center justify-center rounded-full border text-lg font-semibold">
                        <IcBaselinePlus />
                        </button>
                    </div>
                </div>
                <div className="mt-4 mb-[-12px]">Validation de la commande</div>
                <Formulaire produit= {newData} />
            </main>
        </section>
    )
}
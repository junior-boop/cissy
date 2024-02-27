'use client'

import { TitleBar } from "@/components/TitreBar";
import CoiffeusesItems from "@/components/coiffeusesItems";
import Container from "@/components/container";
import Sociaux from "@/components/sociaux";
import { useState } from "react";

export default function Coiffeuses(){
    const [data, setData] = useState([])
    return(
        <>  
        <div className='h-[72px]'></div>
            <div className="min-height" style={{ minHeight : 'calc(100vh - 72px)'}}>
                <section className="py-[64px]">
                    <Container>
                        <div className="px-4 lg:px-0">
                            <div className="text-6xl font-bold">Coiffeuses.</div>
                            <div className="text-6xl">Prennez contact avec nos professionnelles.</div>
                        </div>
                    </Container>
                </section>
                <section className="bg-white py-[32px]">
                    <Container>
                        <TitleBar titre={"Nos professionnelles"} />
                        <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-4">
                            {
                                data.map( (el, key) => <CoiffeusesItems data = {el} key={key} />)
                            }
                        </div>
                        
                    </Container>
                </section>
            </div>
            <Container>
                <TitleBar titre={"Suivez nous sur les réseaux"} />
                <Sociaux classe = "line-height-1"/>
            </Container>
        </>
    )
}
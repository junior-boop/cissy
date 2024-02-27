import { TitleBar } from "@/components/TitreBar";
import Videos from "@/components/Videos";
import Container from "@/components/container";
import Sociaux from "@/components/sociaux";
import { useState } from "react";

export default function Tutoriel (){

    const [data, setData] = useState([])

    return(
        <>
            <div className="min-height">
                <section className="py-[64px]">
                    <Container>
                        <div className="px-4 lg:px-0">
                            <div className="text-6xl font-bold">Tutoriel.</div>
                            <div className="text-6xl">Faites-le vous même.</div>
                        </div>
                    </Container>
                </section>
                <section className="bg-white py-[32px]">
                    <Container>
                        <TitleBar titre={"Nos vidéos"} />
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4 px-4 lg:px-0">
                            {
                                data.map( (el, key) => <Videos data = {el} key={key} />)
                            }
                        </div>
                    </Container>
                </section>
            </div>
            <Container>
                <TitleBar titre={"Suivez nous sur les réseaux"} />
                <Sociaux 
                    classe = "line-height-1"
                />
            </Container>
        </>
    )
}
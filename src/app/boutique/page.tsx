import Produits from "@/components/Produits"
import { TitleBar } from "@/components/TitreBar"
import Container from "@/components/container"
import FilterComponent from "@/components/filtre"
import Sociaux from "@/components/sociaux"


interface produit {
    id : string,
    description : string,
    price : string, 
    categorie : string,
    createdAt : number,
    images : Array<string>,
    name : string,
    promotion : string
}

async function  getData() {
    const _url = process.env.URL
    const response = await fetch(_url + '/api/boutique', { cache : 'no-cache'})
    const data = await response.json()
    return data
}

export default async function Boutique (){

    const data : Array<produit> = await getData()
    return (
        <>
            <section className="py-[64px]">
                <Container>
                <div className="px-4 lg:px-0">
                    <div className="text-6xl font-bold">Boutique.</div>
                    <div className="text-6xl">Achetez auprès des créateurs.</div>
                </div>
                </Container>
            </section>
            <section className="bg-white">
                <Container>
                    <FilterComponent />
                    <div>
                        <div className="flex gap-3 items-center mb-4 flex-col lg:flex-row px-4 lg:px-0" >
                            <input type="text" name="" id="" className="flex-1 border px-4 py-2 w-full" placeholder="Entrez le code promotionnel" />
                            <button className="px-5 py-1 bg-sky-700 rounded-lg text-white w-full lg:w-max">Recheche</button>
                        </div>
                    </div>
                    <TitleBar titre = "Liste" />
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[21px] gap-3 w-[92vw] lg:w-full mt-0 mx-auto mb-28">
                            {
                                data.map((el, key) => <Produits data = {el}  key={key}/>)
                            }
                        </div>
                    </div>
                    <TitleBar titre={"Suivez nous sur les réseaux"} />
                    <Sociaux 
                        classe = "line-height-1"
                    />
                </Container>
            </section>
        </>
    )
}
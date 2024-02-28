import Achat from "@/components/achat"
import BtnAchat from "@/components/btnAchat"
import Container from "@/components/container"
import Gallerie_img from "@/components/gallerie_images"
import Sociaux from "@/components/sociaux"

async function getData(params : object) {
    const _url = process.env.URL
    const response = await fetch(_url + '/api/boutique') 
    const data = await response.json()

    const item = data.filter(el => el.id === params.id)
    const value = {...item[0]}
    value.price = item[0]?.price === undefined ?  0 : parseInt(item[0]?.price)
    const Price = new Intl.NumberFormat('fr-Fr', {style : 'currency', currency : 'XAF'}).format(value?.price)


    return {...value, Price}
}

export default async function BoutiqueItem({params}){

    const value = await getData(params)

    return(
        <>
            <div className="h-[72px]"></div>
            <section className="screen bg-white">
                    <Container>
                        <div className="h-[56px] flex  items-center ">
                            <div>
                                <a href="/boutique" className="flex items-center gap-4">
                                    <div className="w-[38px] aspect-square flex items-center justify-center rounded-full bg-white ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"/></svg>
                                    </div>
                                    <div>Retour</div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-6 px-4 lg:px-0">
                            <div className="flex flex-col lg:flex-row gap-9 ">
                                <Gallerie_img images = {value?.images} />
                                <div className="w-full lg:w-[500px]">
                                    <div className="text-4xl font-bold ">{value?.name}</div>
                                    <div className="mb-[-5px] text-slate-800 mt-4">Categorie</div>
                                    <div className="text-2xl font-semibold uppercase">{value?.categorie}</div>

                                    <div className="mb-[-5px] text-slate-800 mt-4">Prix</div>
                                    <div className="text-2xl font-semibold uppercase">{value?.Price}</div>

                                    <div className="mt-8 px-4 py-4 bg-slate-100">
                                        <div className="text-xl font-semibold mb-2"> Information Supplementaire</div>
                                        <div className="mb-[-5px]">Taille</div>
                                        <div className="text-lg font-semibold">30 centimetres</div>
                                        <div className="mb-[-5px]">Coleur</div>
                                        <div className="text-lg font-semibold">Noires</div>

                                    </div>
                                    <BtnAchat />

                                    <div className="mb-[-5px] text-slate-800 mt-4">Description</div>
                                    <pre className="pre text-2xl">{value?.description}</pre>
                                    
                                </div>
                            </div>
                            <div>
                                <div className="font-bold mt-5  text-2xl">Effectuer L{"'"}achat</div>
                            </div>
                            
                        </div>
                    </Container>
            </section>
            <section className="mt-9">
                    <Container>
                        <Sociaux
                            classe = "line-height-1"
                        />
                    </Container>
            </section>
            <Achat data = {value} />
        </>
    )
}



interface ProductItemProps {
    images : Array<string>,
    name : string,
    id : string,
    price : string,
    description : string,
}

interface Product {
    data : ProductItemProps
}
export default function Produits({data}: Product){

    const price = parseInt(data.price)

    const Prices = Intl.NumberFormat('fr-FR', {style : 'currency', currency : 'xaf'}).format(price)
    const short = data.description.length > 50 ? `${data.description.substring(0, 49)}...` : data.description
    return(
        <div className= {`h-auto lg:h-[600px]  lg:min-w-[346px] lg:w-[100%] rounded-xl lg:rounded-[2rem] p-3 lg:p-0`}>
            <div className="flex flex-row gap-4 lg:gap-0 lg:flex-col  h-full">
                <div className={`lg:bg-slate-500 w-[40%] lg:w-full   aspect-square rounded-sm lg:rounded-2xl overflow-hidden border`}>
                    <img src={data.images[0]} alt="" className="w-full aspect-square object-cover" />
                </div>
                <div className="flex-1 pt-0 lg:pt-4 w-[60%]">
                    <div className="line-height-1 text-[18px] lg:text-[20px] font-semibold mb-4">{data.name}</div>
                    <pre className="pre hidden lg:block" style={{whiteSpace : 'pre-line', lineHeight : 1, fontFamily : 'Atkinson Hyperlegible', padding : 0, marginBottom : '16px'}}>
                        {short}
                    </pre>
                   <div className="flex flex-col lg:flex-row justify-between">
                        <div>
                            <div className="line-height-1 text-[18px] font-semibold">Prix</div>
                            <div className="text-[18px]  lg:text-[24px] font-bold">{Prices}</div>
                        </div>
                        <div className="flex justify-start items-center h-max lg:justify-end w-full">
                            <a href={`/boutique/${data.id}`}  className="px-5 py-1 lg:px-5 lg:py-2 bg-sky-100 w-max  lg:w-max rounded-full text-sky-800">Acheter</a>
                        </div>
                   </div>
                </div>
               
            </div>
        </div>
    )
}

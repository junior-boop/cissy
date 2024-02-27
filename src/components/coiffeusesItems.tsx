type Data = {
    name : string,
    ville : string,
    quartier : string,
    tel : string,
    image : string
}
interface CoiffeusesItemsProps {
    data : Data
}
export default function CoiffeusesItems({data} : CoiffeusesItemsProps){
    return(
        <div>

            <div className="w-full aspect-square overflow-hidden bg-slate-200 rounded-xl border">
                <img src={data.image} alt="" className="w-full h-full object-cover"/>
            </div>

            <div className="mt-2">
                <div className="text-xl font-bold">{data.name}</div>
                <div className="mt-[-5px]">Ville : {data.ville}</div>
                <div className="mt-[-5px]">Quartier : {data.quartier}</div>
                <div className="mt-[-5px]">Téléphone : {data.tel}</div>
            </div>
        </div>
    )
}
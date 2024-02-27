"use client"

type Data ={
    url : string,
    image : string,
    titre : string,
    duree : string
}
interface VideosProps {
    data : Data
}
export default function Videos({ data } : VideosProps){
    return(
        <a className="block" href={data.url}>
            <div className="w-full aspect-video rounded-sm bg-slate-200">
                <img src={data.image} alt="" />
            </div>
            <div className="mt-2 font-bold">{data.titre}</div>
            <div className="text-base ">Durée : {data.duree} minutes</div>
        </a>
    )
}
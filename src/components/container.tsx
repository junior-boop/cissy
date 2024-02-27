'use client'
export default function Container({children} : any){
    return(
        <div className="w-full md:w-[95%] lg:w-[70vmax] xl:w-[1080px] my-0 mx-auto">
            {children}
        </div>
    )
}
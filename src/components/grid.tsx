'use client'
// @ts-check
import { FlecheRight } from "./icones"


/**
 * 
 * @param {{children?:any, id?:string, data?:string}} param0 
 * @returns 
 */

interface gridProps {children?:any, id?:string, data?:string}
export default function Grid({children, id, data = ''} : gridProps){
    return(
        <div id = {id} className="block md:grid grid-cols-12 gap-[21px] mb-28  data-[data=social]:grid data-[data=social]:grid-cols-4 lg:data-[data=social]:grid-cols-12 data-[data=social]:px-6 lg:data-[data=social]:px-0 data-[data=social]:gap-5"  data-data = {data} >
            {children}
        </div>
    )
}

export  function Gridtemplate_3({children} : any){
    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-[21px] gap-3 w-[92vw] lg:w-full mt-0 mx-auto mb-28">
            {children}
        </div>
    )
}


/**
 * 
 * @param {{children? : any}} param0 
 * @returns {JSX.Element}
 */
export function ProductPresentation({children} : any){
    return(
        <div className="w-full relative mb-28">
            <div className="relative w-[100vw] overflow-x-auto overflow-y-hidden md:overscroll-x-none md:overscroll-y-none lg:w-full left-[-0px] lg:relative">
                <div className="flex gap-[21px] w-max px-6 lg:px-0 pb-4">
                    {children}
                </div>
            </div>
        </div>
    )
}


/**
 * 
 * @param {{span?: string|number, image? : boolean, children? : any, btn? : boolean, long? : boolean, notBlack? : boolean, classe?: string, url?: string, id?:string }} param0 
 * @returns 
 */

interface GridElementProps {
    span?: string|number, 
    image? : boolean, 
    children? : any, 
    btn? : boolean, 
    long? : boolean, 
    notBlack? : boolean, 
    classe?: string, 
    url?: string, 
    id?:string 
}
export function GridElement({span, image, children, btn, long, notBlack, classe = '', url = '/', id } : GridElementProps) {
    return(
        <div 
            id={id}
            className={`${classe} flex flex-col justify-end p-6 rounded-[2rem] mt-0 mx-auto mb-6 lg:m-0  bg-center bg-no-repeat bg-cover bg-[#f8f8f8] relative overflow-hidden z-[4] w-[90%] md:w-full h-[450px]  col-span-${span} ${long ? 'h-[600px]': 'h-[500px]'}`}
            >
            <div className="relative z-[4] lg:h-[77%] ">
                {children}
            </div>
            {
                children && image && !notBlack
                ? (<div className="absolute z-[2] w-full h-full bg-[#0001] left-0 top-0"></div>)
                : null
            }
            <div className="h-[49.22px] relative z-[4] flex items-center justify-end">
                {
                    btn 
                    ? (<a href = {url}>
                    <button className="flex items-center justify-center p-0 w-[2.5rem] aspect-square rounded-full border border-transparent text-[#e52087] cursor-pointer bg-[#FDEDF5] transition-all duration-300 ease-in-out">
                        <FlecheRight className = "w-[1.5rem]"/>
                    </button>
                    </a>)
                    : null
                }
            </div>
        </div>
    )
}

/**
 * 
 * @param {{children?:any, classe?:string}} param0 
 * @returns 
 */
interface productItemProps {children?:any, classe?:string}
export function ProductItem({children, classe = ''} : productItemProps) {
    return(
        <div className= {`aspect-[9/16] lg:aspect-auto lg:h-[600px] min-w-[75vw] lg:min-w-[346px] lg:w-[100%] bg-slate-100 rounded-[2rem] p-6 ${classe}`}>
            {children}
        </div>
    )
}

/**
 * 
 * @param {{icon?:any, url?: string}} param0 
 * @returns {JSX.Element}
 */
export function SociauxItem({ icon, url = '/' } : {icon?:any, url?: string}) {
    return(
        <a href={url}
            className='col-span-2 h-[200px] flex flex-col items-center justify-center p-6 rounded-[1.2rem] bg-center bg-no-repeat bg-cover bg-[#f8f8f8] relative cursor-pointer text-black'
        >
            <div>
                {icon}
            </div>
        </a>
    )
}

/**
 * 
 * @param {{icon?:any, url?:string, children?:any, classe?: string}} param0 
 * @returns {JSX.Element}
 */
export function Partenaire({ icon, url = '/', children, classe } : {icon?:any, url?:string, children?:any, classe?: string}) {
    return(
        <a href={url}
            className="col-span-4 h-[200px] flex items-center justify-center p-6 rounded-[1.2rem] bg-center bg-no-repeat bg-cover bg-[#f8f8f8] relative mb-16 cursor-pointer text-black decoration-transparent"
        >
            <div className={`${classe} w-[60%] font-semibold`}>
                {children}
            </div>
            <div>
                {icon}
            </div>
            
        </a>
    )
}


import Container from "./container";
import { RiArrowRightSLine } from "./icones_ts";


type BanniereProps = {
    image : string
}

export default function Banniere({ image } : BanniereProps ){
    return(
        <section className = "w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(${image})`, height : "calc(100vh - 72px)"}}>
            <div className= "flex  lg:h-[5vmin]  w-full bg-[#fff6] backdrop-blur-[10px]">
                <Container>
                    <div className="flex flex-col lg:flex-row lg:items-center h-full w-full justify-center text-base px-4 py-2">
                        Pour acheter nos gammes de mèche à tressé suivez
                        <div className="flex items- justify-end">
                        <span className="text-[#018AEC] ml-3 flex items-center">la flèche</span> 
                        <div 
                            className="bg-white flex w-[30px] aspect-square rounded-[50%] items-center justify-center ml-3"
                            >
                            <RiArrowRightSLine 
                                className = "w-4 lg:w-[1.7vmin] text-[#018AEC]" />    
                        </div> 
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div 
                    className="flex flex-col justify-between"
                    style = {{height : 'calc(100vh - 16vmin)'}}>
                    <div className= "p-[5vmin] flex flex-col  items-start lg:items-center ">
                        <div className='m-0 font-bold text-white' style = {{ lineHeight : 1, fontSize : 'calc(56px + 3vmin)'}}>Mes Tresses</div>
                        <div className='m-0 font-bold text-white' style = {{ lineHeight : 1, fontSize : 'calc(56px + 3vmin)'}}>Ma liberté</div>
                        <div className = 'font-bold text-white' style={{fontSize : 'calc(18px + 1vmin)'}}>Découvrez la nouvelle gamme Spring Twist</div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

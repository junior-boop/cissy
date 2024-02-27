import './style.css'
import Container from "@/components/container";
import Sociaux from "@/components/sociaux";

export default function About (){
    const heroImage = '/product_1.jpg',
    title="About Me",
	description="Lorem ipsum dolor sit amet",
	pubDate= new Date('August 08 2021') 

    return(
        <>
        <div className='h-[72px]'></div>
            <article className="mb-[64px]">
                <div className="w-full height relative flex justify-center">
                    {heroImage && <img className="w-full h-full object-cover rounded-none" src={heroImage} alt="" />}
                    <div className="absolute top-[30px] z-[2] w-[20%] aspect-square lg:w-[72px] ">
                        <img src={'/logo.png'} alt="" className="w-"/>
                    </div>
                    <div className=" absolute top-0 left-0 right-0 w-full h-full bg-[#0004] flex items-end justify-center pb-[64px]">
                        <div className="w-[90%] lg:w-[800px] text-white"> <div className=" text-4xl lg:text-7xl font-bold text-center">Cissy{"'"}s Hair</div> <div className="line-height-1 text-6xl lg:text-9xl font-extrabold text-center">la touche qui change tout</div></div>
                    </div>
                </div>
                <main>
                <div className="prose">
                    <div className="title">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <hr />
                    </div>
                    <p>
                        Bienvenue chez Cissy{"'"}s Hair l{"'"}épicentre de la beauté africaine!!! Notre entreprise est née de la passion pour la mise en avant des coiffures africaines et le désir de redéfinir la beauté.
                    </p>

                    <p>
                        Depuis nos débuts modestes, Cissy{"'"}s Hair s{"'"}est hissé au sommet de l{"'"}industrie des mèches, devenant une référence incontournable pour celles qui aspirent à une coiffure africaine éblouissante. Notre engagement envers la qualité exceptionnelle transparaît dans chaque produit que nous proposons, méticuleusement sélectionnés.
                    </p>

                    <p>
                        Nos mèches sont conçues pour célébrer la diversité de la beauté naturelle, offrant des options variées qui s{"'"}adaptent à tous les styles et préférences. Chaque brin témoigne de notre engagement envers l{"'"}excellence, alliant innovation et savoir-faire.
                    </p>

                    <p>
                        Notre parcours a été marqué par des moments de croissance, d{"'"}inspiration et de connexion avec notre communautéde passionnés de beauté. Grâce à nos clients dévoués, nous avons évolué et élargi notre gamme de produits, restant toujours à l{"'"}avant-garde des tendances capillaires.
                    </p>

                    <p>
                        Rejoignez-nous dans cette aventure capillaire exceptionnelle.
                        Transformez votre look, élevez votre confiance avec Cissy{"'"}s Hair
                    </p>
                </div>
                </main>
            </article>
            <Container>
                <Sociaux />
            </Container>
        </>
    )
}
'use client'
import Banniere from '@/components/banniere';
import './index.css'
import { TitleBar } from '@/components/TitreBar';
import Container from '@/components/container';
import Grid, { GridElement, ProductItem, ProductPresentation } from '@/components/grid';
import { RiPlayFill } from '@/components/icones';
import Sociaux from '@/components/sociaux';
export default function Home() {
  return (
    <>
    <div className='h-[72px]'></div>
      <Banniere image = {'/fond.png'} />
		<main>
			<div className="text-4xl" style = {{padding : "4rem 0", width : "100%", textAlign : "center", fontWeight : "normal"}}>
				Les mèches à tresser selon 
          <span>
              <img src='/Name.png'  alt="cissy" />
          </span>
			</div>
			<div className="text-xl p-6 bg-[#F7F1FE] mb-7 rounded-xl ">
			Chez Cissy{"'"}s Hair, nous sommes passionnés par les cheveux et nous nous engageons à fournir à nos clients les meilleures mèches à tresser, crochet braids, perruques (lace Wig, lace frontal) disponibles sur le marché. Que vous recherchiez des mèches en fibre kanekalon ou en cheveux naturels, nous avons une large gamme de produits pour répondre à vos besoins et à votre budget.
            </div>
		</main>
		<Container>
			<TitleBar titre={"Toutes nos gammes de Produits"} btn url={'/boutique'}/>
			<Grid id={'rien'}>
				<GridElement classe='col-span-12 bg-[url(/image_2.png)]' btn>
					<div className="flex flex-col items-start justify-end py-0 px-4 lg:px-6 max-w-[70%] h-full">
						<span className="line-height-1 font-bold mb-[7px] text-[24px] lg:text-[36px] text-white">Deux beautés</span>
						<span 
							className="element1 block font-extrabold text-white text-[2.5em] lg:text-[4.5em] w-full"
						> 

						<div>Spring Twist</div>
						<div>Passion Twist</div>
						</span>
					</div>
				</GridElement>
				<GridElement classe='col-span-8 bg-[url(/image_1.jpg)]' ></GridElement>
				<GridElement classe="col-span-4" btn url='/meches/spanish Cours' >
					<div className="ligne2">
						<span>La simplicité</span>
						<span className="text-[64px]"> Spanish Cours
						</span>
					</div>
				</GridElement>
				<GridElement classe='col-span-6 bg-[url(/image_7.png)]' image>
					<div className="ligne3">
						<span> 
							French Baids
						</span>
					</div>
				</GridElement>
				<GridElement classe='col-span-6 bg-[url(/image_9.png)]' image>
					<div className="ligne4">
						<span> 
							Straight Braiding Hair
						</span>
					</div>
				</GridElement>
			</Grid>
			<TitleBar titre={"Nous vous Accompagnons "} />
			<Grid>
				<GridElement classe='col-span-4' btn url={'/tutoriel'}>
					<div className="ligne2">
						<span>Avec nos tutoriels</span>
						<span className="text-[58px]">Faites le vous même</span>
					</div>
				</GridElement>
				<GridElement classe='col-span-8 bg-[url(/tuto_femme.avif)]' image>
					<div className = 'flex items-center justify-center h-full'>
						<button className="w-[100px] aspect-square bg-slate-50 flex items-center justify-center rounded-full">
							<RiPlayFill className = "w-[24px] h-[24px]"/>
						</button>
					</div>
				</GridElement>
				<GridElement classe='col-span-12 bg-[url(/carte.png)]' btn image notBlack url='/contacts'>
					<div className="proximite">
						<span> Notre Proximite </span>
					</div>
				</GridElement>
				<GridElement classe='col-span-4' btn long url='/coiffeuses'>
					<div className="ligne5">
						<span>Prennez contact avec</span>
						<span> Nos Coiffeuses Partenaires</span>
					</div>
				</GridElement>
				<GridElement classe='col-span-4 bg-[url(/expert_1.jpg)]' long></GridElement>
				<GridElement classe='col-span-4 bg-[url(/expert_2.jpg)]' long></GridElement>
			</Grid>
			

			<TitleBar titre={"Suivez nous sur les réseaux"} />
			<Sociaux
				classe = "line-height-1"
			/>
		</Container>
    </>
  );
}

// <TitleBar titre={"Notre Boutique"} btn url='/boutique' />
// 			<ProductPresentation>
// 				<ProductItem />
// 				<ProductItem />
// 				<ProductItem />
// 			</ProductPresentation>
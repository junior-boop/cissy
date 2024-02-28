/**
 * 
 * @returns {JSX.Element}
 */
export default function FilterComponent(){
    return(
       <div className="my-8 overflow-x-auto overflow-y-hidden lg:overflow-x-hidden lg:overflow-y-hidden py-4">
                <div className="flex gap-2 w-max px-4 lg:px-0">
                <Categorie categorie='Mèches' href = '#meches'  />
                <Categorie categorie='Soins de peau' href = '#peau'/>
                <Categorie categorie='Produits Capillaires' href = '#capillaires'/>
                <Categorie categorie='Compléments Alimentaires' href = '#aliments' />
                <Categorie categorie='Accessoires' href = '#accessoires' />
            </div>
       </div>
    )
}


interface CategorieProps {
    categorie : string,
    href : string
}

function Categorie({categorie, href} : CategorieProps){
    return(
        <a href = {href} className="px-6 py-2 border">
            {categorie}
        </a>
    )
}
async function getData() {
        const response = await fetch(_url.origin + '/api/boutique.json/') 
    const data = await response.json()

    const item = data.filter(el => el.id === id)



    const value = {...item[0]}
    value.price = item[0]?.price === undefined ?  0 : parseInt(item[0]?.price)

    const Price = new Intl.NumberFormat('fr-Fr', {style : 'currency', currency : 'XAF'}).format(value?.price)
}

export default async function BoutiqueItem(){
    
    return(

    )
}
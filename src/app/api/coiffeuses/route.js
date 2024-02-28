import { collection, getDocs } from "firebase/firestore"
import { db, storage } from "../../../../firebase/files"


export const GET = async (request) => {

    async function getData() {
        const refDocs = collection(db, "coiffeuses")
        const DataStore = await getDocs(refDocs)
        let arr = []
    
        if(!DataStore.empty) {
            DataStore.forEach(Element => {
                arr.push({
                    id : Element.id,
                    ...Element.data()
                })
            })
        }
    
        return arr
    }


    return new Response(JSON.stringify(await getData()), {
        status : 200,
        headers :{
            "Content-Type" : "application/json"
        }
    })
}
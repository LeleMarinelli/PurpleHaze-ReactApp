import { useEffect, useState } from 'react'
import { collection, query, where,  getDocs } from '@firebase/firestore/lite'
import { db } from '../../firebase/config'

export const useProductos = (catId) => {

    //Loading...
    const [loading, setLoading] = useState(false)

    //Manejo de estados para mostrar productos
    const [productos, setProductos] = useState([])

    
    useEffect(  () => {
        setLoading(true)
        // Referencia 
        const productosRef = collection(db, 'productos')

        const q = catId ? query(productosRef, where('category', '==',catId) ) : productosRef
        
        // GET lo anterior
        getDocs(q)
            .then((collection) => {
                const item = collection.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductos(item)
                

            })
            .finally(( )=> {
                setLoading(false)
            })
              
        }, [catId])  


    return {
        loading,
        productos
    }
}

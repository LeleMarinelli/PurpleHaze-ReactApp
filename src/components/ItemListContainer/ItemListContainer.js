// import React, { useState } from 'react'
import { useEffect, useState } from 'react'


// import { Clicker } from '../PruebasClase/Clicker/Clicker'
import './ItemListContainer.scss'
import { Loading } from '../Loading/Loading'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'

//firebase
import { collection, getDocs, query, where } from '@firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemListContainer = () => {

    
    //Cambios de estado para Loading mientras pide datos..
    const [loading, setLoading] = useState(false)

    //Manejo de estados para mostrar productos
    const [productos, setProductos] = useState([])

    const {catId} = useParams()
    
    
    const [greeting,setGreeting] = useState('Welcome to the PURPLE HAZE branch of the Multiverse! ');

    setTimeout(() => {
    setGreeting('Find the best resources of the solar system in one page.')
    }, 5000);

    

    //useEffect para que solo se ejecute cuando se monta el componente.  
    //Pide datos

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
 

    return (
        <div className="PurpleHazeApp">

            {
                loading    ? <Loading/>
                        : <ItemList titulo="Purple Haze App" greeting={greeting} productos={productos}/>               
            }
 
        </div>     
    )
}

import { useState } from 'react'

import './ItemListContainer.scss'
import { Loading } from '../Loading/Loading'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { useProductos } from './useProductos'


export const ItemListContainer = () => {
       
    const {catId} = useParams()
    const {loading, productos} = useProductos(catId)
    
    //Cambio de estado de titulo.
    const [greeting,setGreeting] = useState('Welcome to the PURPLE HAZE branch of the Multiverse! ');

    setTimeout(() => {
        setGreeting('Find the best resources of the solar system in one page.')
    }, 4000);
 

    return (
        <div className="PurpleHazeApp">

            {
                loading ? <Loading/>
                        : <ItemList titulo="Purple Haze App" greeting={greeting} productos={productos}/>               
            }
 
        </div>     
    )
}

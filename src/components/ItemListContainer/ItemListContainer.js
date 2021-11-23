// import React, { useState } from 'react'
import { useEffect, useState } from 'react'



//import { ItemList } from '../ItemList/ItemList'


// import { Clicker } from '../PruebasClase/Clicker/Clicker'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Loading } from '../Loading/Loading'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'



export const ItemListContainer = () => {

    //Cambio de estado para cambiar un mje con delay.
    const [greeting,setGreeting] = useState(' Oh hi stranger... ');

    setTimeout(() => {
    setGreeting('Welcome to the PURPLE HAZE branch of the Multiverse!')
    }, 3000);


    //Cambios de estado para Loading mientras pide datos..
    const [loading, setLoading] = useState(false)

    //Manejo de estados para mostrar productos
    const [productos, setProductos] = useState([])
    

    //useEffect para que solo se ejecute cuando se monta el componente.  
    //Pide datos

    useEffect(  () => {
        setLoading(true)
        pedirDatos()
            .then( (item) => {
                setProductos(item)
            })
            .catch( (error)=> {
                console.log(error)
            })
            .finally( ()=> {
                setLoading(false)
            })
        }, [])  
 

    return (
        <div className="PurpleHazeApp">

            {loading
                // ? <h2> Cargando productos...</h2>
                ? <Loading/>

                
                // : <ItemList titulo="Purple Haze App" greeting={greeting} productos={productos}/> 
                :<ItemDetailContainer/>
                
            }
 
        </div>     
    )
}

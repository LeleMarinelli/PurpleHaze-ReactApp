// import React, { useState } from 'react'
import { useEffect, useState } from 'react'


// import { Clicker } from '../PruebasClase/Clicker/Clicker'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Loading } from '../Loading/Loading'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'




export const ItemListContainer = () => {

    //Cambio de estado para cambiar un mje con delay.
    const [greeting,setGreeting] = useState(' Oh hi stranger... ');

    setTimeout(() => {
    setGreeting('Welcome to the PURPLE HAZE branch of the Multiverse!')
    }, 2000);


    //Cambios de estado para Loading mientras pide datos..
    const [loading, setLoading] = useState(false)

    //Manejo de estados para mostrar productos
    const [productos, setProductos] = useState([])

    const {catId} = useParams()

    console.log(catId);
    

    //useEffect para que solo se ejecute cuando se monta el componente.  
    //Pide datos

    useEffect(  () => {
        setLoading(true)
        pedirDatos()
            .then( (item) => {

               if (!catId) {
                setProductos(item) 
                } else {
                setProductos(item.filter( prod => prod.category === catId ))    
                }
                
            })
            .catch( (error)=> {
                console.log(error)
            })
            .finally( ()=> {
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

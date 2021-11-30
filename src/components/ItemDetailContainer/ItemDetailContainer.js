import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import './ItemDetailContainer.scss'
import { Loading } from '../Loading/Loading'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'

//import { Container } from 'react-bootstrap'

export const ItemDetailContainer = () => {


    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        pedirDatos()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
            })
            .finally( () => {
                setLoading(false)
            }
       
        )
    }, [itemId])




    return (

        <div className="PurpleHazeApp">

            {
                loading     ? <Loading/>
                            : <ItemDetail {...item}/>               
            }
            

        </div>
    )
}

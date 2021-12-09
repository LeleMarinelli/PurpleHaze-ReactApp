import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import './ItemDetailContainer.scss'
import { Loading } from '../Loading/Loading'
import { ItemDetail } from '../ItemDetail/ItemDetail'

//firebase
import { collection, doc, getDoc } from '@firebase/firestore/lite'
import { db } from '../../firebase/config'

//import { Container } from 'react-bootstrap'

export const ItemDetailContainer = () => {


    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const   productosRef = collection(db, 'productos')
        const docRef = doc(productosRef, itemId)
        
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: itemId,
                    ...doc.data()
                })
            })
            .finally(()=>{
                setLoading(false)
            })

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

import React from 'react'

import { useNavigate } from 'react-router';
import { GiHouse } from 'react-icons/gi';
import { TiArrowBackOutline } from 'react-icons/ti';

import './BotoneraVolverYHome.scss'


export const BotoneraVolverYHome = () => {
    
    const navigate = useNavigate()
    
    const handleVolver =  () => {
            navigate(-1)
        }

    const handleVolverInicio =  () => {
            navigate('/')
        }

    return (
        <div className="BotoneraVolverYHome">
            <button className="botonItemDetail" onClick={handleVolver}>< TiArrowBackOutline className="icon"/></button>  
            <button className="botonItemDetail" onClick={handleVolverInicio}>< GiHouse className="icon"/></button>   
        </div>
    )
}

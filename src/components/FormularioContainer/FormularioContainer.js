import React, { useState, useEffect }  from 'react'
import { Formulario } from '../Formulario/Formulario'


import { Loading } from '../Loading/Loading'

export const FormularioContainer = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 1500);
        
        }, [])

   

    return (
            <div className="PurpleHazeApp">

            {
                loading     ? <Loading/>
                            : <Formulario />               
            }
            

        </div>
    )
}

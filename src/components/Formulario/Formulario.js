import React, { useState } from 'react'

import { GrSend } from 'react-icons/gr';

import './Formulario.scss'

export const Formulario = () => {

    // const [nombre,setNombre] = useState('')
    // const [apellido,setApellido] = useState('')

    
    // const handleNombre = (e) => {
    //     setNombre(e.target.value) 
    // }
    // const handleApellido = (e) => {
    //     setApellido(e.target.value) 
    // }

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email:''

    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit= (e) => {
        e.preventDefault()
        console.log(values);

    }

    return (
        <form className="container formContainer"  onSubmit={handleSubmit}>

            <input
                onChange={handleInputChange}
                value={values.nombre}
                name="nombre"
                className="form-control my-2"
                type="text"
                placeholder="nombre"            
            />
            <input
                onChange={handleInputChange}
                value={values.apellido}
                name="apellido"
                className="form-control my-2"
                type="text"
                placeholder="apellido"            
            />
            <input
                onChange={handleInputChange}
                value={values.mail}
                name="email"
                className="form-control my-2"
                type="text"
                placeholder="Email"            
            />
           

             <button className="botonItemDetail botonHandleSubmit" onClick={handleSubmit}> < GrSend className="icon"/> </button> 
            
        </form>
        
    )
}

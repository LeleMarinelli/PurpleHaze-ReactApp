import React, { useContext, useState } from 'react'

import { CartContext } from '../../context/CartContext'

//Estilos
import './Checkout.scss'

import { GiPayMoney, GiPerpendicularRings } from 'react-icons/gi';

import { validarFormulario } from '../../helpers/validarFormulario';
import { Navigate } from 'react-router';

import { generarOrden } from '../../firebase/generarOrden/generarOrden';



export const Checkout = () => {
    
    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email:'',
        emailConfirm:'',
        phone:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
  

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!validarFormulario(values)) {return}

        generarOrden(values, carrito, totalCompra, vaciarCarrito)

    }

    return (
        <>

        {carrito.length === 0 
            ? <Navigate to="/"/>
            :
            <div  className="PurpleHazeApp">
                <h2> <GiPerpendicularRings/> Completa los datos para finalizar la compra <GiPerpendicularRings/> </h2>

                <form className="container formContainer"  onSubmit={handleSubmit}>

                        {values.nombre.length < 2  && <small> Introduzca su nombre</small>}
                        <input
                            onChange={handleInputChange}
                            value={values.nombre}
                            name="nombre"
                            className="form-control my-2"
                            type="text"
                            placeholder="Nombre"            
                        />
                        
                        {values.apellido.length < 2  && <small>Introduzca su apellido</small>}
                        <input
                            onChange={handleInputChange}
                            value={values.apellido}
                            name="apellido"
                            className="form-control my-2"
                            type="text"
                            placeholder="Apellido"            
                        />
                        
                        {values.email.length < 2  && <small>Introduzca su mail</small>}
                        <input
                            onChange={handleInputChange}
                            value={values.email}
                            name="email"
                            className="form-control my-2"
                            type="text"
                            placeholder="Email"            
                        />

                        {values.emailConfirm.length < 2  && <small>Introduzca su mail nuevamente</small>}
                        <input
                            onChange={handleInputChange}
                            value={values.emailConfirm}
                            name="emailConfirm"
                            className="form-control my-2"
                            type="text"
                            placeholder="Email"            
                        />
                        {values.emailConfirm !== values.email  && <small>Los mails no coinciden</small>}

                        {values.phone.length < 2  && <small>Introduzca su telefono</small>}
                        <input
                            onChange={handleInputChange}
                            value={values.phone}
                            name="phone"
                            className="form-control my-2"
                            type="text"
                            placeholder="Telefono"            
                        />    
                <button onClick={handleSubmit} className="finalizarBoton"> < GiPayMoney className="icon"/> </button>
            </form>

                
            </div>
        }
        </>
    )
}

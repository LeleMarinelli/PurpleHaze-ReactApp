import React, { useContext, useState } from 'react'

import { CartContext } from '../../context/CartContext'

//Estilos
import './Checkout.scss'

import { GiPayMoney, GiPerpendicularRings } from 'react-icons/gi';

import { validarFormulario } from '../../helpers/validarFormulario';
import { Navigate } from 'react-router';
import { db } from '../../firebase/config';
import { collection, Timestamp, writeBatch, query, where, documentId, addDoc,  getDocs} from '@firebase/firestore/lite';

import Swal from 'sweetalert2'




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
  

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!validarFormulario(values)) {return}

        const ordenCompra ={
        comprador:{...values},
        items:carrito ,
        total: totalCompra(),
        date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db)
        
        const ordersRef = collection(db,"compras")
        const productosRef = collection(db,"productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

        const sinStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemUpdate = carrito.find((prod) => prod.id === doc.id)

            if(doc.data().stock >= itemUpdate.counter) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemUpdate.counter
                })
            } else {
                sinStock.push(itemUpdate)
            }

        })

        if(sinStock.length === 0) {
            addDoc(ordersRef, ordenCompra)
                .then((res) => {
                    batch.commit()
                    
                    Swal.fire({
                    icon:'success',
                    title:'Su compra ya se ha enviado',
                    text:`Su número de orden es: ${res.id}`
                    })

                    vaciarCarrito()
                })
        } else {
            Swal.fire({
                icon:'error',
                title:'Lamentablemente hay falta de stock de los siguientes productos:',
                text: sinStock.map(el => el.name).join(', ')
            })
        } 

        // carrito.forEach((prod) => {
        //     const docRef = doc(productosRef, prod.id)

        //     getDoc(docRef)
        //         .then((doc)=> {
        //             if (doc.data().stock >= prod.counter)

        //             updateDoc(doc.ref, {
        //                 stock: doc.data().stock - prod.counter
        //             })
        //         })
            
        // })

        
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
            </form>

                <button onClick={handleSubmit} className="finalizarBoton payButton"> < GiPayMoney className="icon"/> </button>
            </div>
        }
        </>
    )
}

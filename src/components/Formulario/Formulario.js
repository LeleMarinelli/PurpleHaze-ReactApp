import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2'

import { GrSend } from 'react-icons/gr';

import './Formulario.scss'
import { useNavigate } from 'react-router-dom';



export const Formulario = () => {

   const initialValues = {
        nombre: '',
        apellido: '',
        email:'',
        mje:'',
    }

    const navigate = useNavigate()

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values)=>{ 
                Swal.fire({
                    icon:'success',
                    title:'Su compra mensaje ha sido enviado',
                    text:`Pronto nos comunicaremos con usted 💖`
                    })
                navigate('/')
                
            }}
        >
           
            {(formik)=>(
                <form className="container formContainer"  onSubmit={formik.handleSubmit}>

                    <input
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                        name="nombre"
                        className="form-control my-2"
                        type="text"
                        placeholder="Nombre"            
                    />
                    
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.apellido}
                        name="apellido"
                        className="form-control my-2"
                        type="text"
                        placeholder="Apellido"            
                    />


                    <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name="email"
                        className="form-control my-2"
                        type="text"
                        placeholder="Email"            
                    />

                    <textarea
                        onChange={formik.handleChange}
                        value={formik.values.mje}
                        name="mje"
                        className="form-control my-2"
                        type="text"
                        placeholder="Que es lo que quieres decirnos?..."            
                    />
                    
                <button type="submit" className="botonItemDetail botonHandleSubmit"> < GrSend className="icon"/> </button> 
                    
                </form>
            )}

        </Formik>
    )
}

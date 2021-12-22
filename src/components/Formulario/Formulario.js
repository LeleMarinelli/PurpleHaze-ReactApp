import { Formik } from 'formik';
import React from 'react'

import { GrSend } from 'react-icons/gr';

import './Formulario.scss'



export const Formulario = () => {

   const initialValues = {
        nombre: '',
        apellido: '',
        email:'',
        mje:'',
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values)=>{ 
                console.log(values);
            }}
        >
           
            {(formik)=>(
                <form className="container formContainer"  onSubmit={formik.handleSubmit}>

                    {/* {values.nombre.length < 2  && <small> Introduzca su nombre</small>} */}
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                        name="nombre"
                        className="form-control my-2"
                        type="text"
                        placeholder="Nombre"            
                    />
                    
                    {/* {values.apellido.length < 2  && <small>Introduzca su apellido</small>} */}
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.apellido}
                        name="apellido"
                        className="form-control my-2"
                        type="text"
                        placeholder="Apellido"            
                    />
                    
                    {/* {values.email.length < 2  && <small>Introduzca su mail</small>} */}
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
                    
                    {/* {(values.email.length > 2) & values.apellido.length > 2 & values.nombre.length > 2 && <small>Perfecto! <br/> Ahora puedes enviar tu consulta</small> */}

      
                <button type="submit" className="botonItemDetail botonHandleSubmit"> < GrSend className="icon"/> </button> 
                    
                </form>
            )}

        </Formik>
    )
}

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

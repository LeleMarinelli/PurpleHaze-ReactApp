import Swal from 'sweetalert2'


export const validarFormulario = (values) =>{

        if(values.nombre.length < 3){
            Swal.fire({
                icon:'error',
                title:'Nombre Invalido'
            })
            return false
        }
        if(values.apellido.length < 3){
            Swal.fire({
                icon:'error',
                title:'Apellido Invalido'
            })
            return false
        }
        if(values.email.length < 5){
            Swal.fire({
                icon:'error',
                title:'Mail Invalido'
            })
            return false
        }
        if(values.emailConfirm !== values.email){
            Swal.fire({
                icon:'error',
                title:'Los mails no coinciden'
            })
            return false
        }
        if(values.email.length < 6){
            Swal.fire({
                icon:'error',
                title:'Telefono Invalido'
            })
            return false
        }

        return true

}
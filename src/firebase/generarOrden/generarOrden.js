import { writeBatch, collection, query , where, documentId, getDocs, addDoc, Timestamp } from  'firebase/firestore/lite'
import Swal from 'sweetalert2'
import { db } from '../config'


export const generarOrden = async ( values, carrito, totalCompra, vaciarCarrito ) => {

    const ordenCompra ={
        comprador:{...values},
        items: carrito ,
        total: totalCompra(),
        date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db)
        
        const ordenRef = collection(db,"compras")
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
            addDoc(ordenRef, ordenCompra)
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
       

}
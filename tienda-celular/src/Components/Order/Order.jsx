import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from "../CartContext/CartContext";
import { db } from '../../firebase/config';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'


const Order = () => {
    const {cart, clearCart, calcularTotal} = useCartContext();
    const [idOrder, setIdOrder] = useState("");
    let navigate = useNavigate();
    const initialValues = {
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
    };

    const [values, setValues] = useState(initialValues);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    };

    const dataBuyer = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        endBuy();
    };

    const endBuy = () => {
        const orderCollection = collection(db, 'order');
        addDoc(orderCollection, {
            dataBuyer,
            items: cart,
            date: serverTimestamp(),
            total: calcularTotal(),
        }).then((res) => {
            setIdOrder(res.id)
        });

        cart.forEach((prod) => {
            const updateCollection = doc(db, 'Productos', prod.id)
            updateDoc(updateCollection, { stock: prod.stock - prod.quantity });
        });
    };

    


    const sendBuy = () => {
        Swal.fire({
            title: "Confirmacion de compra",
            text: `Hemos recibido su compra, su numero de orden es ${idOrder} `,
            icon: "success",
            confirmButtonText: "Aceptar",
          })
          .then((res) => {
            if (res.isConfirmed) {
                clearCart();
              return navigate("/");
            } 
          });
    };

    useEffect(() => {
        if(idOrder){
            sendBuy();
        }
    }, [idOrder]);


    return (
        <div className='container-form mt-5'>
            <div className='row'>
                <form className='card card-body' onSubmit={handleSubmit}>
                    <h2>Ingreso de datos</h2>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control mb-3' 
                            placeholder='Ingresar nombre'
                            name='nombre'
                            onChange={handleInputChange}
                            required    
                            />
                        <input 
                            type='text' 
                            className='form-control mb-3'
                            placeholder='Ingrese apellido'
                            name='apellido'
                            onChange={handleInputChange}
                            required    
                            />
                        <input 
                            type='email'
                            className='form-control mb-3'
                            placeholder='ingrese email'
                            name='email'
                            onChange={handleInputChange}
                            required 
                            />   
                        <input 
                            type='number'
                            className='form-control mb-3'
                            placeholder='Ingrese numero de telefono'
                            name='telefono'
                            onChange={handleInputChange}
                            required 
                        />         
                    </div>
                    <button className='btn btn-primary'>Crear compra</button>
                </form>
            </div>

        </div>
    )
}


export default Order
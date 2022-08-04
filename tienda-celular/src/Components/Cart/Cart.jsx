import React, {useState, useEffect} from "react";
import {ItemCart} from '../ItemCart/ItemCart'
import { useCartContext } from "../CartContext/CartContext";
/* import {db} from '../../firebase/config'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore' */
import {Link} from 'react-router-dom'

const Cart = () => {

  const {cart, clearCart, calcularTotal} = useCartContext();

  const order = {
    buyer: {
      name: "",
      email:"",
      phone:"",
      adress: ""
    }
  }
  
  
  
  if(cart.length === 0){
    
    return (
      <>
        <h3>El carrito esta vacio</h3>
        <Link to="/">Volver a ver los productos</Link>
      </>
    )
      
  }
  
 
  return (
    <>
      <div className="container-fluid">
        {cart.map((item) => <ItemCart key={item.id} item={item} />)}
        
      </div>
      <div>
         <button onClick={clearCart}>Limpiar carrito</button>
      </div>
      <div>
        <h3>Total $ {calcularTotal()} </h3>
      </div>
      <form action="">
        <label htmlFor="fname">Nombre: <input type="text" required id="fname"/></label>
        <label htmlFor="femail">Email: <input type="text" required id="femail"/></label>
        <label htmlFor="fphone">Telefono: <input type="number" required id="fphone"/></label>
        <label htmlFor="fadress">Direccion: <input type="text" required id="fadress"/></label>
        <input type="submit" />
      </form>
      <div>
        <button>Crear orden</button>
      </div>
    </>
  )
}

export default Cart
import React, {useState, useEffect} from "react";
import {ItemCart} from '../ItemCart/ItemCart'
import { useCartContext } from "../CartContext/CartContext";
import {db} from '../../firebase/config'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore' 
import {Link} from 'react-router-dom'
import Order from '../Order/Order'
import style from './style.css'


const Cart = () => {

  const {cart, clearCart, calcularTotal} = useCartContext();
  const [ buyFinalized, setBuyFinalized ] = useState(false);

  const endBuy = () => {
    setBuyFinalized(true);
};
  
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
        <button className="btn-clean" onClick={clearCart}>
          Limpiar carrito
        </button>
         {/* <button onClick={clearCart}>Limpiar carrito</button> */}
      </div>
      <div>
        <h3>Total $ {calcularTotal()} </h3>
      </div>
      <div>
          { buyFinalized  
          ? (<Order />) 
          : (
              <div className="d-flex flex-row align-item-center justify-content-center mt-3">
                <button onClick={endBuy} className='btn-endBuy'>Finalizar compra!</button>
              </div>
          )}
      </div>
    </>
  )
}

export default Cart
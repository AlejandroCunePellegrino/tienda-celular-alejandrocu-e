import React, {useState, useEffect} from "react";
import {ItemCart} from '../ItemCart/ItemCart'
import { useCartContext } from "../CartContext/CartContext";

const Cart = () => {

  const {cart, setCart, clearCart, calcularTotal} = useCartContext();
  
  
  
  if(cart.length === 0){
    return <h3>El carrito esta vacio</h3>
  }
  
  useEffect(() => {
    console.log(calcularTotal);
  }, [cart])
  
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
    </>
  )
}

export default Cart
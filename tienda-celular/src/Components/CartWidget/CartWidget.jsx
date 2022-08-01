import React from "react";
import cartImg from '../../assets/images/cart.png';
import { useCartContext } from "../CartContext/CartContext";
import css from './CartWidget.css'

const CartWidget = () => {

    const {counter} = useCartContext();

    return(
        <div className="boxCartWidget">
            <div className="boxCounter">
                <span className="counter">{counter}</span>
            </div>
            <button className="buttom">
                <img src={cartImg} alt="cart" className="imgCart" />
            </button>
        </div>
    )
    
}



export default CartWidget
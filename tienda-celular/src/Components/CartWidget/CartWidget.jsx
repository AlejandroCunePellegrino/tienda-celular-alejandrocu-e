import React, {useState} from "react";
import cart from '../../assets/cart.png';

const CartWidget = () => {
    return(
        <button style={styles.buttom}>
            <img src={cart} alt="cart" style={styles.img} />
        </button>
    )
    
}

const styles = {
    buttom: {
        width: '60px',
        background: '#fffcff',
        border: 'none'
    },
    img: {
       width: '100%' 
    }
}

export default CartWidget
import React from "react";
import cart from '../../assets/images/cart.png';

const CartWidget = () => {
    return(
        <div>
            <button style={styles.buttom}>
                <img src={cart} alt="cart" style={styles.img} />
            </button>
        </div>
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
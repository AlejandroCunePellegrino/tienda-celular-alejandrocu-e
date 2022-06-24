import React, {useState} from "react";
const CartWidget = (props) => {

    const [contador, setContador] = useState(0);

    const add = () => {
        setContador(contador + 1);
        
    }
    const quit = () => {
        setContador(contador - 1);
    }
    if(contador == 10){
            
    }
    return(
        <>
        <div style={styles.itemCount}>
            <button onClick={quit}>-</button>
            <p>{contador}</p>
            <button onClick={add} id="add">+</button>
        </div>
        <div style={styles.itemCount}>
        <button>Add Cart</button>
        </div>
        </>
    )
}

const styles = {
    itemCount: {
        display: 'flex',
        justifyContent: 'space-around',
        height: '50px'
    }
}
export default CartWidget
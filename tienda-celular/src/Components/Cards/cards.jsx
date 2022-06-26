import React, {useState} from "react";
/* import CartWidget from '../CartWidget/CartWidget' */


const Cards = ({name, price, image, stock}) => {

    const [contador, setContador] = useState(0)
    const amount = (value) => {
        /* let resultado = contador + value; */

        setContador(contador+value)
        
    }

    return(
        <div class="card col-3 m-1" style={styles.cardContainer} >
            <img src= {image} class="card-img-top" style={styles.cardImg} alt="A20" />
            <div class="card-body mx-auto">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{price}</p>
            </div>
            <div class="d-flex justify-content-between">
                <span onClick={()=>amount(-1)}>-</span>
                <span>{contador} | {stock}</span>
                <span onClick={()=>amount(+1)}>+</span>
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        padding: 5,
        width: '20%',
        position: 'relative',

    },
    cardImg: {
        width: '80%',
        objetFit: 'cover',
        objetPosition: 'center center'
    }
}

export default Cards;
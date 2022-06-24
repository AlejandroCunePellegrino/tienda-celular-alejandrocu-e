import React from "react";
import CartWidget from '../CartWidget/CartWidget'


const Cards = (props) => {
    return(
        <div class="card col-3 m-1" style={styles.cardContainer}>
            <img src= {props.image} class="card-img-top" style={styles.cardImg} alt="A20" />
            <div class="card-body mx-auto">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.price}</p>
                <CartWidget stock= '10' initial= '1'/>
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
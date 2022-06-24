import React from "react";
/* import logo from "../../assets/logo.png" */


const Cards = (props) => {
    return(
        <div class="card col-3 m-1" style={styles.cardContainer}>
            <img src= {props.image} class="card-img-top" style={styles.cardImg} alt="A20" />
            <div class="card-body mx-auto">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.price}</p>
                <a href="/" class="btn btn-primary">Add cart</a>
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        padding: 5,
        width: '20%'
    },
    cardImg: {
        width: '80%',
        objetFit: 'cover',
        objetPosition: 'center center'
    }
}

export default Cards;
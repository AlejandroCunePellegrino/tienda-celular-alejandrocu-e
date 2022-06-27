import React, {useState} from "react";
import card from './card.css'
import addCart from '../../assets/addCart.png'
import Swal from 'sweetalert2'


/* ItemCount */
const Cards = ({name, price, image, stock, initial}) => {
    const [amount, setAmount] = useState(1)
    const count = (value) => { 
        let result = amount + value;
        if(result <= stock & result >= initial){
            setAmount(amount+value)
        }
    } 

    const addToCart = () =>{
        Swal.fire(`Se agregaron ${amount} ${name} al carrito`)
        /* alert(`Se agregaron ${amount} ${name} al carrito`); */
    }

    return(
        <div className="card col-3 m-1" style={styles.cardContainer} >
            <img src= {image} className="card-img-top" style={styles.cardImg} alt="A20" />
            <div className="card-body mx-auto">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
            </div>
            <div className="containerCart">
                <span onClick={()=>addToCart()}><img src={addCart} alt="addcart"  className="cartImg"/></span>
            </div>
            <div className="d-flex justify-content-between containerBtn">
                <span onClick={()=>count(-1)} className= "btn btnResta">-</span>
                <span>{amount} | {stock}</span>
                <span onClick={()=>count(+1)} className= "btn btnSuma" >+</span>
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
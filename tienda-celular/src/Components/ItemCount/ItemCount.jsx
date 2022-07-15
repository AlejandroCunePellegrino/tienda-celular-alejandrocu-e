import React, {useState} from "react";

import addCart from '../../assets/images/addCart.png'

const ItemCount = ({stock, initial, onAdd}) => {

    const [amount, setAmount] = useState(1)
    const count = (value) => { 
        let result = amount + value;
        if(result <= stock & result >= initial){
            setAmount(amount+value) 
        } }


     return(
        <>
        <div className="containerCart">
                <span onClick={() => onAdd(amount)}><img src={addCart} alt="addcart"  className="cartImg"/></span>
            </div>
        <div className="d-flex justify-content-between containerBtn">
            <span onClick={()=>count(-1)} className= "btn btnResta">-</span>
            <span>{amount} | {stock}</span>
            <span onClick={()=>count(+1)} className= "btn btnSuma" >+</span>
        </div>
        </>
    )
}

export default ItemCount 
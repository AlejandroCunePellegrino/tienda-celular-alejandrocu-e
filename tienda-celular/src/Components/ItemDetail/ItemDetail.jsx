import React, {useState} from "react";
import ItemDetailcss from './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const ItemDetail = ({image, detail, stock, name, initial, price}) => {


    const [gotocart, setGoToCart] = useState(false)
    const onAdd = (quantity) =>{
        Swal.fire(`Se agregaron ${quantity} ${name} al carrito`);
        setGoToCart(true)  
    }


    return(
        <div className="box">
            <div className="box-img">
                <img src={image} alt={name} />
            </div>
            <div className="box-detail">
                <h5>{name}</h5>
                <h6>{price}</h6>
                <p>{detail}</p>
                {
                    gotocart
                    ? <Link to='/cart'>Terminar compra</Link>
                    :<ItemCount stock={stock} initial={initial} name={name} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail;
import React, {useState} from "react";
import ItemDetailcss from './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";

const ItemDetail = ({product}) => {

     const {addProduct} = useCartContext(); 

    const [gotocart, setGoToCart] = useState(false)
    const onAdd = (quantity) =>{
        Swal.fire(`Se agregaron ${quantity} ${product.name} al carrito`);
        setGoToCart(true)
        addProduct(product, quantity);  
    }


    return(
        <div className="box">
            <div className="box-img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="box-detail">
                <h5>{product.name}</h5>
                <h5> $ {product.price}</h5>
                <p className="lh-sm box-text">{product.detail}</p>
                {
                    gotocart
                    ? <Link to='/cart'>Terminar compra</Link>
                    :<ItemCount stock={product.stock} initial={product.initial} name={product.name} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail;
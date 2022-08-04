import React, {useState} from "react";
import card from './card.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useCartContext } from "../CartContext/CartContext";





const Item = ({product, link}) => {
   
    const {addProduct} = useCartContext(); 
    const [gotocart, setGoToCart] = useState(false)
    const onAdd = (quantity) =>{
        Swal.fire(`Se agregaron ${quantity} ${product.name} al carrito`);
        setGoToCart(true)
        addProduct(product, quantity);
    }

    return(
        <div className="card col-3 m-1" style={styles.cardContainer} >
            <img src= {product.image} className="card-img-top" style={styles.cardImg} alt={product.name} />
            <div className=" pym box-info">
                <h5 className="card-title pym">{product.name}</h5>
                <p className="card-text pym">$ {product.price}</p>
                <Link to={`/product/${link}`} className= "pym">Ver detalles</Link>
            </div>
            <ItemCount stock={product.stock} initial={product.initial} name={product.name} onAdd={onAdd}/>
        </div>
    );
};

const styles = {
    cardContainer: {
        padding: 5,
        width: '20%',
        position: 'relative',
        height: '450px'
    },
    cardImg: {
        width: '60%',
        objetFit: 'cover',
        objetPosition: 'center center',
        height: '220px'
    }
}

export default Item;
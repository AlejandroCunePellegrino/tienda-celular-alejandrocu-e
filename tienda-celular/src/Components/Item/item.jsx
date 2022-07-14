import React from "react";
import card from './card.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";





const Item = ({name, price, image, stock, initial, link}) => {
   
    return(
        <div className="card col-3 m-1" style={styles.cardContainer} >
            <img src= {image} className="card-img-top" style={styles.cardImg} alt={name} />
            <div className="card-body box-info">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <Link to={`/product/${link}`}>Ver detalles</Link>
            </div>
            <ItemCount stock={stock} initial={initial} name={name}/>
        </div>
    );
};

const styles = {
    cardContainer: {
        padding: 5,
        width: '20%',
        position: 'relative',
        height: '500px'
    },
    cardImg: {
        width: '65%',
        objetFit: 'cover',
        objetPosition: 'center center',
        height: '250px'
    }
}

export default Item;
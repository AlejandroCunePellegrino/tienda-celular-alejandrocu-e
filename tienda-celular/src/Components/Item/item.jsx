import React, {useEffecet, useState} from "react";
import card from './card.css'
import ItemCount from '../ItemCount/ItemCount'
/* import productos from '../../assets/data/item.json' */


const Item = ({product}) => {
   
    
    return(
        <div className="card col-3 m-1" style={styles.cardContainer} >
            <img src= {product.image} className="card-img-top" style={styles.cardImg} alt={product.name} />
            <div className="card-body mx-auto">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
            </div>
            <ItemCount stock= {product.stock} initial= {product.initial} name= {product.name} />
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

export default Item;
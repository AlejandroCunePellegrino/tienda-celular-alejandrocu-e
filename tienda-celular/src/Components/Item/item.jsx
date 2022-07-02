import React from "react";
import card from './card.css'
import ItemCount from '../ItemCount/ItemCount'
/* import productos from '../../assets/data/item.json' */
/* import image from '../../assets/images/a12.jpg' */


const Item = ({name, price, image, stock, initial}) => {
   
    
    return(
        <div className="card col-3 m-1" style={styles.cardContainer} >
            <img src= {image} className="card-img-top" style={styles.cardImg} alt={name} />
            <div className="card-body mx-auto">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
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

    },
    cardImg: {
        width: '80%',
        objetFit: 'cover',
        objetPosition: 'center center'
    }
}

export default Item;
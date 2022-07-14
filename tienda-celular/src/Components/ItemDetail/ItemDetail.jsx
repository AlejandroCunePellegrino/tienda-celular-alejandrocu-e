import React from "react";
import ItemDetailcss from './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({image, detail, stock, name, initial}) => {
    return(
        <div className="box">
            <div className="box-img">
                <img src={image} alt={name} /* className="img-a12" */ />
            </div>
            <div className="box-detail">
                <h5>{name}</h5>
                <p>{detail}</p>
                <ItemCount stock={stock} initial={initial} />
            </div>
        </div>
    )
}

export default ItemDetail;
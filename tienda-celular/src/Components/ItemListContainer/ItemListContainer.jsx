import React from "react";
import Main from '../main/Main'

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h2 class="text-center">{greeting}</h2>
            <Main />
        </div>
    )
}

export default ItemListContainer;
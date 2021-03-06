import React from "react";
import Item from '../Item/item'




const ItemList = ({productList}) => {

    
    

    return(
        <main className= "container-fluid">
            <div className= "row justify-content-center" style={styles.section} >
                {productList.map((product) => <Item key={product.id} name={product.name} image={product.image} price={product.price} stock={product.stock} initial={product.initial} link={product.id} />)}
            </div>
        </main>
    );
};

const styles = {
    section: {
        height: '600px'
    }
    
} 

export default ItemList;
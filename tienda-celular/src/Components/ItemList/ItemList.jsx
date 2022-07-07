import React from "react";
import Item from '../Item/item'




const ItemList = ({productList}) => {


    

    return(
        <main className= "container-fluid">
            <div className= "row justify-content-center" style={styles.section} id="samnsung">
                <h2 className="text-center">Todos los productos</h2>
                {productList.map((product) => <Item key={product.id} name={product.name} image={product.image} price={product.price} stock={product.stock} initial={product.initial} product={product}/>)}
                
            </div>
            {/* <div className= "row justify-content-center" id="motorola" style={styles.section}>
                <h2 className="text-center">Motorola</h2>
                <Item />
                <Item />
                <Item />
                <Item /> 
            </div> */}
        </main>
    );
};

const styles = {
    section: {
        height: '600px'
    }
    
} 

export default ItemList;
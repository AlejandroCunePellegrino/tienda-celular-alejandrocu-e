import React from "react";
import Item from '../Item/item'
/* import a20 from '../../assets/images/a20.jpg'
import a12 from '../../assets/images/a12.jpg'
import s20 from '../../assets/images/s20.jpg'
import s22 from '../../assets/images/s22.jpg' */



const ItemList = ({productList}) => {


    

    return(
        <main className= "container-fluid">
            <div className= "row justify-content-center" style={styles.section} id="samnsung">
                <h2 className="text-center">Samnsung</h2>
                {productList.map((product) => <Item key={product.id} name={product.name} image={product.image} price={product.price} stock={product.stock} initial={product.initial}/>)}
                
            </div>
            <div className= "row justify-content-center" id="motorola" style={styles.section}>
                <h2 className="text-center">Motorola</h2>
               {/*  <Item />
                <Item />
                <Item />
                <Item /> */}
            </div>
            <div className= "row justify-content-center" id="xiaomi" style={styles.section}>
                <h2 className="text-center">Xiaomi</h2>
                {/* <Item />
                <Item />
                <Item />
                <Item /> */}
            </div>
            <div className= "row justify-content-center" id="iphone" style={styles.section}>
                <h2 className="text-center">Iphone</h2>
                {/* <Item />
                <Item />
                <Item />
                <Item /> */}
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
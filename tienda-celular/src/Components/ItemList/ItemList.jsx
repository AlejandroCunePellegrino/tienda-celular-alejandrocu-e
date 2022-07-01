import React from "react";
import Item from '../Item/item'
import a20 from '../../assets/images/a20.jpg'
import a12 from '../../assets/images/a12.jpg'
import s20 from '../../assets/images/s20.jpg'
import s22 from '../../assets/images/s22.jpg'



const ItemList = () => {
    return(
        <main className= "container-fluid">
            <div className= "row justify-content-center" style={styles.section} id="samnsung">
                <h2 className="text-center">Samnsung</h2>
                <Item name='Samnsung Galaxy A20' price='$ 50.990'  image= {a20} stock= {10} initial= {1} />
                <Item name='Samnsung Galaxy A12' price='$ 44.999' image= {a12} stock= {12} initial= {1}/> 
                <Item name='Samnsung Galaxy S22 Ultra' price='$ 262.999' image= {s22} stock= {5} initial= {1} /> 
                <Item name='Samnsung Galaxy S20 FE' price='$ 91.999' image= {s20} stock= {8}  initial= {1} /> 
            </div>
            <div className= "row justify-content-center" id="motorola" style={styles.section}>
                <h2 className="text-center">Motorola</h2>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className= "row justify-content-center" id="xiaomi" style={styles.section}>
                <h2 className="text-center">Xiaomi</h2>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className= "row justify-content-center" id="iphone" style={styles.section}>
                <h2 className="text-center">Iphone</h2>
                <Item />
                <Item />
                <Item />
                <Item />
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
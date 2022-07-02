import React, {useEffect, useState} from "react";
import ItemList from '../ItemList/ItemList'
import { getData } from "../../mocks/fakeapi";
import Spinner from '../Spinner/Spinner'

const ItemListContainer = ({greeting}) => {
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true); 

    

    useEffect(() => {
        getData
        .then((response) => setProductList(response))
        .catch((error) => console.log("clavo la pala", error))
        .finally(() => setLoading(false))

    },[]);
    
    return(
        <div>
            <h2 className="text-center">{greeting}</h2>
            {loading ? <Spinner /> : <ItemList productList= {productList} />}  
        </div>
    )
}

export default ItemListContainer;
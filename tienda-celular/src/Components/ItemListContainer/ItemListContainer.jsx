import React, {useEffect, useState} from "react";
import ItemList from '../ItemList/ItemList'
import { getProds } from "../../mocks/fakeapi";
import Spinner from '../Spinner/Spinner';
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true); 

    const {categoryId} = useParams();
    

    useEffect(() => {
        setLoading(true)
        getProds(categoryId)
        .then(response => setProductList(response))
        .catch(error => console.log("clavo la pala", error))
        .finally(() => setLoading(false))
        /* console.log(categoryId); */
        

    },[categoryId]);
    
    return(
        <div>
            <h2 className="text-center">{greeting}</h2>
            {loading ? <Spinner /> : <ItemList productList= {productList} />}  
        </div>
    )
}

export default ItemListContainer;
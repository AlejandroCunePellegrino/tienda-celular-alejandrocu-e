import React, {useEffect, useState} from "react";
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner';
import { useParams } from "react-router-dom";
import {db} from '../../firebase/config.js'
import {getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true); 

    const {categoryId} = useParams();
    
   

    useEffect(() => {
        
        const qry = categoryId
            ? query(collection(db, 'Productos'), where('category', '==', categoryId))
            : collection(db, 'Productos');
            

        setLoading(true)
        getDocs(qry)
        .then(res => {
           const list = res.docs.map(prod => {
                return {
                    id: prod.id,
                    ...prod.data()}
            })
            setProductList(list);
        })
        .catch(error => console.log("clavo la pala", error))
        .finally(() => setLoading(false))
    },[categoryId]);
    
    return(
        <div>
            <h2 className="text-center">{greeting}</h2>
            {loading ? <Spinner /> : <ItemList productList= {productList} />}  
        </div>
    )
}

export default ItemListContainer;
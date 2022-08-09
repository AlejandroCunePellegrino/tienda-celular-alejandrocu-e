import React, {useEffect, useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import css from './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import {db} from '../../firebase/config.js'
import {doc, getDoc, collection} from  'firebase/firestore'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true); 
    const {id} = useParams()

    
    
    useEffect(() => {
        const productsCollection = collection(db, 'Productos');
        const refDoc = doc(productsCollection, id)
        setLoading(true)
        getDoc(refDoc)
        .then(res => {
            const prod = {
                id: res.id,
                ...res.data(),
            }
            setProduct(prod)
        })
    
        .catch((error) => console.log("clavo la pala", error))
        .finally(() => setLoading(false))
    },[id]);

    return(
        <div className="container-detail">
            <div className="container-detail-box">
                {loading ? <Spinner /> : <ItemDetail  product={product} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;
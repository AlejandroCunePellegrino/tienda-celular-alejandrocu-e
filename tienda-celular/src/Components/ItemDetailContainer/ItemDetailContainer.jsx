import React, {useEffect, useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProd } from "../../mocks/fakeapi";
import Spinner from '../Spinner/Spinner'
import css from './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true); 

    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        getProd(id)
        .then((response) => setProduct(response))
        .catch((error) => console.log("clavo la pala", error))
        .finally(() => setLoading(false))

    },[id]);

    return(
        <div className="container-detail">
            <div>
                <h3 className="text-center">ItemDetailContainer</h3>
                {loading ? <Spinner /> : <ItemDetail name={product.name} image={product.image} price={product.price} stock={product.stock} initial={product.initial} product={product} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;
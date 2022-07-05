import React, {useEffect, useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getData } from "../../mocks/fakeapi";
import Spinner from '../Spinner/Spinner'
import css from './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true); 

    

    useEffect(() => {
        getData
        .then((response) => setProductList(response))
        .catch((error) => console.log("clavo la pala", error))
        .finally(() => setLoading(false))

    },[]);

    return(
        <div className="container-detail">
            <div>
                <h3 className="text-center">ItemDetailContainer</h3>
                {loading ? <Spinner /> : <ItemDetail />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;
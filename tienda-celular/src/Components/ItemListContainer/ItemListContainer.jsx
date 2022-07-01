import React, {useEffect, useState} from "react";

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const products = [
        {id: 1,
        name: "Samnsung Galaxy A20",
        image: "../images/a20.jpg",
        price: "$ 50.990",
        stock: 10,
        initial: 1},
    
        {id: 2,
        name: "Samnsung Galaxy A12",
        image: "../images/a12.jpg",
        price: "$ 44.999",
        stock: 8,
        initial: 1},
    
        {id: 3,
        name: "Samnsung Galaxy S22 Ultra",
        image: "../images/a2.jpg",
        price: "$ 262.999",
        stock: 5,
        initial: 1},
    
        {id: 4,
        name: "Samnsung Galaxy S20 FE",
        image: "../images/s20.jpg",
        price: "$ 91.999",
        stock: 7,
        initial: 1}
    ]
    const [productList, setProductList] = useState([]);
    /* const [loading, setLoading] = useState(true); */

    const getData = new Promise ((resolve, reject) => {
        let condition = true;
        setTimeout(() => {
            if(condition){
                resolve(products)
            }else{
                reject("salio mal")
            }
        }, 2000)
    });

    useEffect(() => {
        getData
        .then((response) => {
            setProductList(response)
        })
    },[]);
    return(
        <div>
            <h2 class="text-center">{greeting}</h2>
            <ItemList arrProducts= {productList} />
        </div>
    )
}

export default ItemListContainer;
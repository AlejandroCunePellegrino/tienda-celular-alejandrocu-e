import React from 'react'
import style from './style.css'
import { useCartContext } from "../CartContext/CartContext";



export const ItemCart = ({item}) => {

  
  const {removeProduct} = useCartContext();
  
  return (
    <div className="row justify-content-center box-row">
      <div className="col-10 bg-white">
        <div className='box-item'>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <div>
            <span>{item.quantity}x</span><span className="material-symbols-outlined btn-delete" onClick={() => removeProduct(item.id)}>delete</span>
          </div>
        </div>
      </div>
    </div>
  )
}

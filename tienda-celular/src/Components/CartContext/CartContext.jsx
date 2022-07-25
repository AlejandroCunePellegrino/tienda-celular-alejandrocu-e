import React, {createContext, useState, useContext, useEffect} from "react";


export const context = createContext();
const {Provider} = context
export const useCartContext = () => useContext(context)

export const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        console.log(cart);
    },[cart])
    
    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity});
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
        
    };
        
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
        
    };

    const calcularTotal = () => {
        let count = 0
        cart.forEach((prod) => {
            count += parseInt(prod.price)  * prod.quantity
        })
        return count;
    } 
    return(
        <Provider value={{clearCart, isInCart, removeProduct, addProduct, cart, setCart, calcularTotal}}>
            {children}
        </Provider>
    )
}

export default CartContext;
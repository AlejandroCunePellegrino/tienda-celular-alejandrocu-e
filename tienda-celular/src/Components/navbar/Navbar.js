import React from "react";
import logo from "../../assets/logo.png"
import cart from "../../assets/cart.png"



const Navbar = () =>{
    return (
        <header style={styles.container}>
            <img src={logo} alt="logo" style={styles.imageLogo} />
            <h1>TIENDA CELULARES</h1>
            <nav>
                <a href="#samnsung" style={styles.anchors}>Samnsung</a>
                <a href="#motorola" style={styles.anchors}>Motorola</a>
                <a href="#xiaomi" style={styles.anchors}>Xiaomi</a>
                <a href="#iphone" style={styles.anchors}>Iphone</a>
            </nav>
            <img src={cart} alt="cart" style={styles.imageCart}/>
        </header>
    );
};

 const styles = {
    container: {
        display: 'flex',
        justifyContent : 'space-between',
        alignItems: 'center',
        borderBottom: 'solid 1px black',
        height: '150px',
        backgroundColor: '#fffcff'
    },
    imageLogo: {
        width: '20%',
        padding: '0',
        margin: '0',
        height: '150px'
    },
    imageCart: {
        height: '45px',
        width: '5%',
        margin: '10px'
    },
    anchors: {
        padding: 10,
        textDecoration: 'none',
        color: 'black'
    }   
}  

export default Navbar;
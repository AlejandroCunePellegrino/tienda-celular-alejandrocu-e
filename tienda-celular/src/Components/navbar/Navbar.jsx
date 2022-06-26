import React from "react";
import logo from "../../assets/logo.png"
import CartWidget from '../CartWidget/CartWidget'



const Navbar = () =>{
    return (
        <header style={styles.container}>
            <img src={logo} alt="logo" style={styles.imageLogo} />
            <h1 style={styles.font}>Tienda celulares</h1>
            <nav>
                <a href="#samnsung" style={styles.anchors}>Samnsung</a>
                <a href="#motorola" style={styles.anchors}>Motorola</a>
                <a href="#xiaomi" style={styles.anchors}>Xiaomi</a>
                <a href="#iphone" style={styles.anchors}>Iphone</a>
            </nav>
            <CartWidget />
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
        backgroundColor: '#fffcff',
        position: 'sticky',
        top: '0px',
        zIndex: '100'
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
        color: 'black',
    },
    font: {
        fontFamily:`'Signika Negative', sans-serif`
    } 
}  

export default Navbar;
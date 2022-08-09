import React from "react";
import logo from "../../assets/images/logo.png"
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import navcss from './navbar.css'



const Navbar = () =>{

    const categories = [
        {name: "Sanmsung", id: 0, route:"/category/samnsung"},
        {name: "Motorola", id: 1, route:"/category/motorola"},
        {name: "Xiaomi", id: 2, route:"/category/xiaomi"},
        {name: "Iphone", id: 3, route:"/category/iphone"},
    ]

    return (
        <header style={styles.container}>
            <Link to="/"><img src={logo} alt="logo" style={styles.imageLogo} /></Link>
            <h1>Online CellShop</h1>
            <nav>
                {categories.map((category) => <NavLink key={category.id} className="style-anchors fw-bold" to={category.route}>{category.name}</NavLink>)}
            </nav>
            <Link to="/cart" style={styles.anchors}><CartWidget /></Link>   
        </header>
    );
};

 const styles = {
    container: {
        display: 'flex',
        justifyContent : 'space-between',
        alignItems: 'center',
        borderBottom: 'solid 1px black',
        height: '125px',
        backgroundColor: '#fffcff',
        position: 'sticky',
        top: '0px',
        zIndex: '100'
    },
    imageLogo: {
        width: '80%',
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
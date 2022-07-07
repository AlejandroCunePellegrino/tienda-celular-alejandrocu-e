import React from 'react'; /* no es necesario */
import Navbar from './Components/navbar/Navbar'
import Appcss from './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from './Components/CartWidget/CartWidget';



function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting= "Bienvenidos a la mejor tienda" />}>home</Route>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting= "Bienvenidos a la mejor tienda" />}></Route>
        <Route path="/product/:id" element={<ItemDetailContainer />}></Route>
        {/* <Route path="/category/sanmsung" element="">samnsung</Route>
        <Route path="/category/motorola" element="">motorola</Route>
        <Route path="/category/xiaomi" element="">xiaomi</Route>
        <Route path="/category/iphone" element="">iphone</Route> */}
        <Route path="/cart" element={<CartWidget /> }>cart</Route>
      </Routes>
      {/* <ItemListContainer greeting= "Bienvenidos a la mejor tienda" />
      <ItemDetailContainer /> */}

    </BrowserRouter>
  );
}

export default App; /* muy importante exportar */

import React from 'react'; /* no es necesario */
import Navbar from './Components/navbar/Navbar'
import Appcss from './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'



function App() {
  return ( 
    <>
    <Navbar />
    <ItemListContainer greeting= "Bienvenidos a la mejor tienda" />
    </>
  );
}

export default App; /* muy importante exportar */

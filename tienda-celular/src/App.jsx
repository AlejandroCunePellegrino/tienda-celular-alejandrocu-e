import React from 'react'; /* no es necesario */
import Navbar from './Components/navbar/Navbar'
import Appcss from './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'




function App() {
  return ( 
    <>
    <Navbar />
    <ItemListContainer greeting= "Bienvenidos a la mejor tienda" />
    <ItemDetailContainer />
    </>
  );
}

export default App; /* muy importante exportar */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './components/Pages/Carrito.jsx';
import Home from './components/Pages/Home.jsx';
import Productos from './components/Pages/Productos.jsx';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import DetalleProductos from './components/Pages/DetalleProductos.jsx'


function App() {
  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="Productos">
          <Route index element={<Productos/>}/>
          <Route path=":productId" element={<DetalleProductos/>}/>
        </Route>
        <Route path="carrito" element={<Carrito/>}/>
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
   ) 
  ;
}

export default App;

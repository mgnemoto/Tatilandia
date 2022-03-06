import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './components/Pages/Carrito.jsx';
import Home from './components/Pages/Home.jsx';
import Productos from './components/Pages/Productos.jsx';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import DetalleProductos from './components/Pages/DetalleProductos.jsx'
import { CartProvider } from './context/CartContext';
import DetalleCompra from './components/Pages/DetalleCompra.jsx'



function App() {
  return (
  <CartProvider>
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
            <Route path="DetalleCompra/:oderId" element={<DetalleCompra/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </CartProvider>
   ) 
  ;
}

export default App;

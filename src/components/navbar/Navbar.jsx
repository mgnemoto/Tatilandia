import {Link} from "react-router-dom"
import './Navbar.css'
import shopCart from '../../assets/iconos/carrito blanco 24 3.svg'
import banner from '../../assets/encabezado/Banner.jpg'
import { useCart } from '../../context/CartContext';
const Navbar = () =>{

    const {cartCounter}=useCart();

    return(
        <>
    <nav className="posicion navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link nav-font" to="/">Home</Link>
                    <Link className="nav-link nav-font" to="/Productos">Productos</Link>
                </div>
            </div>
        <Link className="nav-link nav-font btn btn-success" to="Carrito">
            <img src={shopCart} alt="Carrito"/>
            <h6 className="fs-5 text-light">{cartCounter}</h6>
        </Link>
        </div>
    </nav>
    <img src={banner} alt='Foto de encabezado' className="imgEncabezado"/>
    </>
    )
};

export default Navbar;
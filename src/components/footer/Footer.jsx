import './Footer.css'
import {Link} from "react-router-dom"



const Footer = () =>{
    return(
        <>
        <div className="footer p-2">
            <ul className='d-flex flex-column align-items-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Carrito">Carrito</Link></li>
            </ul>
            <span className='p-2'>Hecho por Marcos Escobar</span>
        </div>
        </>
    )
}

export default Footer
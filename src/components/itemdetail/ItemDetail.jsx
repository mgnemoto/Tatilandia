import ItemCounter from '../counter/ItemCounter'
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import './ItemDetail.css'
const ItemDetail = ({postre}) => {

    const {addItem}=useCart();
    const [counter,setCounter]=useState(1)

    const handleClick= ()=>{
        addItem (postre, counter);
    }

    
    return(
        <>
        <div className="row itemDetail">
            <div className="d-flex flex-column col-lg-7 m-0">
                <h2 className='mb-5 mt-5'>{postre.nombre}</h2>
                <img src={require('../../assets/postres/' +postre.foto)} className="card-img-top w-75 m-2 borde" alt="..."/>
            </div>
            <div className="d-flex flex-column justify-content-around col-lg-5 m-0">
                <h3>Precio - $ {postre.precio}</h3>
                <div>
                    <h3>Descripción</h3>
                    <p>{postre.descripcion}</p>
                </div>
                <div className='padCount'>
                    <ItemCounter counter={counter} setCounter={setCounter}/>
                    <button className='btn btn-outline-success w-100 fs-6 p-1 mt-1' onClick={handleClick}>Agregar al carrito</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
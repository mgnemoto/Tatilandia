import ItemCounter from '../counter/ItemCounter'
import './Item.css'
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

const Item = (props) =>{

    const {addItem}=useCart();
    const [counter,setCounter]=useState(1)

    const handleClick= ()=>{
        addItem (props.postre, counter);
    }
    



    return(
            <div className="card">
                <img src={require('../../assets/postres/'+ props.postre.foto)} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{props.postre.nombre}</h5>
                    <h5>${props.postre.precio}</h5>
                    <ItemCounter counter={counter} setCounter={setCounter}/>
                    <button className='btn btn-outline-success w-50 fs-6 p-1 mt-1' onClick={handleClick}>Agregar al carrito</button>
                </div>
            </div>
        
    )
}

export default Item
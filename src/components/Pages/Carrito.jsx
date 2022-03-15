import { useCart } from '../../context/CartContext'
import { useState } from 'react';
import { getFirestore } from "../../firebase";
import './pages.css';
import { useNavigate } from 'react-router-dom';



function Carrito(){
    let navigate=useNavigate();

    const {cart, removeItem} = useCart();
    const handleSubmit = (evt) => {
        evt.preventDefault()

        

        const newOrder = {
            buyer:{
                name,
                phone,
            },
            items:cart,
            total: getTotal(cart),
        };
        console.log(newOrder);
        const db = getFirestore()
        db.collection('orders').add(newOrder)
        .then((res)=> {
        console.log('Compra realizada', res.id) 
        navigate(`/DetalleCompra/${res.id}`)
        })
        .catch((err) => console.log("Hubo un error", err))

    };

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const getTotal = (carro) =>{
        let total=0;
        carro.forEach((element)=>{
        total += element.item.precio*element.quantity});
        return total;
    }
    
    
    return (
    <div>
        <h2>Carrito</h2>
        <div className='d-flex flex-column align-items-center'>
        {cart.map((purchase)=>{
            return (
                <>
                <div className="card shadow p-2" key={purchase.item.id}>
                    <img src={require('../../assets/postres/' +purchase.item.foto)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{purchase.quantity} x {purchase.item.nombre}</h5>
                        <p className="card-text">${purchase.quantity*purchase.item.precio}</p>
                        <button className='mb-1 btn btn-danger' onClick={()=>removeItem(purchase.item.id,purchase.quantity)}>Borrar producto</button>
                    </div>
                </div>
                </>
                    )
                
        })}
        </div>
        <h2 className='text-white'>Total = {getTotal(cart)}</h2>
        <h2 className='text-white'>Introduzca sus datos:</h2>
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Nombre</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label text-white">Teléfono</label>
                <input type="number" className="form-control" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
            </div>

            <button type="submit" className="btn btn-primary" >Enviar</button>
        </form>

        </div>
    )
}

export default Carrito
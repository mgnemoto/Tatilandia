import { useCart } from '../../context/CartContext'




function Carrito(){
    const {cart, removeItem}= useCart();
    
    return (
    <div>
        <h2>Carrito</h2>
        {cart.map((purchase)=>{
            console.log(purchase)
            return (
                <>
                    <div className='d-flex flex-column align-items-center' key={purchase.item.id}>
                        <p className='mt-1 fw-bold'>{purchase.quantity} x {purchase.item.nombre}</p>
                        <img src={require('../../assets/postres/brownies/' +purchase.item.foto +'.jpg')} className="w-25" alt="..."/>
                        <p className='mt-1'>${purchase.quantity*purchase.item.precio}</p>
                        <button className='mb-1 btn btn-danger' onClick={()=>removeItem(purchase.item.id)}>Borrar producto</button>
                    </div>
                    </>
                    )
        })}
        
        {/* <h2>Total:{valorTotal(50)}</h2> */}
    </div>
    )
}

export default Carrito
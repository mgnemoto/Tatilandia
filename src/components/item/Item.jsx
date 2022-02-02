import ItemCounter from '../counter/ItemCounter'
import './Item.css'
import { useState } from 'react'



const Item = (props) =>{
    const [count, setCount] = useState(1)

    function sumarItem(){
           setCount((prevState)=>prevState +1) 
        }

    function restarItem(){
        if(count > 1)
            setCount((prevState)=>prevState -1)
        }
        

    return(
        
            <div className="card">
                <img src={require('../../assets/postres/brownies/' +props.postre.foto +'.jpg')} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{props.postre.nombre}</h5>
                    <h5>${props.postre.precio}</h5>
                    <span>{count}</span>
                    <ItemCounter sumar={sumarItem} restar={restarItem}/>
                </div>
            </div>
        
    )
}

export default Item
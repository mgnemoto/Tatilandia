import { useState } from "react";
import './ItemCounter.css'

function ItemCount ({stock, initial}){
  const [count, setCount] = useState(initial)

    function sumarItem(){
        if (count < stock){
           setCount(count+1) 
        }
    }

    function restarItem(){
        if (count > initial){
            setCount(count-1)
        }
        
    }

  return(
      <>
        <div className="contador">
          <span className="cuenta">{count}</span>
          <div>
            <button className="btn btn-danger" onClick={restarItem}>-</button>
            <button className="btn btn-success" onClick={sumarItem}>+</button>
          </div>
        </div>
      </>
  )
}

export default ItemCount
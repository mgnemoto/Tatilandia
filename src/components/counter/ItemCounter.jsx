import './ItemCounter.css'

function ItemCount ({sumar, restar}){
  
  return(
      <>
        <div className="contador">
          <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <button className="btn btn-success" onClick={sumar}>+</button>
          </div>
        </div>
      </>
  )
}

export default ItemCount
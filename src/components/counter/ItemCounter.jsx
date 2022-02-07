import './ItemCounter.css'



function ItemCounter ({counter,setCounter}){

  

    function sumarItem(){
           setCounter((prevState)=>prevState +1) 
        }

    function restarItem(){
        if(counter > 1)
            setCounter((prevState)=>prevState -1)
        }
        
  
  return(
      <>
        <div className="contador">
          <div className='d-flex flex-column align-items-center'>
            <span>{counter}</span>
            <div>
              <button className="btn btn-danger" onClick={restarItem}>-</button>
              <button className="btn btn-success" onClick={sumarItem}>+</button>
            </div>
          </div>
        </div>
      </>
  )
}

export default ItemCounter
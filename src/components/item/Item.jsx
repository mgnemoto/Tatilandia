import ItemCounter from '../counter/ItemCounter'
import './Item.css'




const Item = (props) =>{
    return(
        
            <div className="card">
                <img src={require('../../assets/postres/brownies/' +props.postre.foto +'.jpg')} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{props.postre.nombre}</h5>
                    <h5>${props.postre.precio}</h5>
                    <ItemCounter stock={8} initial={0}/>
                </div>
            </div>
        
    )
}

export default Item
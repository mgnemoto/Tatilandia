import ItemCounter from '../counter/ItemCounter'


const ItemDetail = (props) => {
    return(
        <>
        <div className="row">
            <div className="d-flex flex-column col-lg-7 m-0">
                <h2 className='mb-5 mt-5'>{props.postre.nombre}</h2>
                <img src={require('../../assets/postres/brownies/' +props.postre.foto +'.jpg')} className="card-img-top w-75 m-2 borde" alt="..."/>
            </div>
            <div className="d-flex flex-column justify-content-around col-lg-5 m-0">
                <h3>Precio - $ {props.postre.precio}</h3>
                <div>
                    <h3>Descripción</h3>
                    <p>{props.postre.descripcion}</p>
                </div>
                <div className='padCount'>
                    <ItemCounter stock={8} initial={0}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
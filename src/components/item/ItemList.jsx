import { useEffect,useState } from 'react'
import './Item.css'
import Item from './Item'
import loader from '../../assets/iconos/loader 28px.svg'

const DULCES =[
    {id: 1,
    nombre: "Brownie de Oreo",
    precio: 250,
    foto: "oreo"
    },
    {id: 2,
    nombre: "Brownie de Dulce",
    precio: 200,
    foto: "ddl"
    },
    {id: 3,
    nombre: "Brownie de Nutella",
    precio: 300,
    foto: "nutella"
    }
]

const getDulces = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => 
            resolve(DULCES), 4000);
        })
    }

function ItemList(){
    const [postres, setPostres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        getDulces()
        .then((data)=>setPostres(data))
        .catch((error)=>console.error(error))
        .finally(()=>setIsLoading(false));
    }, []);




     return(
        <>
        {isLoading ? ( 
            <div className='d-flex justify-content-center'>
                <span className='cargando'>Cargando</span>
                <img src={loader} alt="" className='spinner' />
            </div>
        ):(
            <div>
                <h2>Productos</h2>
                <div className='d-flex '>
                        {postres.map((dulce)=>
                            <div key={dulce.id}>
                            
                                    <Item postre={dulce}/>
                    
                            </div>
                        )}
                </div>
            </div>
        )}
        </>
     )   
}
export default ItemList;
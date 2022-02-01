import './ItemDetail.css'
import ItemDetail from './ItemDetail'
import { useEffect,useState } from 'react'

const DULCES =[
    {id: 1,
    nombre: "Brownie de Oreo",
    precio: 250,
    foto: "oreo",
    descripcion: "Postre de chocolate, tipo brownie, relleno con galletitas Oreo"
    },
    {id: 2,
    nombre: "Brownie de Dulce",
    precio: 200,
    foto: "ddl",
    descripcion: "Postre de chocolate, tipo brownie, relleno con dulce de leche"
    },
    {id: 3,
    nombre: "Brownie de Nutella",
    precio: 300,
    foto: "nutella",
    descripcion: "Postre de chocolate, tipo brownie, relleno con Nutella"
    }
]

const getDulces = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => 
            resolve(DULCES), 4000);
        })
    }

function ItemDetailList(){
    const [postres, setPostres] = useState([]);

    useEffect(()=>{
        getDulces()
        .then((data)=>setPostres(data))
        .catch((error)=>console.error(error))
    }, []);
     return(
        <>
        {postres.map(
            (dulce) => (
            <div key={dulce.id}>
                <ItemDetail  postre={dulce}/>
            </div>
            )  
        )}
        </>
     )   
}
export default ItemDetailList

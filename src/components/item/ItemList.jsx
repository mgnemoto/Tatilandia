import { useEffect,useState } from 'react'
import './Item.css'
import Item from './Item'
import loader from '../../assets/iconos/loader 28px.svg'
import { getFirestore } from '../../firebase'


function ItemList(){
    const [postres, setPostres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const db = getFirestore();
        const productsCollection = db.collection('productos');
        
        
        const getDataFromFirestore = async () =>{
            setIsLoading(true);
            try{
            const response = await productsCollection.get();
            setPostres(response.docs.map((doc)=>({...doc.data(), id: doc.id})));}
            catch(err){setError(err)}
            finally{setIsLoading(false)};
            
        };
        
        getDataFromFirestore();

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
                <div className='d-flex flex-wrap justify-content-around'>
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
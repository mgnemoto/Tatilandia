// import './ItemDetail.css'
// import ItemDetail from './ItemDetail'
// import { useEffect,useState } from 'react'
// import { getFirestore } from '../../firebase';
// import loader from '../../assets/iconos/loader 28px.svg'


// function ItemDetailList(){
//     const [postres, setPostres] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(()=>{

//         const db = getFirestore();
//         const productsCollection = db.collection('productos');
//         console.log(productsCollection);
        
//         const getDataFromFirestore = async () =>{
//             setIsLoading(true);
//             try{
//             const response = await productsCollection.get();
//             setPostres(response.docs.map((doc)=>({...doc.data(), id: doc.id})));}
//             catch(err){setError(err)}
//             finally{setIsLoading(false)};
//         };
//         getDataFromFirestore();

//     }, []);

//      return(
//         <>
//         {isLoading ? ( 
//             <div className='d-flex justify-content-center'>
//                 <span className='cargando'>Cargando</span>
//                 <img src={loader} alt="" className='spinner' />
//             </div>
//             ):(
//                 <>
//             {postres.map(
//                 (dulce) => (
//                 <div key={dulce.id}>
//                     <ItemDetail  postre={dulce}/>
//                 </div>)  )}
//                 </>)
//             }
//         </>
//      )   
// }
// export default ItemDetailList

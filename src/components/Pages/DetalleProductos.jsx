import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../itemdetail/ItemDetail";
import { getFirestore } from "../../firebase";


const DetalleProductos=()=>{

    const { productId } = useParams();
    const [postre, setPostre] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("productos");
        const selectedProduct = productsCollection.doc(productId);

        setIsLoading(true);
        selectedProduct
        .get()
        .then((response) => {
            if (!response.exists) console.log("El producto no existe");
            setPostre({ ...response.data(), id: response.id });
        })
        .finally(() => setIsLoading(false));
    }, [productId]);

    if (isLoading || !postre) return <p>Cargando...</p>;
    return <ItemDetail postre={postre} />;
    }

export default DetalleProductos
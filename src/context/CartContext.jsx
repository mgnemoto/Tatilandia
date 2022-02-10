import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children})=>{
    


    // const [total, setTotal]=useState(0);

    //  const valorTotal = (precio) => {
    //     const arr = total
    //     setTotal(arr + precio)
    //  }

    // const cartButton = () =>{
    //     

    //     setCartCounter((prevState) => prevState +1)
    // }

    const [cart, setCart]= useState ([]);
    const [cartCounter, setCartCounter] = useState(0);

    const removeItem = (id,cantidad) =>{
        setCart((prev)=>prev.filter((element)=>element.item.id !== id));
        setCartCounter ((p)=>p-cantidad);
    }

    const addItem = (item,quantity) =>{
        setCartCounter ((p)=>p+quantity)
        const newItem = {item, quantity};
        setCart ((prevState)=> [...prevState, newItem]);
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, cartCounter}}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext)

import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState ([]);

    // const [total, setTotal]=useState(0);

    // const valorTotal = (precio) => {
    //     setTotal((prevState)=>prevState+precio)
    // }

    const removeItem = (id) =>{
        setCart((prev)=>prev.filter((element)=>element.item.id !== id));
    }

    const addItem = (item,quantity) =>{
        const newItem = {item, quantity};
        setCart ((prevState)=> [...prevState, newItem]);
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext)

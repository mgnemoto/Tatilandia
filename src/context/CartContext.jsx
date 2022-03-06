import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children})=>{
    

    const [cart, setCart]= useState ([]);
    const [cartCounter, setCartCounter] = useState(0);

    const removeItem = (id,cantidad) =>{
        setCart((prev)=>prev.filter((element)=>element.item.id !== id));
        setCartCounter ((p)=>p-cantidad);
    }

    const addItem = (item,quantity) =>{
        const itemIsInCart = cart.some((order)=>order.item.id ===item.id);
        const newItem = {item, quantity};
        if (itemIsInCart) {
            // Modificar la cantidad
            const updatedCart = cart.map((order) => {
              if (order.item.id === item.id) {
                return { ...order, quantity: quantity + order.quantity };
              } else {
                return order;
              }
            });
            setCart(updatedCart);
          } else {
            // Agregar nuevo elemento
            setCart ((prevState)=> [...prevState, newItem]);
          }
       
        setCartCounter ((p)=>p+quantity);
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, cartCounter}}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext)

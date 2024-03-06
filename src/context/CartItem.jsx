/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const cartLocal = JSON.parse(localStorage.getItem('cart'))
    const [cart, setCart] = useState(cartLocal)

    return(
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const CartList = CartContext
export default CartContextProvider
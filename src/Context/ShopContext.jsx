import { createContext, useState, useEffect } from 'react'
import useSneaker from '../Utils/useSneaker'


export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
    const [ cartItems, setCartItems ] = useState({})
    const { sneaker, isLoading } = useSneaker()

    useEffect(() => {
        if (!isLoading) {
            let defaultCart = {}
            sneaker.forEach((item) => {
                defaultCart[item.id] = 0
            })
            setCartItems(defaultCart)
        }
    }, [sneaker, isLoading])

    //___________________________________________
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = sneaker.find((shoe) => String(shoe.id) === String(item))
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item]
                } else {
                    console.warn(`The shoe found with id ${item} is not found`)
                }
            }
        }
        return totalAmount
    }

    //___________________________________________
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1}))
    }

    //___________________________________________
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1}))
    }

    //___________________________________________
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount}))
    }

    //___________________________________________
    const checkout = () => {
        setCartItems(getDefaulCart())
    }
    
    //___________________________________________
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        checkout
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
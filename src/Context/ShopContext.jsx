import { createContext, useState, useEffect, useMemo } from 'react'
import useSneaker from '../Utils/useSneaker'


export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
    const [ cartItems, setCartItems ] = useState({})
    const [searchTerm, setSearchTerm] = useState('')


    const { sneaker, isLoading } = useSneaker()

    const filteredSneakers = searchTerm 
    ? sneaker.filter((shoe) => shoe.name && shoe.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    : sneaker

    const defaultCart = useMemo(() => {
        let defaultCart = {}
        sneaker.forEach((item) => {
            defaultCart[item.id] = 0
        })
        return defaultCart
    }, [sneaker]) 

      useEffect(() => {
        if (!isLoading) {
          setCartItems(defaultCart)
        }
      }, [filteredSneakers, sneaker, isLoading, defaultCart])

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
        checkout,
        searchTerm,
        setSearchTerm
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
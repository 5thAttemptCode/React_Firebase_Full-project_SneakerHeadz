import { useState, useEffect } from "react"
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from './firebase.config'


const useSneaker = () => {
  
    const [ sneaker, setSneaker ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
      setIsLoading(true)
      const shoeRef = collection(db, "Sneaker")
      const q = query(shoeRef)
        getDocs(q)
         .then((querySnapshot) => {
           let sneaker = []
           querySnapshot.docs.forEach((doc) => {
             sneaker.push({ ...doc.data(), id: doc.id})
           })
           setSneaker(sneaker)
           setIsLoading(false)
        })
        .catch(err => {
        console.log(err.message)
        })
    }, [])

    return { sneaker, isLoading }
}

export default useSneaker
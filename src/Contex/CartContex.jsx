import { createContext, useEffect, useState } from "react";




export const CartContex = createContext(null)


export const CartContexProvider = ({children}) => {
   const [cart, setCart] = useState([]);
   const [totalItmes, setTotalItmes] = useState(0);
   const [total, setTotal] = useState(0);

   const addItem  = (item, quantity) => {
    
    // console.log(item)
    // console.log(quantity)

    setCart([...cart,{item,quantity}])
     const cartCopy = [...cart]

     const index  = cartCopy.findIndex(product => product.id === item.id)

     if(index != -1){
        cartCopy[index].quantity = cartCopy[index].quantity + quantity;
        cartCopy[index].subTotal =  cartCopy[index].price *  cartCopy[index].quantity
        setCart(cartCopy);

     }else{

      const  newItem = {
        ...item,
        quantity,
        subTotal : item.price * quantity
      }
      setCart([...cart, newItem])
     }
   }


   
  const removeItem  = (id) => {
    const cartFilter = cart.filter(item => item.id !== id);
    setCart(cartFilter);
   }
   
  const clearCart  = () => {
     setCart([]);
   }

  const handleTotalItems = () => {
    const newTotalItems = cart.reduce((acum,item)=>acum+item.quantity,0)
    setTotalItmes(newTotalItems)
  }

  const handleTotal = () =>{
    const newTotal = cart.reduce((acum,item) => acum + item.price *item.quantity,0);
    setTotal(newTotal)
  }

  useEffect(()=>{
    handleTotalItems();
    handleTotal();
  },[cart])
  

  return (
    <CartContex.Provider value={
      {
        cart,
        total,
        totalItmes, 
        addItem,
        removeItem,
        clearCart
      }
      }>
        {children} 
      </CartContex.Provider>)
}
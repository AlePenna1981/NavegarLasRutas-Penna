
import { useContext, useState } from "react"
import { CartContex } from "../../Contex/CartContex";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


export const CheckOut = () => {
 const {cart,total,clearCart} = useContext(CartContex);
 const [formCheckOut, setFormCheckOut] = useState({
  name:"",
  phone:0,
  email:""
 });

 const [orderId, setOrderId] = useState(null);

 const handleName = (e) => {
    setFormCheckOut({
      ...formCheckOut,
      name: e.target.value
    })
 }



 const handlePhone = (e) => {
    setFormCheckOut({
      ...formCheckOut,
      phone: e.target.value
  })
 }

 const handleEmail = (e) => {
    setFormCheckOut({
      ...formCheckOut,
      email: e.target.value
    })
 }
console.log(formCheckOut)

const handleSubmit = async (e) =>{
   e.preventDefault()
   const newOrder = {
    buyer: formCheckOut,
    items: cart,
    total,
    date: serverTimestamp()
   }
  const order = await addDoc(collection(db,"orders"), newOrder);

  setFormCheckOut({
    name:"",
    phone:0,
    email:""
  });

  clearCart();

  setOrderId(order.id);
}

   if(orderId){
    return <h3>Your order ID is: {orderId}</h3>
   }
   
  return (
    <div className='container d-flex justify-content-center m-5'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" className="form-control" value={formCheckOut.name} onChange={handleName}/>
        <label htmlFor="">Thelephone</label>
        <input type="number" className="form-control" value={formCheckOut.phone} onChange={handlePhone}/>
        <label htmlFor="">Email</label>
        <input type="email" className="form-control" value={formCheckOut.email} onChange={handleEmail}/>
        <input type="submit" className="mt-3 btn btn-success" value="Buy"/>

      </form>
    </div>
  )
}



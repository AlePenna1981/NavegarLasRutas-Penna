import { BiCart } from "react-icons/bi";
import  './CartWidget.css'
import { useContext } from "react";
import { CartContex } from "../../Contex/CartContex";

export const CartWidget = () => {
  const {totalItmes} = useContext(CartContex)
  return (
    <div className='carrito'>
        <BiCart size={40}/>
        <strong>{totalItmes}</strong>

    </div>
  )
}

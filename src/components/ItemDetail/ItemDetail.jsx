import { useContext, useEffect } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import './itemDetail.css'
import { CartContex } from "../../Contex/CartContex";

export const ItemDetail = ({ id, img, price, stock, brand, description }) => {

  const {addItem,cart} = useContext(CartContex); 
  // const {addItem,cart,mensaje} = objetValues;

  const onAdd = (quantity) => {
    const item = {
      id,
      price,
      brand
    }
    addItem(item, quantity); 
    
  }
   useEffect(()=>{console.log(cart)},[cart])

  return (
    <div>
      <div className="card2">
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <img className="img" src={img} alt="" />
          <h3 className="card-text">{description}</h3>
          <h3 className="price">Price: {price}</h3>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};


import { useState } from "react";
import './itemCount.css'

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="caja2">
      <div>
        <button className="btn2" onClick={decrement}>
          -
        </button>
        <strong>{count}</strong>
        <button className="btn2" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn2" onClick={()=>onAdd(count)} >Add To Cart</button>
    </div>
  );
};

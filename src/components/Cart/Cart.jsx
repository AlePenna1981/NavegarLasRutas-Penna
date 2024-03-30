import  { useContext } from "react"; 
import { CartContex } from "../../Contex/CartContex";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart, clearCart, removeItem, total } = useContext(CartContex); 



  return (
    <>
      <div className="container my-4">
        {cart.map((item) => (
          <div key={item.id} className="d-flex flex-column p-3 my2 border border-1 w-50">
            <p key={item.id}>Product: {item.brand}</p>
            <p>Price Product: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>          
            <p>Subtotal: ${item.subTotal}</p>
            <div>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
              Remove
            </button> 
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        {total>0 ? (
        <>
            <h2>Total ${total}</h2>
            <button className="btn btn-outline-success" onClick={clearCart}>
            Clear
          </button>
          <Link to="/checkout">
          <button className="btn btn-success">Buy</button>
          </Link>
        </>
        ) : ( <h2>Empty Cart</h2>)
        }
        
      </div>
    </>
  );
};

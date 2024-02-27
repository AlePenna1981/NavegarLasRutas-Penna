import { Link } from "react-router-dom";
import './Item.css'
export const Item = ({ id, brand, img}) => {
  return (
    <div >
        <div className="card">
          <h5 >{brand}</h5>
          <img className="img" src={img} alt="" />
          <Link to={`/item/${id}`} >
            <button className="btn3">Details</button>
          </Link>
        </div>
      
    </div>
  );
};

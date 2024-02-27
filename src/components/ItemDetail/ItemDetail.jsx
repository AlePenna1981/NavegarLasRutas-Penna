import { ItemCount } from "../ItemCount/ItemCount";
import './itemDetail.css'
export const ItemDetail = ({ img, price, stock,brand,description }) => {

  return (
    <div>
      <div className="card2 ">
        <div className="card-body ">
          <h2 className="card-title">{brand}</h2>
          <img className="img" src={img} alt="" />
          <h3 className="card-text"> {description} </h3>
          <h3 className="price">Price: {price} </h3>
          <ItemCount stock={stock} />
        </div>
      </div>
    </div>
  );
};

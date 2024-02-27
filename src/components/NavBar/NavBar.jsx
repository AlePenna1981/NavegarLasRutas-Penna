import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css'
export const NavBar = () => {
  return (
    <nav className="box">
      <h4 className="title">.The Bass Shop</h4>
      <div className="cajaBtn">
        <Link to="/">
          <button className="btn1">Home</button>
        </Link>
        <Link to="/type/jb">
          <button className="btn1">JBass</button>
        </Link>
        <Link to="/type/pb">
          <button className="btn1">PBass</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

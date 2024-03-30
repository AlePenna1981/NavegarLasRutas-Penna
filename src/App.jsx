import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Cart } from "./components/Cart/Cart";
import { CheckOut } from "./components/CheckOut/CheckOut";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'
import { CartContexProvider } from "./Contex/CartContex";
export const App = () => {
  return (
    <>
      <CartContexProvider>
        <BrowserRouter>
             <NavBar /> 
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/type/:type" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkOut" element={<CheckOut />} /> 
                <Route path="/item/:id" element={<ItemDetailContainer />} />
              </Routes>
        </BrowserRouter>
      </CartContexProvider>  
    </>
  );
};

export default App;
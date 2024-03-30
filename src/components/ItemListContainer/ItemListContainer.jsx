import { cloneElement, useEffect, useState } from "react";
// import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import  './itemListContainer.css'
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { seedProducts } from "../../utils/seedProducts";


export const ItemListContainer = () => {

  const { type } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = (type) => {
    const myProducts = type ? query(collection(db,"products"), where("type","==", type)) : collection(db,"products");

    getDocs(myProducts)
    .then(response=>{
     
      const productList = response.docs.map(doc => {
        const item = {
          id : doc.id,
          ...doc.data()
        }
        return item;
      })
       setProducts(productList);
       setIsLoading(false);
    })
  }
  

  useEffect( () => { 
    setIsLoading(true)
    getProductsDB(type);
    // seedProducts();
   }, [type] )

  return (
    <>
    { isLoading ? <h2>Loading products ...</h2> : <ItemList products={products} /> }
    </>
  )
}

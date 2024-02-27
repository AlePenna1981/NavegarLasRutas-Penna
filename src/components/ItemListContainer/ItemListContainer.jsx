import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import  './itemListContainer.css'


export const ItemListContainer = () => {

  const { type } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => { 
    setIsLoading(true);
    getProducts()
      .then( resp => {
        if(type) {
          const productsFilter = resp.filter( product => product.type === type );
          setProducts(productsFilter)
        } else {
          setProducts(resp);
        }
          setIsLoading(false);
      })

   }, [type] )

  return (
    <>
    { isLoading ? <h2>Loading products ...</h2> : <ItemList products={products} /> }
    </>
  )
}

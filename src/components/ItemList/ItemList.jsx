import { Item } from "../Item/Item"
import './ItemList.css'

export const ItemList = ({products}) => {
  return (
    
    <div className="containerPrincipal">
        <h1 className="pTitle">Bassinga</h1>
        <h3 className="sTitle">The best place to find your Bass</h3>
        {products.map( product => <Item key={product.id} {...product}  />)}
    </div>
  )
}

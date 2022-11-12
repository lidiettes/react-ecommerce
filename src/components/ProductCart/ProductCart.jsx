import React from 'react'
import './ProductCart.css'

const ProductCart = ({ items, removeCart }) => {
    console.log();
    return (
        
        <div >
            {
                items.length > 0  ? 
                    ( items.map((item, indice) => {   //incluyendo indice solventamos el error de las key iguales
                    return (
                        <div className="containerProductCart" key={indice} >
                            <img className="imgProductCart" src={item.img} alt={item.name} />
                            <div className="infoProductCart">{item.name}  {item.price} €
                                <button className="buttonDelete" type="submit" value='add' onClick={() => { removeCart(indice) }} >Delete</button>
                            </div>
                            <hr />
                        </div>
                            ) 
                            
                }))
                
                : "Your bag is empty"
                
                
                
            }
            
        </div>

    )
    
}

export default ProductCart
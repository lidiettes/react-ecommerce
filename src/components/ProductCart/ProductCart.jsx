import React from 'react'
import './ProductCart.css'

const ProductCart = ({ items, removeCart }) => {
    return (
        <>
            <div >
                {items && items.map((item, indice) => {   //incluyendo indice solventamos el error de las key iguales
                    return (
                        <div className='containerProductCart' key={indice} >
                            <img className="imgProductCart" src={item.img} alt={item.name} />
                            <div className='infoProductCart'>{item.name}  {item.price} €
                                <button className="buttonDelete" type="submit" value='add' onClick={() => { removeCart(indice) }} >Delete</button>
                            </div>
                            <hr />
                        </div>
                    )
                }) || "El carrito está vacio"}
            </div>
        </>
    )
}

export default ProductCart
import React from 'react'
import '../ProductCart/ProductCart.css'

const Wishlist = ({ removeCart, wishes }) => {


    return (
        <>
            <h2>Saved Items</h2>

                {wishes && wishes?.map((wish, indice) => {
                    return (
                        <div className='containerProductCart' key={indice} >
                            <img className="imgProductCart" src={wish.img} alt={wish.name} />
                            <div className='infoProductCart'>
                                <div >{wish.name}  {wish.price} €</div>
                                <button className="buttonDeleteWish" type="submit" value='add' onClick={() => { removeCart(indice) }} ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                <button className="button" type="submit" value='add' onClick={() => { removeCart(indice) }} >Move to bag</button>

                            </div>
                            <hr />
                        </div>
                    )
                }) || "no items found"}

            
        </>
    );
};

export default Wishlist;
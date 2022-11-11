import React from 'react'


const Wishlist = ({removeCart, wishes}) => {


    return (
        <>
            <div>Wishlist listado </div>
            
            <ul>
                {( wishes && wishes?.map((wish, indice ) => (
                    <li key={indice}>
                        <span>{wish.name}</span>
                        <button onClick={()=>removeCart(indice)}>Delete</button>
                    </li>
                ))) || "no items found"}

            </ul>
        </>
    );
};

export default Wishlist;
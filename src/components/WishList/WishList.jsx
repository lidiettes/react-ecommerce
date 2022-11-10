import React from 'react'






const Wishlist = ({handleRemove, initialState}) => {




    return (
        <>
            <div>Wishlist listado </div>
            <div>name</div>
            <ul>
                {(initialState && initialState?.map(({ id, name }) => (
                    <li key={id}>
                        <span>{name}</span>
                        <button onClick={()=>handleRemove(id)}>Delete</button>
                    </li>
                ))) || "no items found"}

            </ul>
        </>
    );
};

export default Wishlist;
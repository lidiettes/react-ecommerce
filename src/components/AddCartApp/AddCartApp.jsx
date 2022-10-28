import React, { useState, useEffect } from 'react';
import ProductsInfo from '../../assets/db';

const AddCartApp = () => {

    const listItems = ProductsInfo.map(el =>
        <div key={el.id}>
           {`${el.name}`} 
        </div>
    ))


    return (
        <div>AddCartApp</div>
    )
}

export default AddCartApp
import React from 'react'
import Items from '../../assets/db'
import './Search.css'

const Search = () => {

    // const filteredItems = Items.filter(item => (
    //     item.name.includes(text);
    // ))


    return (
        <div className="searchContainer">
            <input type="search" name="Busquedademueble" placeholder="Introduce aqui tu mueble..."></input>
            {/* <input className='buttonSearch' type="submit" value="Buscar" onClick={filteredItems()}></input> */}
        </div>
    )
}

export default Search
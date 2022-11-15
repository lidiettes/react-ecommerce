import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Items from '../../assets/db'
import './Search.css'

const Search = ({handleFilter, filter}) => {

    



    return (
        <div className="searchContainer">
            <input value={filter} type="text" name="filter" placeholder="Search..."onChange={handleFilter}></input>
            {/* <input className='buttonSearch' type="submit" value="Buscar" ></input> */}
        </div>
    )
}

export default Search
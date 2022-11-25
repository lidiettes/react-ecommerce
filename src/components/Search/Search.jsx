import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Items from '../../assets/db'
import './Search.css'

const Search = ({handleFilter, filter}) => {

    



    return (
        <div className="searchContainer">
            <input className="inputSearch"value={filter} type="text" name="filter" placeholder="Search..." onChange={handleFilter}></input>
        </div>
    )
}

export default Search
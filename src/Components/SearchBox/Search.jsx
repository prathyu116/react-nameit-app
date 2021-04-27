import React from 'react'
import './Search.css'
const Search = ({onInputChange}) => {
    return (
        <div className="search-container">
            <input onChange={(event)=>onInputChange(event.target.value)} type="text" className="search-box" placeholder="search keywords..."/>
            
        </div>
    )
}

export default Search

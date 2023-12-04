import React, { useState } from 'react'
import './style.css'
import { MagnifyingGlass } from '@phosphor-icons/react'


const SearchBar = ({onSearch}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        onSearch(e.target.value)
    }

    return (
        <div className='search-bar'>
            <input
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={handleInputChange}
                aria-label="Search Bar"
            />
            <span><MagnifyingGlass size={20} /></span>
        </div>
    )
}

export default SearchBar
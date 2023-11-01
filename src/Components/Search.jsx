import React from 'react'
import {FaSearch} from "react-icons/fa"
const Search = () => {
  return (
    <div className = "relative top-0 w-1/5 h-10 p-2 ">
        <FaSearch className = " translate-y-[20px] ml-1 pl-1 text-white"/>
        <form className = " flex-row w-full border-2 border-solid border-white rounded-lg">
            <input className = "bg-transparent w-full" type = "search" placeholder = ""></input>
        </form>
    </div>
  )
}

export default Search
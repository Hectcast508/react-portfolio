import React from "react";
import Nav from "./Nav";



export default function Header({ currentPage, handlePageChange }) {

  return (
    <header>
      <h1>
        Hector Castaneda
      </h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
    
  )
}

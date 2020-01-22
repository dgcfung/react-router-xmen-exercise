import React from 'react'
import {NavLink} from 'react-router-dom'


function Header(props){
    return(
    <div className= "header-title">
        <nav className="nav-links">
        <NavLink className = "home" to ='/'>Home</NavLink>
        </nav>

        <h1>X-Facebook</h1>
    </div>
    )
}

export default Header
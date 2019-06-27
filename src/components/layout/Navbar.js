import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../Login'
import Registration from '../Registration'
import './Navbar.css'

// import SearchForm from '../search/SearchForm'



const divStyle = {
    fontSize: '3em'
}


const Navbar = () => {
    
    return (
        <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            DAD JOKES
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <NavLink className="nav-links" to='/'>Home</NavLink>
        <NavLink className="nav-links" to='/signin'>Sign In</NavLink>
        <NavLink className="nav-links" to='/signup'>Sign Up</NavLink>
        <NavLink className="nav-links" to='/addjokes'>Add Jokes</NavLink>
        <NavLink className="nav-links" to='/jokesearch'>Search Jokes</NavLink>
        </div>
       
        
    
    
    

    )
}

           




export default Navbar;
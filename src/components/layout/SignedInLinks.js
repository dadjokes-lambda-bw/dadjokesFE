import React from 'react'
import { NavLink } from 'react-router-dom'



const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'></NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'>Add A Joke</NavLink></li>
            <li><NavLink to='/'>Search Jokes</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-3">DJ</NavLink></li>
        </ul>
    )
}




export default SignedInLinks;
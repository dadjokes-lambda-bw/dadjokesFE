import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import Registration from '../Registration'
// import SignedOutLinks from './SignedOutLinks'
// import SearchForm from '../search/SearchForm'



const divStyle = {
    fontSize: '3em'
}


const Navbar = () => {
    return (
    <nav  className="nav-wrapper blue lighten-1"  >
        <div className="container" > <Link to='/' style={divStyle}  className="brand-logo">DAD JOKES</Link>
            <Login />
            <Registration />
            {/* <SearchForm /> */}
           
        </div>
    </nav>
    )
}




export default Navbar;
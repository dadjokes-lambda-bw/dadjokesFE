import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
// import SearchForm from '../search/SearchForm'



const divStyle = {
    fontSize: '3em'
}


const Navbar = () => {
    return (
    <nav  className="nav-wrapper blue lighten-1"  >
        <div className="container" > <Link to='/' style={divStyle}  className="brand-logo">DAD JOKES</Link>
            <SignedInLinks />
            <SignedOutLinks />
            {/* <SearchForm /> */}
           
        </div>
    </nav>
    )
}




export default Navbar;
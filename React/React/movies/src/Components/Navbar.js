import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <nav className='nav-styles'>
            <h1>Logo</h1>
            <ul className='list'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/about'>
                <li>About</li>
                </Link>
                <Link to='/movies'>
                <li>Movies</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar

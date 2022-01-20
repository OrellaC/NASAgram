import React from 'react';
import { Link } from 'react-router-dom'

//css
import '../CSS-Folder/nav.css'

const Nav = () => {
    return (
        <nav>
            {/* Link is the React router dom way of doing anchor tages <a> */}
            <Link to='/'>Home</Link>
            <Link to='nasalist'> NASA List</Link>
            <Link to='about'>About</Link>
            <Link to='giphy'>Giphy</Link>
        </nav>
    );
}

export default Nav;

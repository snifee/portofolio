import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return ( 
        <div className="navbar-container">
            <nav className="navbar">
                <h1>Arfal Portfolio's</h1>
                <div className="links">
                    <Link to="/portofolio/">Home</Link>
                    <Link to="/tags">Tags</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </div>
        
     );
}
 
export default Navbar;

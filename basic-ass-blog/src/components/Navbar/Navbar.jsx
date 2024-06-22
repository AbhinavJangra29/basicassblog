import React from 'react';
import './Navbar.css'; // Import the CSS file for styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Abhinav ka Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="new-blog">New Blog</a>
            </div>
        </nav>
    );
};

export default Navbar;

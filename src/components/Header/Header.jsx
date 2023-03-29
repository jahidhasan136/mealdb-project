import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <img src="../../../public/New Project.png" alt="" />
            <div className='search-bar'>
                <input type="text" name="" id="" placeholder='Search Food Name' />
            </div>
            <div className='section-link'>
                <a href="">Home</a>
                <a href="">Food List</a>
                <a href="">Discount percentage</a>
                <a href="">About</a>
            </div>
        </div>
    );
};

export default Header;
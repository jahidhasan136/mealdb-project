import React from 'react';
import './Header.css';
import logo from '../../assets/new-project.png';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <div className='search-bar'>
                <input type="text" name="" id="" placeholder='search food name' />
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
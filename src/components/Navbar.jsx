import React from 'react';
import user from './images/user.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='profil'>
            <div className='profil_name'>NAME</div>
            <img src={user} className='profil_img' alt='user'/>
        </div>
    )
}

export default Navbar
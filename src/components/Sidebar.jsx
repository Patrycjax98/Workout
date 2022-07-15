import React, { useState } from "react";
import './Sidebar.css';
import {FaBars} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {menuItem} from "./MenuItems";

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='container'>
            <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
                <div className='top_section'>
                    <img src='https://cdn-icons.flaticon.com/png/512/2749/premium/2749673.png?token=exp=1657895643~hmac=7c41fae602d60ec8edf2271ca1e6bf19' alt='logo' style={{display: isOpen ? "block" : "none"}} className='logo'/>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className='link' activeClassName='active'>
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main style={{width: isOpen ? "calc(100vw - 250px)" : "calc(100vw - 50px)"}} >{children}</main>
        </div>
    )
}

export default Sidebar;
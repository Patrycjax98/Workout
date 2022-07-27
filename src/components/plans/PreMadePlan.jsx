import React from "react";
import {menuPlans} from "./MenuPlans";
import {NavLink} from "react-router-dom";
import './Plan.css'

const PreMadePlan = () => {
    return (
        <div className='PreMadePlan_box'>
            {
                menuPlans.map((item, index) =>(
                    <NavLink to={item.path} key={index} className='PreMadePlan_link'>
                        <img src={item.img} className='PreMadePlan_img' alt={'img'}/>
                        <div className='PreMadePlan_title'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default PreMadePlan;
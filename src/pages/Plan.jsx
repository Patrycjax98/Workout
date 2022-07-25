import React from "react";
import {NavLink} from "react-router-dom";
import '../components/plans/Plan.css'
import {HiOutlinePlus} from "react-icons/hi";

const Plan = () => {
    return (
        <div className='plan_box'>
            <div>
                <NavLink to='/plan/OwnPlan' className='OwnPlan_style'>
                    <HiOutlinePlus className='plan_icon'/>
                    <div className='plan_text'>Own plan</div>
                </NavLink>
            </div>
            <div>
                <NavLink to='/plan/PreMadePlan' className='PreMadePlan_style'>
                    <HiOutlinePlus className='plan_icon'/>
                    <div className='plan_text'>Pre- made Plan</div>
                </NavLink>
            </div>
        </div>
    )
}


export default Plan;
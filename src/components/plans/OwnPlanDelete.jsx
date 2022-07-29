import React from 'react';
import './Plan.css'

const OwnPlanDelete = ({deleteAllMeals}) => {
    return (
        <div>
            <button className="buttonOwnPlan" onClick={()=>deleteAllMeals()}>New PLan</button>

        </div>
    )
}

export default OwnPlanDelete;
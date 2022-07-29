import React from 'react';
import './Plan.css'

const OwnPlanDelete = ({deleteAllExercises}) => {
    return (
        <div>
            <button className="buttonOwnPlan" onClick={()=>deleteAllExercises()}>New PLan</button>

        </div>
    )
}

export default OwnPlanDelete;
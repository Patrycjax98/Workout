import React from "react";



const OwnPlanInputs = ({addMealsHandler, calories, mealName,calories2, calories3, setCalories, setMealName, setCalories2, setCalories3}) => {

    const onAddMealClick = () => {
        addMealsHandler();
    }
    return (
        <div>
            <input type="text" placeholder='Exercise' value={mealName} onChange={(e) => setMealName(e.target.value)}/>
            <input type='number' placeholder='1 Series' value={calories} onChange={(e) =>setCalories(e.target.value)}/>
            <input type='number' placeholder='2 Series' value={calories2} onChange={(e) =>setCalories2(e.target.value)}/>
            <input type='number' placeholder='3 Series' value={calories3} onChange={(e) =>setCalories3(e.target.value)}/>
            <button onClick={onAddMealClick}>Add Exercise</button>

        </div>
    )
}


export default OwnPlanInputs;
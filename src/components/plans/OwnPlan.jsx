import React, {useState, useEffect} from "react";
import OwnPlanBar from "./OwnPlanBar";
import OwnPlanDelete from "./OwnPlanDelete";
import OwnPlanInputs from "./OwnPlanInputs";
import OwnPlanExerciseList from "./OwnPlanExerciseList";



const OwnPlan = () => {
    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState("")
    const [calories, setCalories] = useState(0);
    const [calories2, setCalories2] = useState(0);
    const [calories3, setCalories3] = useState(0);

    const addMealsHandler = () => {
        const oldMeal = meals ? [...meals] :[];
        const meal = {
            mealName,
            calories,
            calories2,
            calories3
        };
        const newMeals = oldMeal.concat(meal);
        setMeals(newMeals)

        if(calories <= 0 || mealName === "" || calories2 <= 0 || calories3 <= 0){
            alert("must not be empty")
        }else {
            setMeals(newMeals);
            localStorage.setItem("meals", JSON.stringify(newMeals));
        }

        setMealName("")
        setCalories(0)
        setCalories2(0)
        setCalories3(0)

    };

    const deleteMealHandler = (id) => {
        const oldMeals = [...meals];
        const newMeals = oldMeals.filter((meal)=>meal.id !==id);

        setMeals(newMeals);
        localStorage.setItem("meals", JSON.stringify(newMeals));
    };
    const deleteAllMeals = () => {
        setMeals([]);
        localStorage.clear();
    }
    useEffect(() =>{
        const localStorageMeals = JSON.parse(localStorage.getItem("meals"));
        setMeals(localStorageMeals);
    },[setMeals]);

    return (
        <div>
            <OwnPlanBar/>
            <OwnPlanDelete deleteAllMeals = {deleteAllMeals}/>
            <OwnPlanInputs addMealsHandler={addMealsHandler} mealName={mealName} calories={calories} setMealName={setMealName} setCalories={setCalories} setCalories2={setCalories2} setCalories3={setCalories3}/>
            <div>
                <OwnPlanExerciseList meals={meals} deleteMealHandler={deleteMealHandler}/>
            </div>
        </div>
    )
}


export default OwnPlan;

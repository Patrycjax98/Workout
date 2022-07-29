import React, {useState, useEffect} from "react";
import OwnPlanDelete from "./OwnPlanDelete";
import OwnPlanInputs from "./OwnPlanInputs";
import OwnPlanExerciseList from "./OwnPlanExerciseList";



const OwnPlan = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseName, setExerciseName] = useState("")
    const [series, setSeries] = useState(0);
    const [series2, setSeries2] = useState(0);
    const [series3, setSeries3] = useState(0);

    const addExercisesHandler = () => {
        const oldExercise = exercises ? [...exercises] :[];
        const exercise = {
            exerciseName,
            series,
            series2,
            series3
        };
        const newExercises = oldExercise.concat(exercise);
        setExercises(newExercises)

        if(series <= 0 || exerciseName === "" || series2 <= 0){
            alert("must not be empty")
        }else {
            setExercises(newExercises);
            localStorage.setItem("exercises", JSON.stringify(newExercises));
        }

        setExerciseName("")
        setSeries(0)
        setSeries2(0)
        setSeries3(0)

    };

    const deleteExerciseHandler = (id) => {
        const oldExercises = [...exercises];
        const newExercises = oldExercises.filter((exercise)=>exercise.id !==id);

        setExercises(newExercises);
        localStorage.setItem("exercises", JSON.stringify(newExercises));
    };
    const deleteAllExercises = () => {
        setExercises([]);
        localStorage.clear();
    }
    useEffect(() =>{
        const localStorageExercises = JSON.parse(localStorage.getItem("exercises"));
        setExercises(localStorageExercises);
    },[setExercises]);

    return (
        <div>
            <OwnPlanDelete deleteAllExercises = {deleteAllExercises}/>
            <OwnPlanInputs addExercisesHandler={addExercisesHandler} exerciseName={exerciseName} series={series} setExerciseName={setExerciseName} setSeries={setSeries} setSeries2={setSeries2} setSeries3={setSeries3}/>
            <div>
                <OwnPlanExerciseList exercises={exercises} deleteExerciseHandler={deleteExerciseHandler}/>
            </div>
        </div>
    )
}


export default OwnPlan;

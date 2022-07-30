import React from "react";
import {BsPlusSquareDotted} from "react-icons/bs";


const OwnPlanInputs = ({addExercisesHandler, series, exerciseName,series2, series3, setSeries, setExerciseName, setSeries2, setSeries3}) => {

    const onAddExerciseClick = () => {
        addExercisesHandler();
    }
    return (
        <div>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"250px", marginTop:'20px', height:'30px',marginRight:'20px', border: '3px solid #387BFF'}} type="text" placeholder='Exercise' value={exerciseName} onChange={(e) => setExerciseName(e.target.value)}/>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"100px", marginTop:'20px', height:'30px',marginRight:'20px', border: '3px solid #387BFF'}} type='number' placeholder='1 Series' value={series} onChange={(e) =>setSeries(e.target.value)}/>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"100px", marginTop:'20px', height:'30px',marginRight:'20px', border: '3px solid #387BFF'}} type='number' placeholder='2 Series' value={series2} onChange={(e) =>setSeries2(e.target.value)}/>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"100px", marginTop:'20px', height:'30px',marginRight:'20px', border: '3px solid #387BFF'}} type='number' placeholder='3 Series' value={series3} onChange={(e) =>setSeries3(e.target.value)}/>
            <button style={{backgroundColor:"#387BFF", color:'#000000',height:'30px',width:"200px",fontSize:'20px', borderRadius:'10px', border:'3px solid #21222D',display:'flex',alignItems:'center', justifyContent:'center', marginTop:'10px', marginBottom:'30px'}} onClick={onAddExerciseClick}>
                <BsPlusSquareDotted/>
                <div style={{marginLeft:"10px"}}>Add Exercise</div>
            </button>

        </div>
    )
}


export default OwnPlanInputs;
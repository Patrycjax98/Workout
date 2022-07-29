import React from "react";
import {BsPlusSquareDotted} from "react-icons/bs";


const OwnPlanInputs = ({addMealsHandler, calories, mealName,calories2, calories3, setCalories, setMealName, setCalories2, setCalories3}) => {

    const onAddMealClick = () => {
        addMealsHandler();
    }
    return (
        <div>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"250px", marginTop:'20px', height:'30px',marginRight:'20px'}} type="text" placeholder='Exercise' value={mealName} onChange={(e) => setMealName(e.target.value)}/>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"100px", marginTop:'20px', height:'30px',marginRight:'20px'}} type='number' placeholder='1 Series' value={calories} onChange={(e) =>setCalories(e.target.value)}/>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"100px", marginTop:'20px', height:'30px',marginRight:'20px'}} type='number' placeholder='2 Series' value={calories2} onChange={(e) =>setCalories2(e.target.value)}/>
            <input style={{ backgroundColor:'#21222D',color:'#87888C', borderRadius:'10px',width:"100px", marginTop:'20px', height:'30px',marginRight:'20px'}} type='number' placeholder='3 Series' value={calories3} onChange={(e) =>setCalories3(e.target.value)}/>
            <button style={{backgroundColor:"#387BFF", color:'#000000',height:'30px',width:"200px",fontSize:'20px', borderRadius:'10px', border:'3px solid #21222D',display:'flex',alignItems:'center', justifyContent:'center', marginTop:'10px', marginBottom:'30px'}} onClick={onAddMealClick}>
                <BsPlusSquareDotted/>
                <div style={{marginLeft:"10px"}}>Add Exercise</div>
            </button>

        </div>
    )
}


export default OwnPlanInputs;
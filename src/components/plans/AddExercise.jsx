import * as React from 'react';
import AddExerciseSelect from "./AddExerciseSelect";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";


const AddExercise = () => {
    const [addFormData, setAddFormData] = useState({
        Exercise: '',
        firstSeries: '',
        secondSeries: '',
        thirdSeries: '',
        fourthSeries: '',
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };


    return (
        <Box style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
            <div style={{fontSize:'50px', fontWeight:'bold', marginBottom:'20px', color:'#387BFF'}}>Add Exercise</div>
            <form>
                <AddExerciseSelect name="Exercise" onChange={handleAddFormChange}/>
                <div>
                    <TextField
                        id="outlined-number"
                        name="firstSeries"
                        label="1 Series"
                        type="number"
                        onChange={handleAddFormChange}
                        style={{ backgroundColor:'#21222D', borderRadius:'15px',width:"400px", marginTop:'20px'}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-number"
                        name="secondSeries"
                        label="2 Series"
                        type="number"
                        onChange={handleAddFormChange}
                        style={{color:'#387BFF', backgroundColor:'#21222D', borderRadius:'15px',width:"400px",marginTop:'20px'}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-number"
                        name="thirdSeries"
                        label="3 Series"
                        type="number"
                        onChange={handleAddFormChange}
                        style={{color:'#387BFF', backgroundColor:'#21222D', borderRadius:'15px',width:"400px",marginTop:'20px'}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-number"
                        name="fourthSeries"
                        label="4 Series"
                        type="number"
                        onChange={handleAddFormChange}
                        style={{color:'#387BFF', fontSize:'24px', backgroundColor:'#21222D', borderRadius:'15px',width:"400px",marginTop:'20px'}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <input type='submit' value='SUBMIT' style={{color:'#000000', fontSize:'30px', backgroundColor:'#387BFF', borderRadius:'15px',width:"400px",marginTop:'60px'}}/>
                </div>
            </form>


        </Box>
    );
};

export default AddExercise;
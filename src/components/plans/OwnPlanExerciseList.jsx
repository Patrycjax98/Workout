import React from 'react';
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import {RiDeleteBin5Line} from "react-icons/ri";

const OwnPlanExerciseList = ({exercises, deleteExerciseHandler}) => {


    return (
        <div>
            <TableContainer style={{borderRadius: 15, border: "3px solid #FFFFFF"}}>
                <Table>
                    <TableHead style={{backgroundColor: '#387BFF',color: '#000000', height:'40px', fontSize:'25px'}}>
                        <TableRow>
                            <th align="center">Exercise</th>
                            <th align="center">1 Series</th>
                            <th align="center">2 Series</th>
                            <th align="center">3 Series</th>
                            <th align="center">Action</th>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{backgroundColor: '#21222D',color: '#FFFFFF',fontSize: '25px'}}>
                        {exercises?.map((exercise, index) =>(
                            <TableRow key={index}>
                                <td align="center">{exercise.exerciseName}</td>
                                <td align="center">{exercise.series}</td>
                                <td align="center">{exercise.series2}</td>
                                <td align="center">{exercise.series3}</td>
                                <td align="center">
                                    <div style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
                                        <RiDeleteBin5Line onClick={()=>deleteExerciseHandler(exercise.id)}/>
                                    </div>
                                </td>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default OwnPlanExerciseList;




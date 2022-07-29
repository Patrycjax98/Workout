import React from 'react';
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import {RiDeleteBin5Line} from "react-icons/ri";

const OwnPlanExerciseList = ({meals, deleteMealHandler}) => {


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
                        {meals?.map((meal, index) =>(
                            <TableRow key={index}>
                                <td align="center">{meal.mealName}</td>
                                <td align="center">{meal.calories}</td>
                                <td align="center">{meal.calories2}</td>
                                <td align="center">{meal.calories3}</td>
                                <td align="center">
                                    <div style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
                                        <RiDeleteBin5Line onClick={()=>deleteMealHandler(meal.id)}/>
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




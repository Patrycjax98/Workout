import React from 'react';
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";

const OwnPlanExerciseList = ({meals, deleteMealHandler}) => {


    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th align="center">Exercise</th>
                            <th align="center">1 Series</th>
                            <th align="center">2 Series</th>
                            <th align="center">3 Series</th>
                            <th align="center">Action</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {meals?.map((meal, index) =>(
                            <TableRow key={index}>
                                <td align="center">{meal.mealName}</td>
                                <td align="center">{meal.calories}</td>
                                <td align="center">{meal.calories2}</td>
                                <td align="center">{meal.calories3}</td>
                                <td align="center">
                                    <button onClick={()=>deleteMealHandler(meal.id)}>Delete</button>
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




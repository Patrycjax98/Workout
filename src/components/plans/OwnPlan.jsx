import React from "react";
import {NavLink} from "react-router-dom";
import {HiOutlinePlus} from "react-icons/hi";
import './Plan.css';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

const StyledTableRow = styled(TableRow)(({ theme }) => ({

    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#387BFF',
        color: '#000000',
        fontSize: '20px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: '#21222D',
        color: '#FFFFFF',
    },
}));



const OwnPlan = () => {

    return (
        <div>
            <div className='box_button' >
                <NavLink className='add_button' to={'/plan/OwnPlan/AddExercise'}>
                    <HiOutlinePlus style={{marginRight:'10px'}}/>
                    <div>Add Exercise</div>
                </NavLink>
            </div>

            <h1>
                <form >
                    <TableContainer component={Paper} style={{borderRadius: 20, border: "3px solid #FFFFFF", marginTop:'40px'}}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Exercise</StyledTableCell>
                                    <StyledTableCell align="right">1 Series</StyledTableCell>
                                    <StyledTableCell align="right">2 Series</StyledTableCell>
                                    <StyledTableCell align="right">3 Series</StyledTableCell>
                                    <StyledTableCell align="right">4 Series</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <StyledTableRow >
                                        <StyledTableCell align="left">1</StyledTableCell>
                                        <StyledTableCell align="right">1</StyledTableCell>
                                        <StyledTableCell align="right">1</StyledTableCell>
                                        <StyledTableCell align="right">1</StyledTableCell>
                                        <StyledTableCell align="right">1</StyledTableCell>
                                    </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
            </h1>
        </div>
    )
}

export default OwnPlan;
import * as React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonActivate from "./ButtonActivate";

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
const StyledTableRow = styled(TableRow)(({ theme }) => ({

    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    firstSeries: number,
    secondSeries: number,
    thirdSeries: number,
    fourthSeries: number,
) {
    return { name, firstSeries, secondSeries, thirdSeries, fourthSeries };
}

const rows = [
    createData('Deep Squat', 10, 10, 10, 10),
    createData('Palms In Dumbbell Bench Press', 10, 10, 10, 10),
    createData('Wide Grip Pull Up', 10, 10, 10, 10),
    createData('Arnold Press', 12, 12, 12, 12),
    createData('Barbell Wrist Cur', 12, 12, 12, ''),
    createData('Tricep Dips', 12, 10, 10, ''),
    createData('Reverse Grip Barbell Curl, Reverse Barbell Curls', 12, 10, 10, ''),
    createData('Hanging Leg Raise', 15, 15, 15, 15),
];

const FWB = () => {
    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
            <TableContainer component={Paper} style={{borderRadius: 20, border: "3px solid #FFFFFF"}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>FWB</StyledTableCell>
                            <StyledTableCell align="center">1 Series</StyledTableCell>
                            <StyledTableCell align="center">2 Series</StyledTableCell>
                            <StyledTableCell align="center">3 Series</StyledTableCell>
                            <StyledTableCell align="center">4 Series</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.firstSeries}</StyledTableCell>
                                <StyledTableCell align="center">{row.secondSeries}</StyledTableCell>
                                <StyledTableCell align="center">{row.thirdSeries}</StyledTableCell>
                                <StyledTableCell align="center">{row.fourthSeries}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{marginTop:'50px'}}>
                <ButtonActivate/>
            </div>
        </div>

    );
}

export default FWB;
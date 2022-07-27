import * as React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Plan.css'

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

const push = [
    createData('Barbell Bench Press', 12, 10, 8, 6),
    createData('Incline Bench Press', 12, 10, 10, 8),
    createData('Dumbbell Flys', 12, 10, 8, '' ),
    createData('Back Barbell Press', 8, 8, 8, 8 ),
    createData('Seated Dumbbell Press', 12, 10, '','' ),
    createData('Dumbbell Lateral Raise', 12, 10, '', ''),
    createData('Overhead Dumbbell Extensions', 10, 8, 6, ''),
    createData('Rope Tricep Extension', 12, 10, '', ''),
];
const pull = [
    createData('Wide Grip Pull Up', 8, 7, 6, 5),
    createData('Bent Over Row', 10, 10, 8, ''),
    createData('Lat Pull Down', 12, 12, 10, ''),
    createData('Standing Barbell Curl', 10, 8, 8, 6),
    createData('Concentration Curl', 12, 10, 8, ''),
    createData('Wrist bending with a barbell', 15, 15, 15, ''),
    createData('Close Grip Bench Press', 15, 15, 15, ''),
];
const legs = [
    createData('Deep Squat', 10, 8, 8, 6),
    createData('45 Degree Leg Press', 12, 10, 10, 8),
    createData('Stiff Leg Deadlift On Bench', 10, 10, 10, ''),
    createData('Seated Dumbbell Calf Raise', 20, 20, 20, ''),
    createData('Standing Barbell Calf Raise', 15, 15, 15, ''),
];


const PushPullLegs = () => {
    return (
        <div>
            <TableContainer component={Paper} style={{ overflowy: 'scroll', height: '210px', marginBottom: 30, borderRadius: 20, border: "3px solid #FFFFFF"}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow className='row'>
                            <StyledTableCell>Push</StyledTableCell>
                            <StyledTableCell align="right">1 Series</StyledTableCell>
                            <StyledTableCell align="right">2 Series</StyledTableCell>
                            <StyledTableCell align="right">3 Series</StyledTableCell>
                            <StyledTableCell align="right">4 Series</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {push.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.firstSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.secondSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.thirdSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.fourthSeries}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Paper} style={{ overflowY: 'scroll', height: '210px',marginBottom: 30, borderRadius: 20, border: "3px solid #FFFFFF" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Pull</StyledTableCell>
                            <StyledTableCell align="right">1 Series</StyledTableCell>
                            <StyledTableCell align="right">2 Series</StyledTableCell>
                            <StyledTableCell align="right">3 Series</StyledTableCell>
                            <StyledTableCell align="right">4 Series</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pull.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.firstSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.secondSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.thirdSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.fourthSeries}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Paper} style={{ overflowY: 'scroll', height: '210px', borderRadius: 20, border: "3px solid #FFFFFF"}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Legs</StyledTableCell>
                            <StyledTableCell align="right">1 Series</StyledTableCell>
                            <StyledTableCell align="right">2 Series</StyledTableCell>
                            <StyledTableCell align="right">3 Series</StyledTableCell>
                            <StyledTableCell align="right">4 Series</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {legs.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.firstSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.secondSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.thirdSeries}</StyledTableCell>
                                <StyledTableCell align="right">{row.fourthSeries}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PushPullLegs;
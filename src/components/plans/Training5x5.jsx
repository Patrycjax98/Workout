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
    fifthSeries: number,
) {
    return { name, firstSeries, secondSeries, thirdSeries, fourthSeries, fifthSeries };
}

const planA = [
    createData('Deep Squat', 5, 5, 5, 5, 5),
    createData('Bent Over Barbell Row', 5, 5, 5, 5, 5),
    createData('Barbell Bench Press', 5, 5, 5, 5, 5),
    createData('Seated Dumbbell Press, Dumbbell Shoulder Press', 5, 5, 5, 5, 5),
    createData('Standing Barbell Curl', 5, 5, 5, 5, 5),
];
const planB = [
    createData('Deadlift', 5, 5, 5, 5, 5),
    createData('Wide Grip Pull Up', 5, 5, 5, 5, 5),
    createData('Barbell Bench Press', 5, 5, 5, 5, 5),
    createData('Back Barbell Press', 5, 5, 5, 5, 5),
    createData('Plank', '30s', '30s', '30s', '30s', '30s'),
];
const planC = [
    createData('Deep Squat', 5, 5, 5, 5, 5),
    createData('Tricep Dips', 5, 5, 5, 5, 5),
    createData('Bent Over Dumbbell Row', 5, 5, 5, 5, 5),
    createData('Barbell Upright Row', 5, 5, 5, 5, 5),
    createData('Overhead Dumbbell Extensions', 5, 5, 5, 5, 5),
];


const Training5x5 = () => {
    return (
       <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <TableContainer component={Paper} style={{ overflowy: 'scroll', height: '210px', marginBottom: 30, borderRadius: 20, border: "3px solid #FFFFFF"}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow className='row'>
                        <StyledTableCell>Training 5x5- Plan A</StyledTableCell>
                        <StyledTableCell align="center">1 Series</StyledTableCell>
                        <StyledTableCell align="center">2 Series</StyledTableCell>
                        <StyledTableCell align="center">3 Series</StyledTableCell>
                        <StyledTableCell align="center">4 Series</StyledTableCell>
                        <StyledTableCell align="center">5 Series</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {planA.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.firstSeries}</StyledTableCell>
                            <StyledTableCell align="center">{row.secondSeries}</StyledTableCell>
                            <StyledTableCell align="center">{row.thirdSeries}</StyledTableCell>
                            <StyledTableCell align="center">{row.fourthSeries}</StyledTableCell>
                            <StyledTableCell align="center">{row.fifthSeries}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
           <TableContainer component={Paper} style={{ overflowY: 'scroll', height: '210px',marginBottom: 30, borderRadius: 20, border: "3px solid #FFFFFF" }}>
               <Table sx={{ minWidth: 700 }} aria-label="customized table">
                   <TableHead>
                       <TableRow>
                           <StyledTableCell>Training 5x5- Plan B</StyledTableCell>
                           <StyledTableCell align="center">1 Series</StyledTableCell>
                           <StyledTableCell align="center">2 Series</StyledTableCell>
                           <StyledTableCell align="center">3 Series</StyledTableCell>
                           <StyledTableCell align="center">4 Series</StyledTableCell>
                           <StyledTableCell align="center">5 Series</StyledTableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {planB.map((row) => (
                           <StyledTableRow key={row.name}>
                               <StyledTableCell component="th" scope="row">
                                   {row.name}
                               </StyledTableCell>
                               <StyledTableCell align="center">{row.firstSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.secondSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.thirdSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.fourthSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.fifthSeries}</StyledTableCell>
                           </StyledTableRow>
                       ))}
                   </TableBody>
               </Table>
           </TableContainer>
           <TableContainer component={Paper} style={{ overflowY: 'scroll', height: '210px', borderRadius: 20, border: "3px solid #FFFFFF"}}>
               <Table sx={{ minWidth: 700 }} aria-label="customized table">
                   <TableHead>
                       <TableRow>
                           <StyledTableCell>Training 5x5- Plan C</StyledTableCell>
                           <StyledTableCell align="center">1 Series</StyledTableCell>
                           <StyledTableCell align="center">2 Series</StyledTableCell>
                           <StyledTableCell align="center">3 Series</StyledTableCell>
                           <StyledTableCell align="center">4 Series</StyledTableCell>
                           <StyledTableCell align="center">5 Series</StyledTableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {planC.map((row) => (
                           <StyledTableRow key={row.name}>
                               <StyledTableCell component="th" scope="row">
                                   {row.name}
                               </StyledTableCell>
                               <StyledTableCell align="center">{row.firstSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.secondSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.thirdSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.fourthSeries}</StyledTableCell>
                               <StyledTableCell align="center">{row.fifthSeries}</StyledTableCell>
                           </StyledTableRow>
                       ))}
                   </TableBody>
               </Table>
           </TableContainer>
       </div>
    );
}



export default Training5x5;
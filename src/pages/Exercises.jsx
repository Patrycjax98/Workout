import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
} from "mdb-react-ui-kit";
import {Button} from "@mui/material";

function ExerciseNav() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit] = useState(4);
    const [sortFilterValue, setSortFilterValue] = useState("");
    const [operation, setOperation] = useState("");


    useEffect(() => {
        loadUsersData(0, 4, 0);
    }, []);

    const loadUsersData = async (
        start,
        end,
        increase,
        optType = null,
        filterOrSortValue
    ) => {
        switch (optType) {
            case "search":
                setOperation(optType);
                return await axios
                    .get(
                        `http://localhost:8000/exercise?q=${value}&_start=${start}&_end=${end}`
                    )
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage(currentPage + increase);
                    })
                    .catch((err) => console.log(err));
            case "sort":
                setOperation(optType);
                setSortFilterValue(filterOrSortValue);
                return await axios
                    .get(
                        `http://localhost:8000/exercise?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
                    )
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage(currentPage + increase);
                    })
                    .catch((err) => console.log(err));
            case "filter":
                setOperation(optType);
                setSortFilterValue(filterOrSortValue);
                return await axios
                    .get(
                        `http://localhost:8000/exercise?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
                    )
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage(currentPage + increase);
                    })
                    .catch((err) => console.log(err));
            default:
                return await axios
                    .get(`http://localhost:8000/exercise?_start=${start}&_end=${end}`)
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage(currentPage + increase);
                    })
                    .catch((err) => console.log(err));
        }
    };

    console.log("data", data);

    const handleReset = () => {
        setOperation("");
        setValue("");
        setSortFilterValue("");
        loadUsersData(0, 4, 0);
    };
    const handleSearch = async (e) => {
        e.preventDefault();
        loadUsersData(0, 4, 0, "search");
        // return await axios
        //   .get(`http://localhost:5000/users?q=${value}`)
        //   .then((response) => {
        //     setData(response.data);
        //     setValue("");
        //   })
        //   .catch((err) => console.log(err));
    };




    const renderPagination = () => {
        if (data.length < 4 && currentPage === 0) return null;
        if (currentPage === 0) {
            return (
                <MDBPagination style={{listStyle:'none', display:'flex', alignItems:'center'}}>
                    <MDBPaginationItem>
                        <MDBPaginationLink>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <Button onClick={() => loadUsersData(4, 8, 1, operation)}>
                            Next
                        </Button>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
            return (
                <MDBPagination style={{listStyle:'none', display:'flex', alignItems:'center'}}>
                    <MDBPaginationItem>
                        <Button
                            onClick={() =>
                                loadUsersData(
                                    (currentPage - 1) * 4,
                                    currentPage * 4,
                                    -1,
                                    operation,
                                    sortFilterValue
                                )
                            }
                        >
                            Prev
                        </Button>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
                    </MDBPaginationItem>

                    <MDBPaginationItem>
                        <Button
                            onClick={() =>
                                loadUsersData(
                                    (currentPage + 1) * 4,
                                    (currentPage + 2) * 4,
                                    1,
                                    operation,
                                    sortFilterValue
                                )
                            }
                        >
                            Next
                        </Button>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else {
            return (
                <MDBPagination style={{listStyle:'none', display:'flex', alignItems:'center'}}>
                    <MDBPaginationItem>
                        <Button
                            onClick={() =>
                                loadUsersData(
                                    (currentPage - 1) * 4,
                                    currentPage * 4,
                                    -1,
                                    operation
                                )
                            }
                        >
                            Prev
                        </Button>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        }
    };

    return (
        <MDBContainer style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <form onSubmit={handleSearch} style={{display:'flex', alignItems:'center'}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Exercise..."
                    value={value}
                    style={{backgroundColor:'#21222D', color:'#387BFF',width:'250px', height:'50px', borderRadius:'10px', fontSize:'20px', border: '3px solid #387BFF'}}
                    onChange={(e) => setValue(e.target.value)}
                />

                <Button type="submit" style={{fontSize:'20px', border: '3px solid #387BFF', borderRadius:'15px', marginLeft:'20px'}}>
                    Search
                </Button>
                <Button onClick={() => handleReset()} style={{fontSize:'20px', marginLeft:'20px', border: '3px solid #387BFF', borderRadius:'15px'}}>
                    Reset
                </Button>
            </form>
            <div style={{border: "3px solid #FFFFFF", borderRadius: 20, marginTop:'30px'}}>
                <h2 style={{padding:'13px',justifyContent:'center', display:'flex', backgroundColor:"#387BFF", color:'#000000',borderRadius: '20px 20px 0 0', fontSize:'24px', textTransform:'uppercase'}}>Exercise Directory</h2>
                <MDBRow>
                    <MDBCol>
                        <MDBTable>
                            <MDBTableHead style={{backgroundColor:'#21222D',color:'#87888C', fontSize:'18px'}}>
                                <tr>
                                    <th scope='col' style={{padding:'10px 30px 10px 30px', width:'600px'}}>Exercise</th>
                                    <th scope='col' style={{padding:'10px 30px 10px 30px'}}>Body</th>
                                    <th scope='col' style={{padding:'10px 30px 10px 30px'}}>IMG</th>
                                </tr>
                            </MDBTableHead>
                            {data.length === 0 ? (
                                <MDBTableBody>
                                    <tr>
                                        <td colSpan={8}>
                                            No Data Found
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            ) : (
                                data.map((item, index) => (
                                    <MDBTableBody key={index} style={{fontSize:'18px', color:'#FFFFFF' }}>
                                        <tr>
                                            <td style={{padding:'10px 30px 10px 30px'}}>{item.name}</td>
                                            <td align='center'>{item.bodyPart}</td>
                                            <td><img src={item.img_exercises} alt='img' style={{height:'100px', borderRadius:'15px',margin:'10px'}}/></td>
                                        </tr>
                                    </MDBTableBody>
                                ))
                            )}
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
                <div
                    style={{
                        padding: "5px",
                        alignContent: "center",
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    {renderPagination()}
                </div>
            </div>

        </MDBContainer>
    );
}

export default ExerciseNav;
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData} from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";


const SearchExercise = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartData]);
        }
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack alignItems='center' justifyContent='center'>
            <Typography fontWeight={700} fontSize='32px' mb='30px' color='#87888C' bgcolor='#21222D' borderRadius='15px' padding='10px' width='100%' textAlign='center'>
                Search for an exercise that interests you
            </Typography>
            <Box display='flex' alignItems='center' mb='20px' >
                <TextField
                    sx={{
                        input: {
                            fontSize: '20px',
                            border: 'none',
                            borderRadius: '5px'
                        },
                        width: '1170px',
                        backgroundColor: '#21222D',
                        borderRadius: '15px',
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn'
                        sx={{
                            bgcolor:'#387BFF',
                            color: '#000000',
                            fontSize: '20px',
                            textTransform: 'none',
                            width: '173px',
                            height: '60px',
                            marginLeft: '20px',
                            borderRadius: '15px',
                        }}
                        onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
                <HorizontalScrollbar data={bodyParts} />
            </Box>
        </Stack>
    )
}

export default SearchExercise

import React from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";


const url = 'http://localhost:8000/exercise'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data:''
        }
    }
    renderdata = (data) => {
        if (data) {
            return (
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" style={{color:'#87888C',fontSize:'24px'}}>Exercise</InputLabel>
                    <Select labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Exercise" sx={{color:'#387BFF', backgroundColor:'#21222D', borderRadius:'15px',width:"400px", fontSize:'24px'}} >
                        {data.map((item) =>(
                            <MenuItem key={item} value={item.name} style={{backgroundColor:'#21222D', color:'#87888C'}} >{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )
        }
    }


    render() {
        console.log('data', this.state.data)
        return (
            <div>
                {this.renderdata(this.state.data)}
            </div>
        );
    }
    componentDidMount() {
        axios.get(url).then(res => this.setState({data: res.data}))
    }


}

export default App;

import React, {useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import FormControl from '@mui/material/FormControl';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// import { navigate } from '@reach/router' 
import Typography from '@mui/material/Typography';


const Form = (props) => {
    const[question, setquestion] = useState("")
    const[questionError, setquestionError] = useState("");
    const[countryOne, setCountryOne] = useState("");
    const[countryTwo, setcountryTwo] = useState("");
    const[countryThree, setCountryThree] = useState("");

    //handle submition on  create.js in the views

    const handleSubmit = e=>{
        e.preventDefault();
        console.log("hiiiiiiiiii");
         //make a post request to create a new question
        props.onSubmitProps({question, countryOne, countryTwo, countryThree})
    };


    //handle front end validations 
    const handleNameValidation = (e) => {
        setquestion(e.target.value);
        if(e.target.value.length < 10 && e.target.value.length != 0 ) {
            setquestionError("Question must be 10 characters or longer!");
        } else {
            setquestionError("");
        }
      }
  return (
    <div>
    <button><Link to="/"> Back To Home</Link></button>
      <form onSubmit={handleSubmit}>
        
      {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            <FormControl>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <TextField  id="input-with-sx" label="Question *" variant="standard" 
                        onChange = {handleNameValidation}/>
                </Box>
`                {
                    questionError ?
                    <p style={{color:"red"}}>*{ questionError } </p> :
                  <p></p>
                }
                <div>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <label >Country one <span style={{color:"red"}}>*</span></label><br></br>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={countryOne}
                    label="Country One"
                    onChange={e=> setCountryOne(e.target.value)}
                    ><MenuItem value={"palestine"}>palestine</MenuItem>
                    <MenuItem value={"Morocco"}>Morocco</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Saudi"}>Saudi</MenuItem>
                    <MenuItem value={"Eygpt"}>Eygpt</MenuItem>
                    <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
                    <MenuItem value={"Turkey"}>Turkey</MenuItem>
                    <MenuItem value={"Greece"}>Greece</MenuItem>
                    </Select>
                </Box>
            </div>

            {/* country two */}

            <div>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <label >Country Two <span style={{color:"red"}}>*</span></label><br></br>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={countryTwo}
                    label="Country Two"
                    onChange={e=> setcountryTwo(e.target.value)}
                    ><MenuItem value={"palestine"}>palestine</MenuItem>
                    <MenuItem value={"Morocco"}>Morocco</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Saudi"}>Saudi</MenuItem>
                    <MenuItem value={"Eygpt"}>Eygpt</MenuItem>
                    <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
                    <MenuItem value={"Turkey"}>Turkey</MenuItem>
                    <MenuItem value={"Greece"}>Greece</MenuItem>
                    </Select>
                </Box>
            </div>      
                {/* Country three */}
            <div>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <label >Country Three</label>
                <br></br>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={countryThree}
                    label="Country Three"
                    onChange={e=> setCountryThree(e.target.value)}>
                    <MenuItem value={null}>---</MenuItem>
                    <MenuItem value={"palestine"}>palestine</MenuItem>
                    <MenuItem value={"Morocco"}>Morocco</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Saudi"}>Saudi</MenuItem>
                    <MenuItem value={"Eygpt"}>Eygpt</MenuItem>
                    <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
                    <MenuItem value={"Turkey"}>Turkey</MenuItem>
                    <MenuItem value={"Greece"}>Greece</MenuItem>
                    </Select>
                </Box>
            </div>     
                
                <Button color="primary" aria-label="Add Product" type="submit" >Add Question</Button>
            </FormControl>
        </form>
    </div>
  )
}

export default Form

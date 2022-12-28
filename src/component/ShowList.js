import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import Zoom from '@mui/material/Zoom';
import { Link } from '@reach/router';

// import { Link } from '@reach/router';

// set table width
const useStyles = makeStyles({
    table: {
      minWidth: 300,
    },
  });

const ShowList = (props) => {

    const[question, setQuestions] = useState(props.question)


    const classes = useStyles();
  return (
    <div style={{width:"70%", margin:"0 auto" }}>
        <button><Link to="/contsest/new"> Create a new Question</Link></button>
        <h1>Questions List</h1>
          {question.map((q , idx) => (      
            <div  key={idx}>
              <p style={{ backgroundColor: pink[50], color:grey[500] }}component="th" scope="row">
              <Link to={`/choose/${q._id}`}> {q.question}</Link> 
                </p>
                <p>||
                    {q.countryOne} :{q.C1likes}  Votes|| {q.countryTwo} {q.likesC2}Votes||
                    {q.countryThree.length >2 ? <p>{q.countryThree }: { q.likesC3} Votes</p>  :""}
                </p>

              </div>
          ))}
        <h1>Top 3</h1>
          {props.Topquestion.slice(0, 3).map((q , idx) => (      
            <div  key={idx}>
              <p style={{ backgroundColor: pink[50], color:grey[500] }}component="th" scope="row">
            <Link to={`/choose/${q._id}`}> {q.question}</Link> 
                </p>
                <p>
                    {q.countryOne} :{q.C1likes}  Votes|| {q.countryTwo} {q.likesC2}Votes
                    {q.countryThree.length >2 ? <p>{q.countryThree }: { q.likesC3} Votes</p> :""}
                </p>
              </div>
          ))}
    </div>
  )
}

export default ShowList

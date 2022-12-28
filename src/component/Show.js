import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const Show = (props) => {
    const [question, setQuestion] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/question/' + props.id)
        .then(res => {setQuestion(res.data); setLoaded(true);})
        .then( console.log(question))
        .catch(err => console.error(err));
         
    },[]);
  return (
    <div>
      {
        loaded && <div style={{margin:"0 auto" , width:"50%"}}>
            <Link to="/">Back Home</Link>
            <h1>{question.oneQuestion.question}</h1>
            <div style={{display:"flex" , margin:"0 auto"}}>
            <div>
        <h2>{question.oneQuestion.countryOne}</h2>
        <p> {question.oneQuestion.C1likes} Votes</p>
        </div>
        <div style ={{marginLeft:"30px"}}>
        <h2>{question.oneQuestion.countryTwo}</h2>
        <p> {question.oneQuestion.likesC2} Votes</p>
        </div>
        <div style ={{marginLeft:"30px"}}>
        {question.oneQuestion.countryThree.length > 2 ? 
        <div><h2>{question.oneQuestion.countryThree}</h2>
        {question.oneQuestion.likesC3} Votes</div> :""}
        </div>
        </div>
        </div>
      }
    </div>
  )
}

export default Show

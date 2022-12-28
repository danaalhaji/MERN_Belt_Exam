import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from '@reach/router';
import DisplayOne from '../component/DisplayOne';
import { navigate } from '@reach/router';

const DisplayChoose = (props) => {
    const [question, setQuestion] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/question/' + props.id)
        .then(res => {setQuestion(res.data); setLoaded(true);})
        .then( console.log(question))
        .catch(err => console.error(err));
         
    },[]);

    // console.log(question.oneQuestion.question)
    // update the button
    const update =(likes, total, num)=>{
        if(num == 1){
            likes+=1
            total+=1
            console.log("c 1")
          axios.put('http://localhost:8000/api/question/' + props.id, {
            C1likes:likes,
            totalLikes:total
        })   
        .then(res=>{
        navigate("/contest/"+props.id)})
    }
        if(num == 2){
            likes+=1
            total+=1
            console.log("c 1")
          axios.put('http://localhost:8000/api/question/' + props.id, {
            likesC2:likes,
            totalLikes:total
        })
        
        .then(res=>{
        navigate("/contest/"+props.id)})
        }
        if(num == 3){
            likes+=1
            total+=1
            console.log("c 1")
          axios.put('http://localhost:8000/api/question/' + props.id, {
            likesC3:likes,
            totalLikes:total
        })
        
        .then(res=>{
        navigate("/contest/"+props.id)})
        }
    }
  return (
    <div>
        {/* { loaded &&
        <h1>{question.oneQuestion.question}</h1>} */}
        { loaded &&
      <DisplayOne question={question} update={update}></DisplayOne>
        }
    </div>
  )
}

export default DisplayChoose

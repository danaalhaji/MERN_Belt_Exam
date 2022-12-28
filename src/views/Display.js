import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import ShowList from '../component/ShowList';
const Display = () => {
    const [question, setQuestion] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [loaded1, setLoaded1] = useState(false);
    const [Topquestion, setTopQuestion] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/question')
        .then(res=>{
            setQuestion(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err.response.data));
        console.log("hi")
        axios.get('http://localhost:8000/api/top')
        .then(res=>{
            setTopQuestion(res.data);
            setLoaded1(true);
        })
        .catch(err => console.error(err.response.data));
    },[]);

  return (
    <div>
    {
      loaded1 &&  loaded &&
      <ShowList question={question} Topquestion={Topquestion}></ShowList>
    }

    </div>
  )
}

export default Display

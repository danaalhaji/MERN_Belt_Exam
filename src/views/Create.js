import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from '@reach/router'
import { navigate } from '@reach/router'
import Form from '../component/Form'

const Create = (props) => {

    const[questions, setQuestions] = useState(null)
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loadedError, setLoadedEr] = useState(false) 

    useEffect(() =>{
        axios.get('http://localhost:8000/api/question')
        .then(res=>{
            setQuestions(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err.response.data));
    },[]);


    const createQuestion= question =>{
        axios.post("http://localhost:8000/api/question", question)
            // .then(res => { setPlayers([...author,res.data], ) })
            // .then(()=>navigate('/player/list'))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                setLoadedEr(true)
            }) 
        } 
    
  return (
    <div>
        { loaded &&
      <Form onSubmitProps={createQuestion} errors={errors} initialState ={"-----"}></Form>
        }
    </div>
  )
}

export default Create

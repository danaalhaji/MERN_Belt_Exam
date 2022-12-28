
import React, { useState } from 'react'

const DisplayOne = (props) => {
    // const[question, setQuestion] =useState( props.question)
  return (
    <div>
        <h1>{props.question.oneQuestion.question}</h1>
        <p>{props.question.oneQuestion.countryOne}</p>
        <button onClick={e=>props.update(props.question.oneQuestion.C1likes , props.question.oneQuestion.
        totalLikes,1)}>Vote for {props.question.oneQuestion.countryOne}</button>


         <p>{props.question.oneQuestion.countryTwo}</p>
        <button onClick={e=>props.update(props.question.oneQuestion.likesC2 , props.question.oneQuestion.
        totalLikes,2)}>Vote for {props.question.oneQuestion.countryTwo}</button>

        {props.question.oneQuestion.countryThree.length >2 ?
        <div>
        <p>{props.question.oneQuestion.countryThree}</p>
        <button onClick={e=>props.update(props.question.oneQuestion.likesC3 , props.question.oneQuestion.
        totalLikes,3)}>Vote for {props.question.oneQuestion.countryThree}</button>
        </div>:
        ""}

    </div>
  )
}

export default DisplayOne

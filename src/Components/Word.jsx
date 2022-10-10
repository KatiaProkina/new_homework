import React from "react";
import './styles/MyWords.css'


const Word =(props)=>{
  return(
    <div className="words" 
    onClick ={()=>{
        {props.addResult(props.letter.value)}

    }}
    >
      {props.letter.value}
    </div>
  )
}
export default Word
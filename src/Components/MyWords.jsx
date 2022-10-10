import React from "react";
import Word from "./Word";
import './styles/MyWords.css'



const MyWords =({letters, addResult})=>{
  return(
    <div className="wordList"> 
       {letters.map((letter,index)=>
        <Word addResult = {addResult} letter={letter} key={letter.id}/>
       )}
    </div>
  )
}
export default MyWords
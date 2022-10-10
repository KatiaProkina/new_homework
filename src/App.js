import { useState } from 'react';
import MyInput from './Components/MyInput';
import MyWords from './Components/MyWords';


function App() {
  const[value,setValue] = useState('') 
  const[letters,setLetters] = useState([

  ])

  const [result,setResult] = useState('')

  const getLetter = (str)=>{
    let arrLetter = str.split('')
    let objLetter = arrLetter.map((item,index)=>{
      return{
        id:Date.now()+index+1,
        value:item
      }
    })
    setLetters(objLetter)
    console.log(objLetter)
  }

  const onChange = (e)=>{
    setValue(e.target.value)
    getLetter(e.target.value)
    
  }

  const addResult = (word)=>{
    if(letters.length === result.length){
      return
    }
    setResult(result+word)
  }
  

  return (
    <div className="App">
      <MyInput
       type = 'text'
       value = {value}
       onChange = {onChange}
      />
      
      <MyWords  addResult = {addResult} letters = {letters}/>

      <h2>Результат: {result}</h2>
   
    </div>
  );
  }

export default App;

import './App.css';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from "./store";
import ToDO from "./todo";

function App() {

  const todos = useSelector(state => state)
  const dispatch = useDispatch()
  const [text,setText] = useState('')

  const onSubmit = (e) =>{
      e.preventDefault(onSubmit);
      dispatch(ADD(text))
      setText("")
  }

  return (    
      <>
          <h1>To do</h1>
          <form onSubmit = {onSubmit}>
              <input type ="text" value = {text} onChange={(e)=>{setText(e.target.value)}}/>
              <button>Add</button>
          </form>
          <ul>
              {
                  todos.map(todo => <ToDO {...todo} key={todo.id}/>)
              }
          </ul>
      </>
  )
}

export default App;
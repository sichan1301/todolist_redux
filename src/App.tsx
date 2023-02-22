import './App.css';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD,IState,RootState } from "./store";
import ToDO from "./todo";

function App() {

  const todos = useSelector((state:RootState)=> state.todolist)
  const dispatch = useDispatch()
  const [text,setText] = useState('')

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      dispatch(ADD(text))
      setText("")
  }
  
  useEffect(()=>{
    console.log(todos)
  },[todos])
  
  return (    
      <>
          <h1>To do</h1>
          <form onSubmit = {onSubmit}>
              <input type ="text" value = {text} onChange={(e)=>{setText(e.target.value)}}/>
              <button>Add</button>
          </form>
          <ul>
              {
                  todos.map((todo:IState) => <ToDO {...todo} key={todo.id}/>)
              }
          </ul>
      </>
  )
}

export default App;
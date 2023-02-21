import './App.css';
import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import ToDO from "./todo";

function App({todos,addTodo}) {
  const [text,setText] = useState('')
  const onChange = (e) =>{
      setText(e.target.value)
  }

  const onSubmit = (e) =>{
      e.preventDefault(onSubmit);
      addTodo(text)
      setText("")
  }

  return (    

      <>
          <h1>To do</h1>
          <form onSubmit = {onSubmit}>
              <input type ="text" value = {text} onChange={onChange}/>
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


const mapStateToProps = (state) =>{
  return {todos:state};
}

const mapDispatchToProps = (dispatch) =>{   
  return{
      addTodo: (text) =>dispatch(actionCreators.addTodo(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
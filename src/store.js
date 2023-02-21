import {createStore} from "redux";

const addTodo = text =>{
    return {
        type:"ADD",
        text
    }
}

const deleteTodo = id =>{
    return {
        type:"DELETE",
        id:parseInt(id)
    }
}

const reducer = (state=[],action) =>{
    switch(action.type){
        case "ADD":
            return [{text:action.text, id :Date.now()}, ...state];
        case "DELETE":
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}


const store = createStore(reducer)

export const actionCreators= {
    addTodo,
    deleteTodo
}

export default store;
// import {createStore} from "redux";
// import {createAction, createReducer } from "@reduxjs/toolkit";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

// const addTodo = text =>{
//     return {
//         type:"ADD",
//         text
//     }
// }

// const deleteTodo = id =>{
//     return {
//         type:"DELETE",
//         id:parseInt(id)
//     }
// }

// const reducer = (state=[],action) =>{
//     switch(action.type){
//         case addTodo.type:
//             return [{text:action.payload, id :Date.now()}, ...state];
//         case deleteTodo.type:
//             return state.filter(item => item.id !== action.payload);
//         default:
//             return state;
//     }
// }

// const addTodo = createAction("ADD")
// const deleteTodo = createAction("DELETE")

// const reducer = createReducer([],{
//     [addTodo]:(state,action) => {
//         state.push({text:action.payload, id :uuidv4()});
//     },
//     [deleteTodo]:(state,action) =>
//         state.filter(item => item.id !== action.payload)
// })

export interface IState {
    text:string,
    id:string,
    done:boolean
}

interface stateType {
    todolist: IState[];
}

const todos = createSlice({
    name:"todosReducer",
    initialState:{todolist:[]},
    reducers:{
        ADD:(state: stateType,action) => {
            state.todolist.push({text:action.payload, id :uuidv4(), done:false});
        },
        DELETE:(state: stateType,action) => {
            state.todolist = state.todolist.filter(item => item.id !== action.payload);
        },
        UPDATE: (state: stateType,action) =>{
            state.todolist.forEach(item => item.id === action.payload.id ? item.text=action.payload.currentText: item);
        },
        COMPLETE:(state: stateType,action) =>{
            state.todolist.forEach(item => item.id === action.payload ? item.done = !item.done: item);
        }
}})

const store = configureStore({reducer:todos.reducer})

export const {ADD,DELETE,UPDATE,COMPLETE} = todos.actions

export type RootState = ReturnType<typeof store.getState>;

export default store;


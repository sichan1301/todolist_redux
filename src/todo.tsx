import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE,UPDATE,COMPLETE} from "./store";
import { IState } from "./store";

const ToDO = ({text,id,done}:IState) =>{
    const dispatch = useDispatch(); 

    const [isEdit,setIsEdit] = useState(false);
    const [currentText,setCurrentText] = useState(text)

    const handleIsEdit = () =>{
      setIsEdit(!isEdit)
      setCurrentText(text)
    }

    const handleUpdate = () =>{
        dispatch(UPDATE({id,currentText}));
        handleIsEdit()
    }

    useEffect(()=>{
      console.log(id)
    },[id])
    
    return (
      <>
        {
          isEdit
          ? 
            <li>
              <input type ="text" value = {currentText} onChange = {(e) => {setCurrentText(e.target.value)}} />
              <button onClick = {handleIsEdit}>취소</button>
              <button onClick = {handleUpdate}>수정</button>
            </li>
          :            
            <li>
              {
                done ? <del>{text}</del> : <span>{text}</span> 
              }
              <button onClick = {()=>{dispatch(DELETE(id))}}>삭제</button>
              <button onClick = {handleIsEdit}>수정</button>
              <button onClick = {()=>{dispatch(COMPLETE(id))}}>완료</button>
            </li>
        }
      </>
    )
}

export default ToDO;
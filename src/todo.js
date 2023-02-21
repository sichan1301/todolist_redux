import { connect } from "react-redux";
import { actionCreators } from "./store";

const ToDO = ({text,onBtnClick}) =>{
    return (
        <li>
            {text} <button onClick = {onBtnClick}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}

export default connect(null,mapDispatchToProps) (ToDO);
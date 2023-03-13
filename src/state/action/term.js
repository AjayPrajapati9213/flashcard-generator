import { ADD_TERM, DELETE_TERM, EDIT_TERM, EMPTY_TERM} from "../../constants/type";

const addTerm=(data)=>{
    return{
        type: ADD_TERM,                           /// type = action
        payload: data                            /// payload = data which show 
        
    }
}
const deleteTerm=(data)=>{
    return{
        type: DELETE_TERM,             
        payload: data
    }
}
const editTerm=(data)=>{
    return{
        type: EDIT_TERM,
        payload: data
    }
}
const emptyTerm=()=>{
    return {
        type: EMPTY_TERM,
    }
}

export {addTerm,deleteTerm,editTerm, emptyTerm };
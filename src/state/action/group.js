import { ADD_GROUP } from "../../constants/type";

const addGroup = (data)=>{
    return{
        type: ADD_GROUP,                   /// type = action
        payload: data                     /// payload = data which show 
        
    }
}
export {addGroup};
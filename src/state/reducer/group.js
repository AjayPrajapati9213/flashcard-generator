
import { ADD_GROUP } from "../../constants/type";

const localGroup = localStorage.getItem('groupData');         /// get item/data of group from localstorage 
const INIT_STATE= localGroup ? JSON.parse(localGroup) : [];   /// checked is data exists or not 

const GroupReducer= (state = INIT_STATE, action)=>{
    switch(action.type){
        case ADD_GROUP:

            localStorage.setItem("groupData",JSON.stringify([...state, action.payload])
            );
            /// 
            return [...state, action.payload];

        default:
            return state;
    }
}
export default GroupReducer;

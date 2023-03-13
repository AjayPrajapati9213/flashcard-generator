import { ADD_TERM, DELETE_TERM, EDIT_TERM, EMPTY_TERM } from "../../constants/type";
 
const localTerm = localStorage.getItem('termData');        /// get item/data of term from localstorage
const INIT_STATE = localTerm ? JSON.parse(localTerm) : [];   /// checked is data exists or not

const TermReducer= (state= INIT_STATE, action)=>{
    switch(action.type){
        case ADD_TERM:
            localStorage.setItem("termData",JSON.stringify([...state, action.payload]));
            return [...state, action.payload];

        case EDIT_TERM:
            const editData= state.map((item, index) =>{    /// iterate each item 
                if( index === action.payload.index){      /// checked the condition 
                    item.term = action.payload.term;
                    item.defination = action.payload.defination;
                }
                return item;
            });
            localStorage.setItem("termData", JSON.stringify(editData));
            return editData;

                case DELETE_TERM:
                    const data = state.filter((item, index)=> index !== action.payload);    /// filter the items where index is not equal to action.payload 
                    localStorage.setItem('termData', JSON.stringify(data));  /// then convert the data in Json format 
                       


                    return data;

                case EMPTY_TERM:
                    localStorage.removeItem("termData")
                    state = [];
                    return state;

                default:
                    return state;
    }
};
export default TermReducer;

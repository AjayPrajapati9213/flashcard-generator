import {SHOW_CARDS} from '../../constants/type';

const displayAllCards =(data)=>{
    return{
        type: SHOW_CARDS,                 /// type = action
        payload: data                     /// payload = data which show   
    }
}
export {displayAllCards};
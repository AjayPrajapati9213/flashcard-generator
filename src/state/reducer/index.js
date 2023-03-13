import { combineReducers } from "redux";
import GroupReducer from "./group"
import TermReducer from './term';
import viewFlashcardReducer from './cards';

const rootReducer = combineReducers({
    addGroup: GroupReducer,
    terms : TermReducer,
    displayAllCards: viewFlashcardReducer
})

export default rootReducer;

/// import all reducers in this file 
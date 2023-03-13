import { createStore } from "redux";
import rootReducer from '../reducer/index'

const store = createStore(rootReducer)    /// create a obj store and pass to createstore and give rootreducer as a param
export default store;
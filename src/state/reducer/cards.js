import { SHOW_CARDS } from "../../constants/type";

const INIT_STATE = parseInt(localStorage.getItem("viewIndex")) || 0;
/// get item from localstorage and converts into an integer through parseInt

const viewFlashcardReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SHOW_CARDS:
      localStorage.setItem("viewIndex", action.payload);   /// set item in localstorage at index
      return action.payload;

    default:
      return state;
  }
};

export default viewFlashcardReducer;
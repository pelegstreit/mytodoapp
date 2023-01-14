import { combineReducers } from "redux";
import tasksReducer from "./tasks.slice"

const rootReducer = combineReducers({
    tasks: tasksReducer,
  });
  
  export default rootReducer;
  


import { createStore,combineReducers } from "redux";
import counterReducer from "../components/counter.reducer";
import todoReducer from "../components/todolist.reducer";
import productReducer from "../components/productsreducer";

let store=createStore(combineReducers({counterReducer,todoReducer,productReducer}))
export default store;
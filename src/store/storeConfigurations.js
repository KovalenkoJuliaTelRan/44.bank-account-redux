
import accountReducer from "../reducers/accountReducer";
import {createStore} from "redux";

const initialState = {balance: 0}
const store = createStore(accountReducer, initialState)

export default store

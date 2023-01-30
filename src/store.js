import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/usersReducers";
import { InputFieldsReducer } from "./reducers/InputFieldsReducer";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
  userReducer: userReducer,
  inputFieldsReducer: InputFieldsReducer,
});
const middleWare = [thunk];
function configureStore(state = initialState) {
  return createStore(reducer, state, applyMiddleware(...middleWare));
}
const store = configureStore(initialState);
export default store;

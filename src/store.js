import { createStore } from "redux";
import userReducer from "reducers/usersReducer";



const initialState = {
  userInformation : {

  }
}

const reducer = combineReducers({
  userReducer:userReducer
})
function configureStore(state = initialState) {
  return createStore(reducer,state);
}
const store = configureStore(initialState)
export default store;
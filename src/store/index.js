import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import UsersReducer from "./users/usersReducer";
import ReduxThunk from "redux-thunk";

const reducers = combineReducers({
  users: UsersReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;

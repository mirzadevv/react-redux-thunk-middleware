import { bindActionCreators } from "redux";
import store from "../../store";

export function load() {
  return async (dispatch) => {
    const stream = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await stream.json();
    dispatch({ type: "load", payload: result });
  };
}

export function reset() {
  return { type: "reset" };
}

const usersActions = bindActionCreators({ load, reset }, store.dispatch);

export default usersActions;

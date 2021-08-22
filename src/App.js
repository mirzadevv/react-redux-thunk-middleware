import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { load, reset } from "./store/users/usersActions";
function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="btn-container">
        <button className="btn" onClick={() => dispatch(load())}>
          Load Users
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>

      <div className="users-container">
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

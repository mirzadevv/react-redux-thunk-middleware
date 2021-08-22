import "./App.css";
import { useSelector } from "react-redux";
import usersActions from "./store/users/usersActions";
function App() {
  const users = useSelector((state) => state.users);

  return (
    <div className="app">
      <div className="btn-container">
        <button className="btn" onClick={() => usersActions.load()}>
          Load Users
        </button>
        <button className="btn" onClick={() => usersActions.reset()}>
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

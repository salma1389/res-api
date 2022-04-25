import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <AddUser />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/details/:_id" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

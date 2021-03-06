import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import ProtectedRoute from "./protectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route
            path="/todo"
            element={<ProtectedRoute element={<Todo />} exact isAuth={true} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

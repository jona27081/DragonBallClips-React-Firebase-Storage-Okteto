import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import ClipList from "./components/clip-list.component";
import Profile from "./components/about.component";
import Login from "./Google-Login/Login";
import "./styles/logout.css"

class App extends Component {
  render() {
    const user = localStorage.getItem('user');
    const logout = () =>{
      localStorage.clear()
      window.location.reload()
    }
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/clips"}>Home</Link>
            </li>
            <li>
              <Link to={"/clips"}>Clips</Link>
            </li>
            <li>
              <Link to={"/add"}>Add</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {user &&
            <li>
            <Link onClick={logout} to={"/home"}>Cerrar Sesion</Link>
            </li>
            }
          </ul>
        </nav>

        <div className="container-body">
          <Routes>
            <Route exact path="/clips" element={<ClipList />} />
            <Route exact path="/add" element={<Login />} />
            <Route exact path="/about" element={<Profile />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App

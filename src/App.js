import React from "react";
import Login from './Components/Login';
import './App.css';
import Logout from "./Components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const App = ()=> {
  let user = useSelector(selectUser)
  return <div>{user ?<Logout/>:<Login/>}</div>;
}

export default App;

import React from "react";
import Header from "./Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Profile';
import {eleves} from './data'
import { Alert } from "./Alert";
function App() {
  // const handlename=(y,x,z)=> {
  //   return alert(`
  //   ${y} 
  //   ${x} 
  //   ${z}`)
  // } 
  return (
    <div>
      <Header/>      
    <Profile Data={eleves} info={Alert} />
    </div>
  );
};


export default App;

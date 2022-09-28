import React from "react";
import {Link } from 'react-router-dom';
import logo from './images/waste.png';
export default function Navbar(props) {
  // console.log(props)
  return (
   <nav className="nav">
    <img src={logo} height="100px" width="100px" />
   <h2>Waste Management System</h2>
   <div className="button">
   <ul>
   <li>
    <Link to='/'>New Complaint</Link>
   </li>
   <li>
    <Link to='/presentcomplaint'>PresentComplaint</Link>
   </li>
   <li>
    <Link to='/completedcomplaint'>CompletedComplaint</Link>
   </li>
   </ul>
  
   </div>
  </nav>
  )
}
{/* <button className="button" onClick={props.click1} >New complaint</button>
   
<button className="button" onClick={props.click2}>Present complaints</button>

<button className="button" onClick={props.click3}>Completed complaints</button> */}

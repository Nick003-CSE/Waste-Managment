import React from "react";

export default function Navbar(props) {
  // console.log(props)
  return (
   <nav className="nav">
   <h2>Waste Management System</h2>
   <div className="button">
   <button className="button" onClick={props.click1}>New complaint</button>
   <button className="button" onClick={props.click2}>Present complaints</button>
   <button className="button" onClick={props.click3}>Completed complaints</button>
   </div>
  </nav>
  )
}


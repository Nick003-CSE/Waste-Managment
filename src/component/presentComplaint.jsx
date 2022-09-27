import React from "react"


export default function presentComplaint(props){
   return (
       <main className="presentComplaint">
        <div className="card">
        <span><img src="https://cdn1.vectorstock.com/i/1000x1000/29/10/plastic-dustbin-vector-2722910.jpg" className="card--img"/></span>
    <div className="card--details">
        <div className="card--number">
        <h1>Complaint Number : <b>{props.complaintNumber}</b></h1>
        </div>
        <div className="card--date">
    <h2>Date of Complaint :<b>{Date()}</b></h2>
    </div>
    <div className="card--description">
    
    <h1>Description : <i>{props.description}</i></h1>
    </div>
    <div className="card--status">
   <h1>status :
   {props.status ? "completed" : "queued"}</h1>
   </div>
    </div>
    </div>
    </main>
   )
}
import React from "react";


export default function NewComplaint(props) {
  console.log(props)
  return (
    <div className="form">
      <form className="form" onSubmit={props.handleSubmit}>
        <div className="formElement">
          <span className="span">
            <h2 className="span--h">NAME:</h2>
          </span>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={props.name}
            onChange={props.handleChange}
            className="input"
          />
        </div>
        <div className="formElement">
          <span className="span">
            <h2 className="span--h">BRANCH:</h2>
          </span>

          <input
            type="text"
            name="branch"
            placeholder="Enter Branch Name"
            value={props.branch}
            onChange={props.handleChange}
            className="input"
          />
        </div>
        <div className="formElement">
          <span>
            <h2>REGISTRY</h2>
            <h2>NUMBER:</h2>
          </span>
          <input
            id="registrationNumber"
            type="number"
            name="registrationNumber"
            placeholder="Enter Registration Number"
            value={props.registrationNumber}
            onChange={props.handleChange}
            className="input"
          />
        </div>
        <div className="formElement">
          <span className="span">
            <h2 className="span--h">DUSTBIN</h2>
            <h2 className="span--h">NUMBER:</h2>
          </span>
          <input
            id="dustbinNumber"
            type="number"
            name="dustbinNumber"
            placeholder="Enter Dustbin Number"
            value={props.dustbinNumber}
            onChange={props.handleChange}
            className="input"
          />
        </div>
        <div className="formElement">
          <span className="span">
            <h2>DETAILS:</h2>
          </span>
          <textarea
            id="description"
            name="description"
            value={props.description}
            placeholder="Write Some Details"
            onChange={props.handleChange}
            className="inputde"
          />
        </div>
        <div className="formElement">
          <span className="upload">
            <h3>
              {" "}
              Kindly Upload the image of dustbin below (in PDF/PPT/PPTX format)
            </h3>
          </span>
          <input
            id="upload"
            type="file"
            name="complaintImage"
            accept="application/pdf,application/ppt,application/pptx,application/vnd.ms-excel"
            className="up"
          />
        </div>
        <br />
        <button className="button1" onClick={props.handleSubmit}>submit</button>
      </form>
    </div>
    
  );
}

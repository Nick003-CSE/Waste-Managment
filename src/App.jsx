import React from "react";
import Navbar from "./component/Navbar";
import NewComplaint from "./component/newComplaint";
import PresentComplaint from "./component/presentComplaint";
import CompletedComplaint from "./component/completedComplaint";
import Footer from "./component/Footer";
import "./App.css";

function App() {
 

  const [form, setForm] = React.useState(
    JSON.parse(localStorage.getItem("formDetails")) || {
     status:false,
     complaintNumber:1,
      name: "",
      branch: "",
      registrationNumber: "",
      dustbinNumber: "",
      complaintType: "",
      description: "",
      complaintImage:""
    }
  );
  const [data, setData] = React.useState("");
  function handleChange(event) {
    setForm((prev) => {
      return {
        ...prev,
        
        [event.target.name]: event.target.value,
      };
    });
   
    
  }
  
  React.useEffect(() => {
    localStorage.setItem("formDetails", JSON.stringify(form));
  }, [form]);
  function handleSubmit(event) {
    event.preventDefault();
    setData(form)
   

    setForm(prev => {
      return {
       
        complaintNumber:prev.complaintNumber+1,
        name: "",
        branch: "",
        registrationNumber: "",
        dustbinNumber: "",
        complaintType: "",
        description: "",
      };
    });
    
  }
 

  return (
    <div className="app">
      <Navbar
       
      />
      <NewComplaint
        name={form.name}
        handleChange={handleChange}
        branch={form.branch}
        registrationNumber={form.registrationNumber}
        dustbinNumber={form.dustbinNumber}
        complaintImage={form.complaintImage}
        complaintType={form.complaintType}
        description={form.description}
        handleSubmit={handleSubmit}
      />
       
       {data && <PresentComplaint
    complaintNumber={data.complaintNumber}
    complaintImage={data.complaintImage}
    description={data.description}
    status={data.status}
  />}
       {data.status && <CompletedComplaint
    complaintNumber={data.complaintNumber}
    complaintImage={data.complaintImage}
    description={data.description}
    status={data.status}
  />}

      <Footer />
    </div>
  );
}

export default App;

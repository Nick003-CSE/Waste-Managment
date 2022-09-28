import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import NewComplaint from "./component/NewComplaint";
import PresentComplaint from "./component/PresentComplaint";
import CompletedComplaint from "./component/CompletedComplaint";
import Footer from "./component/Footer";

function App() {
  const [form, setForm] = React.useState(
    JSON.parse(localStorage.getItem("formDetails")) || {
      status: false,
      complaintNumber: 1,
      name: "",
      branch: "",
      registrationNumber: "",
      dustbinNumber: "",
      complaintType: "",
      description: "",
      complaintImage: "",
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
    setData(form);

    setForm((prev) => {
      return {
        complaintNumber: prev.complaintNumber + 1,
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
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
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
            }
          />
          <Route
            path="/presentcomplaint"
            element={
              <PresentComplaint
                complaintNumber={data.complaintNumber}
                complaintImage={data.complaintImage}
                description={data.description}
                status={data.status}
              />
            }
          />
          <Route
            path="/completedcomplaint"
            element={
              <CompletedComplaint
                complaintNumber={data.complaintNumber}
                complaintImage={data.complaintImage}
                description={data.description}
                status={data.status}
              />
            }
          />
          </Routes>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;

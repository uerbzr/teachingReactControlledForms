import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ComplaintForm from "./components/ComplaintForm";
import Success from "./components/Success";
import "./App.css";

function App() {
  //TODO: Add your state fields here

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "",
    consent: false,
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ComplaintForm formData={formData} setFormData={setFormData} />
          }
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;

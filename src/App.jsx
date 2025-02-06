import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ComplaintForm from "./components/ComplaintForm";
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
        <Route
          path="/success"
          element={
            <>
              <h1>Success!</h1>
              <a href="/">Back to Form..</a>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Form submitted successfully!</h2>
      <button cssClass="btn btn-primary" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}

export default Success;

import React from "react";
import profileimage from "../images/pic1.png";

export default function Patient_profile({ dataSet }) {
  console.log(dataSet);
  return (
    <div className="patientsprof col-3" style = {{marginLeft: "30px" }}>
      <div className="patient_prof ">
        <img src={profileimage} alt="" className="patientimg" />
      </div>
      <div
        style={{
          fontSize: "12px",
          lineHeight: "10px",
          marginLeft: "30px",
          marginTop: "5px",
        }}
      >
        <h5>{dataSet.name}</h5>
        <p>
          Gender: {dataSet.gender}
          <span style={{ marginLeft: "15px" }}>Age: {dataSet.age} </span>
        </p>
        <p>Appointments: {dataSet.appointment}</p>
      </div>
    </div>
  );
}

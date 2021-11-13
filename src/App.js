import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";
import './App.css';

var treatId = "1233"
var treatCourseId = "12233"
var type = "Tretament"
var category= "Vaccination"
var name= "Mary"
var startDate= "02/12/2021"


  

export default function App() {
  return (
    
<div className="app-container">
        <table>
          <thead>
            <tr>
            <th>TreatID</th>
              <th>Name</th>
              <th>TreatCourseID</th>
              <th>StartDate</th>
              <th>category</th>
              <th>Type</th>
            </tr>  
          </thead>
          <tbody>
            <td>{treatId} </td>
           <td>{name} </td>
           <td>{treatCourseId} </td>
           <td>{startDate} </td>
           <td>{category} </td>
           <td>{type} </td>
            </tbody>
            </table>
            
<br/><br/>
<MedicalTreatmentPanel />
    </div>
  );
}

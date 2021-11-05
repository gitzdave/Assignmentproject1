import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";

var treatID = 1233
var treatCourseId=12233
var type= "Tretament"
var category= "Vaccination"
var name= "Mary"
var startDate= "02/12/2021"

export default function App() {
  return (
    <div>
     <MedicalTreatment  name= {name}/> 
     <br/> 
     <MedicalTreatment  treatCourseId= {treatCourseId}/> 
    </div>
  );
}

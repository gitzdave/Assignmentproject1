import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";
import './App.css';
import MedicalTreatmentList from "./MedicalTreatmentList";

var treatId = "12"
var treatCourseId = "12233"
var type = "Tretament"
var category= "Vaccination"
var name= "Mary"
var startDate= "02/12/2021"


  

export default function App() {
  return (
    
  <div>

<br/><br/>
<MedicalTreatmentPanel/>
<br/><br/>
<MedicalTreatment name = {name} treatid={treatId} type = {type} treatCourseId={treatCourseId} category={category}startDate = {startDate}/>
</div>
  );
}

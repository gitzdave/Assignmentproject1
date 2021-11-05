import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";

var treatID = 1233
var treatCourseId=12233
var type= "Tretament"
var category= "Vaccination"
var name= "Mary"
var startDate= "02/12/2021"


    
  function clickHandler (){
    window.alert ("[" + "name = "+ props.name+ ", treatID = "+ props.treatID + ", startDate = "+props.startDate +"  , type = " + props.type + "category= " + props.category + "treatCourseId =" + props.treatCourseId + "]"  )
  }

export default function App() {
  return (
    <div>
     <MedicalTreatment  name= {name}/> 
     <br/> 
     <MedicalTreatment  treatCourseId= {treatCourseId}/> 

<button onClick = {clickHandler}> ShowRecords </button>

<MedicalTreatmentPanel />
    </div>
  );
}

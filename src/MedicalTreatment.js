import React from 'react';
import "./App.css";


function MedicalTreatment(props){
  
return (

<div className ="app-container">
<table>
  <thead>
    <th>TreatID </th>
    <th>TreatCourseID </th>
    <th>Name </th>
    <th>StartDate </th>
    <th>Category </th>
    <th>Type </th>
     </thead>
  
  <tbody>
       <td> {props.treatid} </td>
       <td> {props.type}</td>
       <td> {props.name} </td>
       <td> {props.startDate} </td>
       <td> {props.category}</td>
       <td> {props.treatCourseId} </td>
     </tbody>

   </table>

</div>
)
}
export default MedicalTreatment;
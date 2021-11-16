import React from 'react';



function MedicalTreatment(props){
  
return (

<div container ="app-container">

<table>
  <thead>
    <tr>TreatID </tr>
    <tr>TreatCourseID </tr>
    <tr>Name </tr>
    <tr>StartDate </tr>
    <tr>Category </tr>
    <tr>Type </tr>
     </thead>
  
  <tbody>
    <td> {props.treatid}
       </td>
       <td> {props.type}
       </td>
       <td> {props.name}
       </td>
       <td> {props.startDate}
       </td>
       <td> {props.category}
       </td>
     </tbody>
  

   </table>

</div>
)
}
export default MedicalTreatment;
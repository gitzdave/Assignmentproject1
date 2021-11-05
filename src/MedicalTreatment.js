import React from 'react';



function MedicalTreatment(props){

function toString (props ){

return "[" + "name = "+ prop.name+ ", treatID = "+ prop.treatID + ", startDate = "+prop.startDate +"  , type = " + props.type + "category= " + props.category + "treatCourseId =" + props.treatCourseId + "]";
  }

return (

<div>  
{props.treatId}
{props.treatCourseId}
{props.type}
{props.category}
{props.name}
{props.startDate}
</div>
)
}


export default MedicalTreatment;
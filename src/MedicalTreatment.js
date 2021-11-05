import React from 'react';



function MedicalTreatment(props){

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
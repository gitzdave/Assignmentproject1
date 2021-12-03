import React from 'react';
import MedicalTreatment from './MedicalTreatment';
import nanoid from './nanoid';

function MedicalTreatmentPanel(props){
    
   

    const [treatId, setTreatId] = React.useState('');
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [treatCourseId, setTreatCourseId] = React.useState('');
    const [startDate, startDate] = React.useState('');
    const [type, setType] = React.useState('');


    function display () {
        alert("[" + "name = "+ name+ ", treatID = "+ treatId + ", startDate = "+startDate +" ,type = " + type + " ,category= " + category + " ,treatCourseId =" + treatCourseId + "]" );
    } 
     

    



    function clearClickHandler () {
        settreatId('');
        setname('');
        setcategory('');
        settreatCourseId ("");
        setstartDate ("");
        settype ("");
    }


    return(
        <form >
            <h1>  Medical Records  </h1>

            <input placeholder="TreatID" value = {treatId} type="text"  onChange = {e=> settreatId (e.target.value)} name= "treatId" ></input>

            <br/>

            <input placeholder=" Name" value= {name} type="text"  onChange={e=> setname (e.target.value)} name="name" ></input>

            <br/>

            <input placeholder="StartDate" type="text"  onChange = { e=> startDate(e.target.value)} name="startDate"  value= {startDate} ></input>
            
            <br/>

            <input placeholder="TreatCourseID "type="text"    onChange = {e=> treatCourseId(e.target.value) } name="treatCourseId"  value= {treatCourseId} ></input>
            <br/>

            <input placeholder="Category"type="text"   onChange = {e=> setCategory(e.target.value)}name ="category"  value= {category}></input>
            <br/>
            <input placeholder="Type" type="text"   onChange = {e=> setType(e.target.value) } name="type" value={type} ></input>

          <button type = "submit">Add </button>
          <button onClick = {clearClickHandler}> Clear</button>
        </form>
        
    );
}


export default MedicalTreatmentPanel;
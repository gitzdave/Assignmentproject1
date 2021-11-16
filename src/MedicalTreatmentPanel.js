import React from 'react';
import MedicalTreatment from './MedicalTreatment';
import nanoid from './nanoid';

function MedicalTreatmentPanel(props){
    
   

    const [treatId, settreatId] = React.useState('');
    const [name, setname] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [treatCourseId, settreatCourseId] = React.useState('');
    const [startDate, setstartDate] = React.useState('');
    const [type, settype] = React.useState('');
    const [data,setData] = React.useState({
        treatId:'',
        treatCourseId:'',
        type:'',
        category:'',
        name:'',
        startDate:''}

    )
    function display () {
        alert("[" + "name = "+ name+ ", treatID = "+ treatId + ", startDate = "+startDate +" ,type = " + type + " ,category= " + category + " ,treatCourseId =" + treatCourseId + "]" );
    } 
     function showSubmit (events) {
     events.preventDefault();
    
    const fieldName = events.target.getAttribute('name')
    const fieldValue = events.target.value;
    const newForm = {...data};
     newForm[fieldName]=fieldValue;
     setData(newForm);

    }

    function formSubmit (events) {
        events.preventDefault();
        
        const record = {
        treatId: data.treatId,
        treatCourseId:data.treatCourseId,
        type:data.type,
        category:data.category,
        name:data.name,
        startDate: data.startDate
    };
    const newRecords =[...record,record]
    setData(newRecords);
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

            <input placeholder="TreatID" type="text"  onChange = { showSubmit} name= "treatId" ></input>

            <br/>

            <input placeholder=" Name" type="text"  onChange={showSubmit} name="name" ></input>

            <br/>

            <input placeholder="StartDate" type="text"  onChange = { showSubmit} name="startDate"  ></input>
            
            <br/>

            <input placeholder="TreatCourseID "type="text"    onChange = { showSubmit} name="treatCourseId" ></input>
            <br/>

            <input placeholder="Category"type="text"   onChange = {showSubmit}name ="category"  ></input>
            <br/>
            <input placeholder="Type" type="text"   onChange = { showSubmit} name="type"  ></input>

          <button type = "submit">Add </button>
          <button onClick = {clearClickHandler}> Clear</button>
        </form>
        
    );
}


export default MedicalTreatmentPanel;
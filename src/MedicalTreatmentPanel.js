import React from 'react';



function MedicalTreatmentPanel(props){
    
   

    const [treatId, setTreatId] = React.useState('');
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [treatCourseId, setTreatCourseId] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
   
    
    const [data,setData] =React.useState([{name, treatCourseId,startDate,type,treatId,category}]);

    function display () {
        alert("[" + "name = "+ name+ ", treatID = "+ treatId + ", startDate = "+startDate +" ,type = " + type + " ,category= " + category + " ,treatCourseId =" + treatCourseId + "]" );



    } 
     
    function clearClickHandler () {
        setTreatId('');
        setName('');
        setCategory('');
        setTreatCourseId ("");
        setStartDate ("");
        setType ("");
    }

    return(
  

        <form >
            <br/>
            <h1 className ="h">  Medical Records  </h1>
            <br/>
            <input placeholder="TreatID" value = {treatId} type="text"  onChange = {e=> setTreatId (e.target.value)} name= "treatId" ></input>

            <br/>

            <input placeholder=" Name" value= {name} type="text"  onChange={e=> setName (e.target.value)} name="name" ></input>

            <br/>

            <input placeholder="StartDate" type="text"  onChange = { e=> setStartDate(e.target.value)} name="startDate"  value= {startDate} ></input>
            
            <br/>

            <input placeholder="TreatCourseID "type="text"    onChange = {e=> setTreatCourseId(e.target.value) } name="treatCourseId"  value= {treatCourseId} ></input>
            <br/>

            <input placeholder="Category"type="text"   onChange = {e=> setCategory(e.target.value)}name ="category"  value= {category}></input>
            <br/>
            <input placeholder="Type" type="text"   onChange = {e=> setType(e.target.value) } name="type" value={type} ></input>

          <button type = "button"  onClick = {display}>Add </button>
          <br/>
          <br/>
          <button onClick = {clearClickHandler}> Clear</button>
          <br/>

        </form>

        
    );


    }
export default MedicalTreatmentPanel;
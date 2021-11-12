import React from 'react';


function MedicalTreatmentPanel(props){
    {props.treatId}
    {props.treatCourseId}
    {props.type}
    {props.category}
    {props.name}
    {props.startDate}

    const [treatId, settreatId] = React.useState('');
    const [name, setname] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [treatCourseId, settreatCourseId] = React.useState('');
    const [startDate, setstartDate] = React.useState('');
    const [type, settype] = React.useState('');

    function showSubmit (events) {
        alert("[" + "name = "+ name+ ", treatID = "+ treatId + ", startDate = "+startDate +" ,type = " + type + " ,category= " + category + " ,treatCourseId =" + treatCourseId + "]" );
    

    events.preventDefault();
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
        <form onSubmit = {showSubmit}>
            <h1>  Medical Records  </h1>

            <input placeholder="TreatID" value={treatId}  onChange = { e => settreatId(e.target.value)}  ></input>

            <br/>

            <input placeholder=" Name" value={name}  onChange = { e => setname(e.target.value)}  ></input>

            <br/>

            <input placeholder="StartDate" value={startDate}  onChange = { e => setstartDate(e.target.value)}  ></input>
            
            <br/>

            <input placeholder="TreatCourseID " value={treatCourseId}  onChange = { e => settreatCourseId(e.target.value)}  ></input>
            <br/>

            <input placeholder="Category" value={category}  onChange = { e => setcategory(e.target.value)}  ></input>
            <br/>
            <input placeholder="Type" value={type}  onChange = { e => settype(e.target.value)}  ></input>

            <br/><br/><br/><br/>

        
            <button style={{color:"red"}} onClick={clearClickHandler}>Clear</button>

            <br/><br/><br/><br/>
         <hr/>

         {name  && treatCourseId   && category && type && startDate
         
          <input  type = "submit" value=" Show treatment Records "  display = "inline-block" />
         }

        </form>
    );

}

export default MedicalTreatmentPanel;
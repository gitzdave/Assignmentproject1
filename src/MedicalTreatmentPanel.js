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

    function showClickHandler () {
        window.alert("[" + "id = "+ treatId + ", name = "+name+ ", startDate = "+ startDate +"]");

    }

    
    function clearClickHandler () {
        settreatId('');
        setname('');
        setcategory('');
        settreatCourseID ("");
        setstartDate ("");

    }


    return(
        <div>

            <input placeholder="treatID" value={treatId}  onChange = { e => settreatID(e.target.value)}  ></input>

            <br/>

            <input placeholder=" Name" value={name}  onChange = { e => setName(e.target.value)}  ></input>

            <br/>

            <input placeholder="startDate" value={startDate}  onChange = { e => setstartDate(e.target.value)}  ></input>
            
            <br/>

            <input placeholder="treatCourseID " value={treatCourseId}  onChange = { e => settreatCourseID(e.target.value)}  ></input>
            <br/>

            <input placeholder="category" value={category}  onChange = { e => setcategory(e.target.value)}  ></input>
            <br/>

            <button style={{color:"blue"}} onClick={showClickHandler}>show</button>

            <button style={{color:"red"}} onClick={clearClickHandler}>Clear</button>

            <br/><br/><br/><br/>

            <input placeholder="Some value"></input>

        </div>
    );

}

export default MedicalTreatmentPanel;
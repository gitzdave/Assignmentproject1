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

    function showClickHandler (props) {
        window.alert("[" + "name = "+ props.name+ ", treatID = "+ props.treatId + ", startDate = "+props.startDate +" ,type = " + props.type + " ,category= " + props.category + " ,treatCourseId =" + props.treatCourseId + "]" )
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
        <div>

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

            <button style={{color:"blue"}} onClick={showClickHandler}>show</button>

            <button style={{color:"red"}} onClick={clearClickHandler}>Clear</button>

            <br/><br/><br/><br/>

        

        </div>
    );

}

export default MedicalTreatmentPanel;
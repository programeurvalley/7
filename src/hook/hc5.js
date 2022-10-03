import { useState , useEffect } from "react";


function DiffSt(){
    const [stc , setStC] = useState(0);
    const [sta , setStA] = useState(0);
    const [stl , setStL] = useState(0);


    const myapp ={
        border : "solid black 1px"
    }

    function StC(){
        setStC(stc+1);
        console.log("im console state : " , stc);
    }

    function StA(){
        setStA(sta+1);
        alert("im alert state : " + sta)
    }

    function StL(){
        setStL(stl+1);
    }

    /*useEffect(() => {console.log("im console state : " , stc);}, [stc] );

    useEffect(() => {alert("im alert state : " + sta);}, [sta] );*/

    useEffect(() => {localStorage.setItem('state',stl)}, [stl] );


    return (
        <div>
            <center>
            <h1>Challenge 05</h1><br/><br/>
            <h2>Chouse your data</h2>
            <div style={myapp} >
                <h3>im console state : {stc}</h3>
                <p>Click this is to show num changed</p>
                <button onClick={StC}>Click me</button>
            </div>
            <div style={myapp} >
                <h3>im alert state : {sta}</h3>
                <p>Click this is to show num changed</p>
                <button onClick={StA}>Click me</button>
            </div>
            <div style={myapp} >
                <h3>im lcoalStorgae state : {stl}</h3>
                <p>Click this is to show num changed</p>
                <button onClick={StL}>Click me</button>
            </div>
            </center>
        </div>
    )
}

export default DiffSt;
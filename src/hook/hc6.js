//import { useState , useEffect } from "react";

function DisRan(){

    /// not fi

    let arr = ["first text ", "second text" , "third text"];

    let x =  Math.floor(Math.random()*3);

    return (
        <div>
            <center>
                <h1>Challenge 06</h1>
                <h3>Click here ti get a random compilent</h3>
                <h4>{arr[x]}</h4>
            </center>
        </div>
    )
}

export default DisRan;
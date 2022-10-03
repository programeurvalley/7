import React, { useState } from "react";
import Subchall from "./subchall19";

function BackColor(){

    const [check , setCheck] = useState(false);

    return (
        <div style={(check) ? {
            backgroundColor : "Black",
            color : "white"
        } :  {
            backgroundColor : "white",
            color : "black"
        }}>
            <center><h1>Challenge 19</h1></center>
            <Subchall check={check} setCheck={setCheck} />
        </div>
    )


}

export default BackColor

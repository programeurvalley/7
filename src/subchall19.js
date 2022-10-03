
import React from "react";

function Subchall(props){

    return (
    <div>
            <center>
                <p>I'm little boy , but i have big influencce on my mother </p>
                <button onClick={() => props.setCheck(!props.check) }>Check it </button>
            </center>
    </div>
    )

}

export default Subchall


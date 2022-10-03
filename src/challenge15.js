import { useState } from "react";

function IncDec(){

    const [n, setNC] = useState(0);

    function Inc(){
        setNC(parseInt(n)+1)
    }

    function Dec(){
        setNC(parseInt(n)-1)
    }


    return (
            <div><br/><br/>
            <h1>challenge 15</h1>
                <br/>
                <h3>Counter : {n}</h3>
                <br/>
                <button onClick={Inc}>Incresement</button>
                <button onClick={Dec}>Decresement</button><br/>
                <button onClick={() => setNC(parseInt(n)+1)}>Incresement</button>
                <button onClick={() => setNC(parseInt(n)-1)}>Decresement</button>
            </div>
        );  
}

export default IncDec
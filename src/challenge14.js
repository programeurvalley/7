import { useState } from "react";

function ShowTwo(){

    const [s, setSNum] = useState(0);
    const [f, setFNum] = useState(0);
    const [r , setR] = useState(0)

    function Sum(){
        setR(parseInt(f)+parseInt(s))
    }

    return (
            <div><br/><br/>
            <h1>challenge 14</h1>
                <br/>
                <h3>Adding to Numbers : </h3>
                <br/>
                <input
                    type="text"
                    placeholder="Entre a text"
                    onChange={(e) => setFNum(e.target.value)} 
                    value={f}
                />

                <input
                    type="text"
                    placeholder="Entre a text"
                    onChange={(e) => setSNum(e.target.value)} 
                    value={s}
                />

                <button onClick={Sum} >Sum</button>
                <h2>Total: {r}</h2>
            </div>
        );  
}

export default ShowTwo
import { useState , useEffect } from "react";

function ClcTime(){
    const [st , setSt] = useState(0);

    
    useEffect(() => {console.log("useEffect runs!")});

    useEffect(() => {
        document.title = "This is a title"
    }, [])
      

    console.log("compenent re-render ! ");

    return(<div>
        <center>
            <h1>React use Effect Challenges</h1>
            <h2>Challenge 01</h2>
            <h4>You have clicked {st} times!</h4>
            <button onClick={() => setSt(st+1)} >Click here</button>
        </center>
    </div>
    )
}

export default ClcTime;
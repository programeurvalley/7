import { useState , useEffect } from "react";
import ReactLoading from 'react-loading';

function Fetch(){
    const [check , setCheck] = useState(false);

    setTimeout(() => {
        setCheck(true);
    }, 6000);


    

    return (
        <div>
            <h1>Let's Fetch some data</h1>
            {(check == true) ? 
            <div>
                <h1>Hello , my name is chemsou</h1>
                <h3>I have 23 years old</h3>
                <h5>I'm  a second year student at the univeisty annab </h5>
            </div>
            : 
                <><ReactLoading type={"spin"} color={"green"} height={667} width={375} /></>
            }
        </div>
    )

}

export default Fetch;
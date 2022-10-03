import {useState} from "react";

function AddCount(){
    const [st , setSt] = useState(0);
    const [check , setCheck] = useState();

    function Add(){
        setCheck(true);
        setSt(st+1);
    }

    function Min(){
        setCheck(false);
        setSt(st-1);
    }


    return(<div>
        <center>
            <h2>Challenge 03</h2>
            <h4>You Count is : {st}</h4>
            <button onClick={Add} >Plus 1</button>
            <button onClick={Min} >Minus 1</button>
            <h4>Last boutton clicked : {(check == true) ? "+1" : (check == false) ? "-1" : ""}</h4>
        </center>
    </div>
    )
}

export default AddCount;
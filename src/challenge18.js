// Props  => Paramatre 
// parrent and childs 

// ({name}) ; hello {name};

// Childre n props => fucntion (props) {props.children} ; props it jsut name : param , name ex : para.children

// attribute children ; children="<h1>Hello world</h1>"

// one way  ( per => children )

// React developer Tools

import React from "react";
import { useState } from "react";

function AddComp(para){
    
    const [users, setUsers] = useState([1,2]);

    
    let x =  users.map(i => <>
        <div>
            <h1>This is Component {i}</h1>
            <p>This is paragraphe{i}</p>
        </div>
    </>)
    
    function Adder(){
        setUsers([...users, users[users.length-1] +1])
    }

    // () =>  setUsers([...users, users[users.length-1] +1]
    
    return <div>
        {para.children}
        {x}
        <button onClick={Adder} >Click Me</button>
    </div>
}



export default AddComp
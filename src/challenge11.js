import { useState } from "react";

function AddComponent(){
    
    const [users, setUsers] = useState([1, 2, 3, 4])

    
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
        <h1>Challenge 11</h1>
        <hr/>
        <h3>This is a List Component</h3>
        {x}
        <button onClick={Adder} >Click Me</button>
    </div>
}

export default AddComponent;
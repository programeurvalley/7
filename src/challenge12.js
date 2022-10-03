import { useState } from "react";

/* for Styling and Binery Solution :
    let st = {
    display : "none"
}*/

function AddRemo(){
    

    /* Styling Solution :

    const [users, setUsers] = useState([1 , 2 , 3])

    let y =  <>
        <div style={st} >
            <h3>This is Component Secret Component</h3>
            <p>This is paragraphe</p>
        </div>
    </>
    
    function Adder(){
        st = {
            display : "block"
        }

        setUsers([...users, users[users.length-1] +1])
        
    }

    function Rem(){
        st = {
            display : "none"
        }

        setUsers([...users, users[users.length-1] -1])
        
    }
    

    return <div>
        <br/><br/>
        <h1>challenge 12</h1>
        <h2>This is Component With Data to Show or hide</h2>
        {y}
        <button onClick={(users[users.length-1]%2 == 1) ? Adder : Rem}>Click Me</button>

    </div> */

    /* Binery Solution :

const [choice, setChoice] = useState(0)

    
    let y =  <>
        <div style={st} >
            <h3>This is Component Secret Component</h3>
            <p>This is paragraphe</p>
        </div>
    </>
    
    function Adder(){
        st = {
            display : "block"
        }

        setChoice(1)
        
    }

    function Rem(){
        st = {
            display : "none"
        }

        setChoice(0)
        
    }
    

    return <div>
        <br/><br/>
        <h1>challenge 12</h1>
        <h2>This is Component With Data to Show or hide</h2>
        {y}
        <button onClick={(choice == 0) ? Adder : Rem}>Click Me</button>

    </div>

*/

// Booleen : 

    const [choice, setChoice] = useState(false)  

    return <div>
        <br/><br/>
        <h1>challenge 12</h1>
        <h2>This is Component With Data to Show or hide</h2>
        {choice ?
            <div  >
                <h3>This is Component Secret Component</h3>
                <p>This is paragraphe</p>
            </div>
        :
        <></>

        }
        <button onClick={() => setChoice(!choice) }>Click Me</button>

    </div>  


}

export default AddRemo
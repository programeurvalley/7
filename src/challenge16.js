import { useState } from "react";


let x  = <></>;

function ConF(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [y , setY] = useState(false)

    { y ?  x =  <div>
        Name : {name}<br/>
        Email : {email}<br/>
        Phone : {phone}<br/>
        {setY(false)}
    </div>
        
    : <></>
    }
    
    
    
    function AffF(){
        setY(true)
    }

        

    return (
        <div><br/><br/>
        <h1>challenge 16</h1>
            <br/>
            <h3>Contact Form :</h3>
            <br/>
            <input type="text" 
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value)} 
                    /><br/>
            <input type="text" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    /><br/>
            <input type="text" 
                placeholder="Pone number" 
                onChange={(e) => setPhone(e.target.value)} 
                /><br/><br/>
            <button onClick={AffF}>Submit Contact</button>
            {x}
        </div>
    );  

}

export default ConF
import { useState } from "react";

function InputSU(){

    const [message, setMessage] = useState('');
    
    /*const handleChange = e => {
        setMessage(e.target.value);
    };*/

    return (
            <div><br/><br/>
            <h1>challenge 13</h1>
                <br/><br/>
                <input
                    type="text"
                    placeholder="Entre a text"
                    onChange={(e) => setMessage(e.target.value)} 
                    value={message}
                />
            
                <h2>Message: {message}</h2>
            </div>
        );  
}

export default InputSU
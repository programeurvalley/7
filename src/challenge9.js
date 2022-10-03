import React, { useState } from "react";



/*function ONADDCONT(){

    const divS = {
        border : "solid black 1px",
        borderRadius : 5,
        margin : "10px",
        padding : "5px",
        width: "700px"
    }

    let i = 4 ;

    const Input = () => {
        i++;
        return (<div style={divS} >
            <h2>This is Component {i}</h2>
            <p>This is paragraph {i}</p>
        </div>);
        };

    const Form = () => {
            const [inputList, setInputList] = useState([]);
            const onAddBtnClick = event => {
                setInputList(inputList.concat(<Input key={inputList.length} />));
            };
    
    return <div>
        <br/><br/>
        <h1>Challenge 09</h1>
        <hr/>
        <h3>This is Component With Children</h3>
        <div style={divS} >
            <h2>This is Component 1</h2>
            <p>This is paragraph 1</p>
        </div>
        <div style={divS} >
            <h2>This is Component 2</h2>
            <p>This is paragraph 2</p>
        </div>
        <div style={divS} >
            <h2>This is Component 3</h2>
            <p>This is paragraph 3</p>
        </div>
        <div style={divS} >
            <h2>This is Component 4</h2>
            <p>This is paragraph 4</p>
        </div>
        <div>
            {inputList}
            <button onClick={onAddBtnClick}>Add input</button>
        </div>
    </div>


}

export default ONADDCONT*/
// import logo from './logo.svg';
import './App.css';
import Header from './header';
import { Fun, SECOND} from './challenge1';
import BIG  from './challenge2';
import CONTAINCOM from './challenge3';
import EACHONE from './challenge4';
import IMGS from './challenge5';
import LINKLIST from './challenge6';
import ULTRALINK from './challenge7';
import IMGCARD from './challenge8';
//import ONADDCONT from './challenge9';
import AddComponent from './challenge11';
import AddRemo from './challenge12';
import InputSU from './challenge13';
import ShowTwo from './challenge14';
import IncDec from './challenge15';
import ConF from './challenge16';
import Pro from './challenge17';
import Tester from './test';
import AddComp from './challenge18';
import BackColor from './challenge19';
import TablePer from './challenge21';
import BtnLyout from './uch';
import React, { useState } from "react";
import ClcTime from './hook/hc1';
import AddCount from './hook/hc3';
import Fetch from './hook/hc4';
import DiffSt from './hook/hc5';
import DisRan from './hook/hc6';

function App() {

let nom ="walid";

let arr = [{
  id: 0,
  first: "walid",
},
{
  id: 1,
  last:"bada"
},{
  id: 2,
  first : "tarek",
  twitter : "@tarekjs"
}];

let obj = [{
  id:0,
  head : "Here i m ",
  para : "this is paragraph",
  clk : "Feeling but"
},{
  id:1,
  head : "Secodn header",
  para: "this second para",
  clk : "second btn"
},{
  id:2,
  head : "Third header",
  para: "this Thirdpara",
  clk : "Third btn"
}];

const [count , setCount] = useState(0)
console.log(count)


  return (

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    /*<div>
      <h1 style={{
      color:"red",
      backgroundColor:"black",
      margin:30,
      padding : 5 
  }}>Hello world</h1>


  <div>
      <center>
        <h1>Challenge 20</h1>
        <h2>Let's Discover the power of having children !</h2>
        
        <div style={{display:"flex"}} >
        
          <div style={myborder} >
          <Cardalign>
            <h5>Hi , I 'm a card</h5>
            <p>loremm ,efn z ,  ezfiufn ezfiebf uie ibufzudbzefjezfj </p>
          </Cardalign>
          </div>
        
        </div>
      </center>
    </div>


  </div>*/
  <div>
    <Header />
    <Fun />
    <SECOND />
    <BIG />
    <CONTAINCOM />
    <EACHONE />
    <IMGS />
    <LINKLIST />
    <ULTRALINK />
    <IMGCARD />
    <AddComponent />
    <AddRemo />
    <InputSU />
    <ShowTwo />
    <IncDec />
    <ConF />
    <div>
    <br/><br/>
      <h1>challenge 17 :</h1>
      <p>I m {nom}</p>
    </div>
    <Pro children={nom} >
    </Pro>
    <Tester >
      <h1>This is just Test</h1>
    </Tester>
    <AddComp >
        <h1>Challenge 18</h1>
        <hr/>
        <h3>This is a List Component</h3>
    </AddComp>
    <BackColor />
    <div>
      <br/><h1>Challenge 20</h1><br/>
    </div>
    <div>
      <br/><h1>Challenge 21</h1><br/>
      <table className='table'>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Twitter</th>
        </tr>

        {arr.map(e => 
          <TablePer  id={e.id}  first={e.first} last={e.last} twt={e.twitter} />
        )}
      
      </table>
    </div>
    
    <div>
      <h1>Chose your Layout :</h1>
        <div>
            <button onClick={() => setCount(1)}>Raw Layout</button>
            <button>Card Layout</button>
            <button>Table Layout</button>
            <button onClick={() => setCount(0)}>Hide Layout</button>
        </div>
        <div>
        {(count == 1) ? obj.map (e => <BtnLyout id={e.id} h={e.head} p={e.para} c={e.clk} />) :  <><h1>Hello world</h1></>}
        </div>
    </div>

    <ClcTime />
    <AddCount />
    <Fetch />
    <DiffSt />
    <DisRan />
    

  </div>
  );
}

export  default App

import fimg from './img/1.jpg'
import simg from './img/2.png'
import timg from './img/3.png'
import def from './img/4.png'

function IMGCARD(){
    const box = {
        height : 300 ,
        width : 200 ,  
        margin : 10, 
        border : "solid black 1px",
        padding : 10
    }

    const arr = [{
        lastName : "Walid",
        codeName : "Marvlick" ,
        age : 19,
        img : fimg
    } , {
        lastName : "Abdeljai",
        codeName : "Rooster" ,
        age : 19,
        img : simg
    } , {
        lastName : "Rafik",
        codeName : "Payback" ,
        age : 19
    } , {
        lastName : "Tark",
        codeName : "Bob" ,
        age : 19,
        img : timg
    } , {
        lastName : "Racim",
        codeName : "hawkli" ,
        age : 19,
    }]

    return <div>
        <h1>Challenge 08</h1>
        <hr/>
        <h3>This is a List Component</h3>
        <div style={{display : "flex" , justifyContent : "center"}}>
            {arr.map(e => (
                <div style={box}>
                    <img src={(e.img) ? e.img : def} style={{height: "60%", width:"99%"}}/><br/>
                    <h2>{e.lastName}</h2>
                    <p style={{color: 'red'}}>{e.codeName}<br/></p><p>{e.age}</p>
                </div>
            ))}
        </div>
    </div>
}

export default IMGCARD
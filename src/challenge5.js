import rimg from "./img/1.jpg"
import mimg from "./img/2.png"
import nimg from "./img/3.png"

function IMGS() {
    const ImgS = {
        height : "200px",
        width : "300px" , 
        margin : "10px",
        borderRadius : "10px"
    }

    return <div>
        <h1>Challenge 05</h1>
        <h4>This is a Component Holding an Image</h4>
        <hr/>
        <div style={{display: "flex" , justifyContent : "center" }} >
            <img src={rimg} alt="React JS" style={ImgS} />
            <img src={mimg} alt="MongoDB" style={ImgS} />
            <img src={nimg} alt="NodeJS" style={ImgS} />
        </div>
        <hr/>
        </div>
        
    }

export default IMGS
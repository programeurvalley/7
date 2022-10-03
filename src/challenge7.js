function ULTRALINK(){
    /*const arr = [["Walid" , "Marvlick" , 19] , ["Abdeljalil" , "Rooster" , 18] , ["Rfik" , "good", 17]]
    return <div>
        <h1>Challenge 07</h1>
        <hr/>
        <h3>This is a List Component</h3>
        <ul>
            {arr.map(e => (<div>
                <hr/>
                <h2>{e[0]}</h2>
                <p style={{color: 'red'}}>{e[1]}<br/></p><p>{e[2]}</p>
            </div>))}
        </ul>
        <hr/>
    </div>*/

    const arr = [{
        lastName : "Walid",
        codeName : "Marvlick" ,
        age : 19
    } , {
        lastName : "Walid",
        codeName : "Marvlick" ,
        age : 19
    } , {
        lastName : "Walid",
        codeName : "Marvlick" ,
        age : 19
    }]
    return <div>
        <h1>Challenge 07</h1>
        <hr/>
        <h3>This is a List Component</h3>
        <ul>
            {arr.map(e => (<div>
                <hr/>
                <h2>{e.lastName}</h2>
                <p style={{color: 'red'}}>{e.codeName}<br/></p><p>{e.age}</p>
            </div>))}
        </ul>
        <hr/>
    </div>
}

export default ULTRALINK

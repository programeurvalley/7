import React from "react"

function BtnLyout({id , h , p ,c}){



    return (<>
        <div>
            <h1>{id} - {h}</h1>
            <p>{p}</p>
            <button>{c}</button>
        </div>
    </>
    )
    
}

export default BtnLyout
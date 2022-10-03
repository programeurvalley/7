function LINKLIST(){
    const arr = [1, 2, 3, 4, 5, 6]
    return <div>
        <h1>Challenge 06</h1>
        <hr/>
        <h3>This is a List Component</h3>
        <ul>
            {arr.map(e => (<li>Use Number : {e}</li>))}
        </ul>
        <hr/>
    </div>
}

export default LINKLIST
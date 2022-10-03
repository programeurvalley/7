import React from "react";

function TablePer({id , first , last , twt}){

    return(
    <tr>
        <td>{id}</td>
        <td>{first}</td>
        <td>{last}</td>
        <td>{twt}</td>
        <td><button onClick={() => alert(id + "\n" + first + "\n" + last + "\n" + twt)}>See Detais</button></td>
    </tr>)


}

TablePer.defaultProps = {
    first : "-",
    last: "-",
    twt:"-"
}


export default TablePer
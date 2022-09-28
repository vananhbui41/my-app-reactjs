import React from "react";
const Clothes = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.children}</h1>
            <ul>
                <li><b>name: </b>{props.name}</li>
            </ul>
        </div>
    )
}
export default Clothes;
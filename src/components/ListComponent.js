import React from "react";

function ListComponent(props) {
    const myList = ["php", "C", "Java"];
    const listItems = myList.map((item) => 
        <li>{item}</li>
    )

    return (
        <ul>{listItems}</ul>
    )
}

export default ListComponent
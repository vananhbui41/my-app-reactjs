import React from "react";

function ListComponent(props) {
    const myList = [
        {
            id: 'p',
            name: 'php'
        }, 
        {
            id: 'c',
            name: 'C'
        }, 
        {
            id: 'j',
            name: 'Java'
        },
    ]
    
    const listItems = myList.map((item) => 
        <li key = {item.id}>{item.name}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default ListComponent
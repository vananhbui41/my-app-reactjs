import React from "react";
import { Component } from "react";

class Welcome extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    Welcome class components
                    {this.props.name}
                </h1>
            </div>
        );
    }
}

export default Welcome;
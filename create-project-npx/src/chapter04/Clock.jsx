import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>Hello, React!</h1>
            <h1>Current Time: {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}

export default Clock;

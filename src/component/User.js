import React from "react";

function User(props) {
    return (
        <div>
            <span>{props.end} | </span>
            <span>{props.stack}</span>
        </div>
    );
}

export default User;

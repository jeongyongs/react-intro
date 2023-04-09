import React from "react";
import User from "../component/User";

function UserPage(props) {
    const list = [
        {
            end: "Front",
            stack: "React"
        },
        {
            end: "Back",
            stack: "Spring"
        }
    ];

    return (
        <div>
            {list.map(user => <User end={user.end} stack={user.stack}/>)}
        </div>
    );
}

export default UserPage;

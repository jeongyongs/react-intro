import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="Hello, World!" numOfPage={300}/>
            <Book name="Hello, React!" numOfPage={400}/>
            <Book name="Hello, Spring!" numOfPage={500}/>
        </div>
    );
}

export default Library;

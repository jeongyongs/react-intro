import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`This book's name is ${props.name}.`}</h1>
            <h2>{`This book's page is ${props.numOfPage}.`}</h2>
        </div>
    );
}

export default Book;

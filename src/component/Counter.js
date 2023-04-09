import React from "react";

function Counter(props) {
    const [count, setCount] = React.useState(0);

    function upCount() {
        setCount(count + 1);
    }

    function downCount() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={upCount}>+1</button>
            <button onClick={downCount}>-1</button>
        </div>
    );
}

export default Counter;

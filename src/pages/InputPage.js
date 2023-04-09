import React from "react";

function InputPage(props) {
    const [inputs, setInputs] = React.useState({
        name: "",
        email: "",
        tel: "",
    });

    function onChange(e) {
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value,
        });
    }

    return (
        <div>
            <p>{inputs.name}</p>
            <p>{inputs.email}</p>
            <p>{inputs.tel}</p>

            <input type="text" id="name" placeholder="name" onChange={onChange}/><br/>
            <input type="text" id="email" placeholder="email" onChange={onChange}/><br/>
            <input type="text" id="tel" placeholder="tel" onChange={onChange}/>
        </div>
    );
}

export default InputPage;

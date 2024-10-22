import React from "react";
import ReactDOM from "react-dom";

// jsx(jsx transpile before it reaches to js)-parcel-babel

// JSX==>Babel transpiled it to React.createElement==>ReactElement-JS Object=>HTML Element(render)
const heading=<h1>Namaste React Using JSX</h1>

const Titile=()=>{
    return(
        <div>this is title component</div>
    )
}

const Heading =()=>{
    return(
        <div>
            <Titile/>
            <h1>this is heading component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);
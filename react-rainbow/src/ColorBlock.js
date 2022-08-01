import React from "react";
import colors from "./App";

function ColorBlock(props) {
    return (
        <div className="colorBlock" style={{ backgroundColor: props.color }}>
            <p>{props.color}</p>
        </div>
    );
}

export default ColorBlock;

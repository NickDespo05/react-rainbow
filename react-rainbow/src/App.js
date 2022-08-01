import "./App.css";
import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

function App() {
    let [colors, setColors] = useState([
        "violet",
        "Blue",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Greenyellow",
    ]);

    // let colorMap = colors.map((color, i) => {
    //     return <ColorBlock color={color} />;
    // });

    const addColor = (newColor) => {
        setColors([...colors, newColor]);
    };

    return (
        <div className="App">
            {colors.map((color, i) => (
                <ColorBlock color={color} />
            ))}
            <ColorForm addColor={addColor} />
        </div>
    );
}

export default App;

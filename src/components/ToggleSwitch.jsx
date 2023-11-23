import { useState } from "react";


const ToggleSwitch = () => {
    const [lightSwitch, setLightSwitch] = useState("OFF");

    const handleClick = () => {
        setLightSwitch(prev => {
            if (prev === "OFF") return "ON"
            return "OFF"
        })
    }

    return (
        <>
        <button onClick={handleClick}>
            <p style={{ color: (lightSwitch === "OFF") ? "red" : "greenyellow" }}>{lightSwitch}</p>
        </button>
        </>
    )
}

export { ToggleSwitch }
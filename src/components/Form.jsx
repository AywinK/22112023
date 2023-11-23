import { useState } from "react"

const Form = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(false);

    console.log(username, password);

    return (
        <>
            <input type="text" value={username} onChange={(e) => { setUsername(() => e.target.value) }} style={{ display: "block", marginTop: "10px", width: "350px", height: "1.5rem", padding: "15px", fontSize: "1.2rem", borderRadius: "24px" }} />
            <input type="password" value={password} onChange={(e) => { setPassword(() => e.target.value) }} style={{ display: "block", marginTop: "10px", width: "350px", height: "1.5rem", padding: "15px", fontSize: "1.2rem", borderRadius: "24px" }} />
            <button onClick={() => setIsDisplayed(prev => !prev)}>{isDisplayed ? "hide" : "show"}</button>
            {isDisplayed && <p>Username: {username}<br />Password: {password}</p>}
        </>
    )
}

export { Form }
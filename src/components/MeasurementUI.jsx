

const MeasurementUI = ({ headingText, radius, area }) => {

    const stylesObj = {
        backgroundColor: "#e2e2e2", borderRadius: "24px", padding: "15px"
    }

    return (
        <div className="measurement" style={stylesObj}>
            <h1 style={headingText === "Measurement 1" ? { color: "red" } : { color: "blue" }}>{headingText}</h1>
            <p style={headingText === "Measurement 1" ? { color: "red" } : { color: "blue" }}>Radius: {radius}</p>
            <p style={headingText === "Measurement 1" ? { color: "red" } : { color: "blue" }}>Area: {area}</p>
        </div>
    )
}

export { MeasurementUI };
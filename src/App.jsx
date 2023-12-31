import "./App.css";
import { Form } from "./components/Form";
import { MeasurementUI } from "./components/MeasurementUI";
import { ToggleSwitch } from "./components/ToggleSwitch";

function App() {
  const strArr = ["Apple", "Pear", "Orange"];
  const numsArr = [22, 22, 45, 65, 89, 100];
  const secondNumsArr = [45, 87, 92, 12, 76, 16];

  const data = numsArr.map((el, i) => {
    const r1 = el;
    const r2 = secondNumsArr[i];
    const a1 = Math.PI * r1 ** 2;
    const a2 = Math.PI * r2 ** 2;
    const vari = Math.abs(a1 - a2);
    const dataObj = {
      Radius1: r1,
      Radius2: r2,
      Area1: a1,
      Area2: a2,
      Variance: vari,
    };

    for (const prop in dataObj) {
      dataObj[prop] = dataObj[prop].toFixed(2);
    }
    return dataObj;
  });

  console.table(data);

  const UI = () => {
    try {
      return (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((prop) => (
                <th key={prop}>{prop}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr key={el.Variance}>
                  <td>{el.Radius1}</td>
                  <td>{el.Radius2}</td>
                  <td>{el.Area1}</td>
                  <td>{el.Area2}</td>
                  <td>{el.Variance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return (
    <>
      <div>
        {strArr.map((str) => str.toLowerCase() + " ")}
        <br />
        numsArr circular areas:{" "}
        {numsArr.map((num) => (Math.PI * num ** 2).toFixed(2) + ", ")}
        <br />
        Difference between areas of Arrs:{" "}
        {numsArr.map(
          (num, i) =>
            (Math.abs(num ** 2 - secondNumsArr[i] ** 2) * Math.PI).toFixed(2) +
            ",   "
        )}
        <br />
        <UI />
        <br />
        {data.map((el, i) => {
          const stylesObj = { display: "flex", gap: "2rem" }
          return (
            <>
              <h1>Circle {i + 1}</h1>
              <div key={i} style={stylesObj}>
                <MeasurementUI headingText={"Measurement 1"} radius={el.Radius1} area={el.Area1} />
                <MeasurementUI headingText={"Measurement 2"} radius={el.Radius2} area={el.Area2} />
              </div>
              <h2 style={{ color: "greenyellow" }}>Variance: {el.Variance}</h2>
            </>
          )
        })}
        <br />
        <ToggleSwitch />
        <br />
        <Form />
      </div>
    </>
  );
}

export default App;

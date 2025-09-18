import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
type CounterProps = {
    title: string;
    initValue: number;
};
function Counter({ title, initValue }: CounterProps) {
    const [countValue, countChange] = useState(initValue);
    const [step, setStep] = useState(10);
    const up = () => countChange(countValue + step);
    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setStep(Number(evt.target.value));
    };
    const design = { textDecoration: "underline" };
    return (
        <>
            <h1 style={design}>{title}</h1>
            <input type="number" value={step} onChange={changeHandler} />
            <Button variant="contained" onClick={up}>
                +{step}
            </Button>{" "}
            {countValue}
        </>
    );
}

function App() {
    return (
        <>
            <Counter title="카운터" initValue={10}></Counter>
        </>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
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
    return (
        <>
            <h1>{title}</h1>
            <input type="number" value={step} onChange={changeHandler} />
            <button onClick={up}>+{step}</button> {countValue}
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

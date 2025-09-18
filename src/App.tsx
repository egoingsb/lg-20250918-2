import { useState } from "react";
import "./App.css";
type CounterProps = {
    title: string;
    initValue: number;
};
function Counter({ title, initValue }: CounterProps) {
    const count = useState(initValue);
    const countValue = count[0];
    const countChange = count[1];
    function up() {
        countChange(countValue + 1);
    }
    return (
        <>
            <h1>{title}</h1>
            <button onClick={up}>+1</button> {countValue}
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

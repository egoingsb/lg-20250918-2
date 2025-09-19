import { useEffect, useState } from "react";
import { Button } from "@mui/material";
type CounterProps = {
    title: string;
    initValue: number;
};
export function Counter({ title, initValue }: CounterProps) {
    const [countValue, countChange] = useState(initValue);
    const [step, setStep] = useState(10);
    const up = async () => {
        const response = await fetch("http://localhost:9999/counter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: countValue + step }),
        });
        const result = await response.json();
        countChange(result.value);
    };
    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setStep(Number(evt.target.value));
    };

    const design = { textDecoration: "underline" };

    useEffect(() => {
        document.title = String(countValue) + "," + String(step);
    }, [countValue, step]);

    useEffect(() => {
        fetch("http://localhost:9999/counter")
            .then((data) => {
                return data.json();
            })
            .then((result) => countChange(result.value));
    }, []);

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

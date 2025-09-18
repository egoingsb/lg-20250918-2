import "./App.css";

function Counter(props) {
    console.log("props", props);
    return (
        <>
            <h1>{props.title}</h1>
            <button>+1</button> {props.initValue}
        </>
    );
}

function App() {
    return (
        <>
            <Counter title="카운터" initValue="10"></Counter>
            <Counter title="불면증 카운터" initValue="20"></Counter>
        </>
    );
}

export default App;

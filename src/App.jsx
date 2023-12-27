import React, { useState } from "react";
import "./App.css";

const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={props.onUp}>+</button>
      {props.count}
    </div>
  );
};

const DisplayCounter = (props) => {
  return props.count;
};

const App = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <Counter
        count={count}
        onUp={() => {
          setCount((prev) => prev + 1);
        }}
      />
      <DisplayCounter count={count} />
      Hello
    </div>
  );
};

export default App;

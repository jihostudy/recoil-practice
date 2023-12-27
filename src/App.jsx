import React, { useState } from "react";
import "./App.css";
import { atom, useRecoilState } from "recoil";

const countState = atom({
  key: "count",
  default: 10,
});
const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {count}
    </div>
  );
};

const DisplayCounter = () => {
  const [count] = useRecoilState(countState);
  return <div>{count}</div>;
};

const App = () => {
  return (
    <div>
      <Counter />
      <DisplayCounter />
      Hello
    </div>
  );
};

export default App;

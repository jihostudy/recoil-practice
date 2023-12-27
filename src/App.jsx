import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import DisplayCounter from "./components/DisplayCounter";
import { useRecoilState } from "recoil";
import { viewState } from "./atom/atom";
const App = () => {
  const [view, setView] = useRecoilState(viewState);
  return (
    <div>
      {view ? (
        <Counter />
      ) : (
        <button onClick={() => setView((prev) => !prev)}>열기</button>
      )}
      <DisplayCounter />
      Hello
    </div>
  );
};

export default App;

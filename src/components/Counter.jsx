import React, { useEffect } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";

import { countState, viewState } from "../atom/atom";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  const setViewState = useSetRecoilState(viewState);
  const resetValueState = useResetRecoilState(countState);
  const closeHandler = () => {
    setViewState((prev) => !prev);
    // resetValueState();
  };
  useEffect(() => {
    return resetValueState;
  }, []);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {count}
      <br />
      <button onClick={closeHandler}>닫기</button>
    </div>
  );
};

export default Counter;

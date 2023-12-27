import React from "react";
import { countState } from "../atom/atom";
import { useRecoilState } from "recoil";

const DisplayCounter = () => {
  const [count] = useRecoilState(countState);
  return <div>{count}</div>;
};
export default DisplayCounter;

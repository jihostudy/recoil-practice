import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* #1. 내가 사용할 전역 상태의 범위를 지정. <RecoilRoot> 보통 최상위 루트에 지정한다. */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

// #2.

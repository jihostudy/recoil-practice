import { atom } from "recoil";

export const countState = atom({
  key: "count",
  default: 10,
});

export const viewState = atom({
  key: "view",
  default: true,
});

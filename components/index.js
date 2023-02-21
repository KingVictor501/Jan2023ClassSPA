export { default as Header } from "./Header";
export { default as Nav } from "./Nav";
export { default as Main } from "./Main";
export { default as Footer } from "./Footer";

import { Header, Nav, Main, Footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;
}

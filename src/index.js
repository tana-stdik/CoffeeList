import React from "react";
import ReactDOM from "react-dom";
// import { Grid, Row, Col } from "react-flexbox-grid";
import { CoffeeList } from "./CoffeeList.jsx";
import "./style.css";

function App(_props) {
  return (
    <div className="App">
      <CoffeeList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));

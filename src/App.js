import SetUpRouter from "./routers/SetUpRouter";
import { BrowserRouter } from "react-router-dom";
// const { BrowserRouter } = require("react-router-dom");
// import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
// import SetUpRouter from "./routers/SetUpRouter";
// // import Header from "./Header";
// // import Menu from "./Menu";
// // import Footer from "./Footer";
// // import Content from "./Content";


// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         {/* <Header/>
//         <Menu/>
//         <Content/>
//         <Footer/> */}
//         <SetUpRouter/>
//       </BrowserRouter>
//     )
//   }
// }

const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

function App() {
  return (
    <BrowserRouter>
      <SetUpRouter />
    </BrowserRouter>
  )
};

export default App;
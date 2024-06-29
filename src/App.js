import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import DevNavbar from "./components/DevNavbar";

function App() {
  return (
    <BrowserRouter>
      {/* <DevNavbar /> */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

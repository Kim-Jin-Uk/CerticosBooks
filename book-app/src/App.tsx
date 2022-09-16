import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Own from "./own";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/own" element={<Own />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

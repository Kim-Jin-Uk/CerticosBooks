import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Own from "./own/[page]";
import Search from "./search/[target]/[query]/[page]";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/own/:page" element={<Own />}></Route>
            <Route path="/search/:target/:query/:page" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

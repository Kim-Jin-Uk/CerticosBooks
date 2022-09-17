import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Own from "./own/[page]";
import Search from "./search/[target]/[query]/[page]";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/own/:page" element={<Own />}></Route>
            <Route path="/search/:target/:query/:page" element={<Search />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

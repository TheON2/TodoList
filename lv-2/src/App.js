import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "./pages/Main";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Main/>/>
        <Route path='/:id' element=<Detail/>/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
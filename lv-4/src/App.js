import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element=<Main/>/>
          <Route path='/:id' element=<Detail/>/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Goa from "./component/pages/Goa";
import Banglore from "./component/pages/Banglore"; // Correct the spelling and path
import Kolkata from "./component/pages/Kolkata";
import Singapore from "./component/pages/Singapore";
import Malaysia from "./component/pages/Malaysia";
import Bangkok from "./component/pages/Bangkok";
import NewYork from "./component/pages/NewYork";
import Paris from "./component/pages/Paris";
import Niaboy from "./component/pages/bangloreclick/Niaboy"; // Correct path

// Create root and render the application
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/bengaluru" element={<Banglore/>}/>
      <Route path="/goa" element={<Goa/>}/>
      <Route path="/kolkata" element={<Kolkata/>}/>
      <Route path="/singapore" element={<Singapore/>}/>
      <Route path="/malaysia" element={<Malaysia/>}/>
      <Route path="/bangkok" element={<Bangkok/>}/>
      <Route path="/new-york" element={<NewYork/>}/>
      <Route path="/paris" element={<Paris/>}/>
      <Route path="/banglore/niaboy" element={<Niaboy />} />
    </Routes>
  </BrowserRouter>
);

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { ViewFrame } from "./components";
import { NotFound } from "./pages/Common/Error";
import "aos/dist/aos.css";
import UserRouter from "./pages/User/Router";
import ManagerRouter from "./pages/Admin/Router";
import SigninRouter from "./pages/Common/Router";



function App() {
  return (
    <ViewFrame>
      <Router>
        <Routes>
          <Route path="user/*"   element={<UserRouter/>}/>
          <Route path="admin/*"  element={<ManagerRouter/>}/>
          <Route path="signin/*" element={<SigninRouter/>}/>
          <Route path=""         element={<Navigate replace to="signin"/>} />
          <Route path="*"        element={<NotFound root=""/>}/>
        </Routes>
      </Router>
    </ViewFrame>
  );
}

export default App;

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Email from "./pages/Email";
import MyCalendar from "./pages/MyCalendar";
import Otp from "./pages/Otp";
import Signin from "./pages/Signin";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route  ></Route>
          <Signin></Signin>
          <Email></Email>
          <Otp></Otp>
          <Navbar></Navbar>
          <MyCalendar></MyCalendar>
        </Routes>
      </Router>
    </>
  );
}

export default App;

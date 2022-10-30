import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";
import ScrollToTop from "./ScrollToTop"

function App() {
  return (
             //   <ScrollToTop>

     <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
     </div>
   // <ScrollToTop/>
  );
}

export default App;

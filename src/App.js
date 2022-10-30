import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";
import ScrollToTop from "./ScrollToTop"
export const UserContext = React.createContext();
function App() {
  return (
                

    // BEM
    <UserContext.Provider value="Reed">
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    <UserContext/>
  );
}

export default App;

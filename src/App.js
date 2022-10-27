import React, { useState, createContext } from "react";
import Home from "./pages/Home";

export const UserContext = createContext();

function App() {
  const [margin, setMargin] = useState("");
  return (
    <>
      <UserContext.Provider value={{marginValue:margin, setMarginFunc:setMargin}}>
        <Home/>
      </UserContext.Provider>
    </>
  );
}

export default App;

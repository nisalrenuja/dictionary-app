import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";

//Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header />
      </div>
    </InputContext.Provider>
  );
}

export default App;

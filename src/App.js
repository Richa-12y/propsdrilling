import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import ChildOne from "./components/ChildOne";

export const ChildOneContext = createContext();

let data = {
  data: [
    {
      heading: "shanu",
      img: "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/11/IMG-20221108-WA0006.jpg?w=701&ssl=1",
    },
    {
      heading: "richa",
      img: "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/11/IMG-20221108-WA0006.jpg?w=701&ssl=1",
    },
  ],
  title: " this is bhanu",
};
export function App() {
  return (
    <div className="App">
      <ChildOneContext.Provider value={data}>
        <ChildOne />
      </ChildOneContext.Provider>
    </div>
  );
}

export default App;

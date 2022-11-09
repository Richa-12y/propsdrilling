import React, { createContext, useContext } from "react";
import { ChildOneContext } from "../App";
import ChildThree from "./ChildThree";

export const childContext = createContext();
const ChildTwo = () => {
  const { title } = useContext(ChildOneContext);

  return (
    <div>
      {title}
      <childContext.Provider value="hey context inside componet">
        <ChildThree />
      </childContext.Provider>
    </div>
  );
};

export default ChildTwo;

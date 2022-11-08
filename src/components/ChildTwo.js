import React from "react";
import ChildThree from "./ChildThree";

const ChildTwo = ({ fName, lName, handleClickOne, handleClickTwo }) => {
  return (
    <div>
      <div>This is ChildTwo Component.</div>
      <ChildThree
        fName={fName}
        lName={lName}
        handleClickOne={handleClickOne}
        handleClickTwo={handleClickTwo}
      />
      <button onClick={() => handleClickOne("Hello from ChildTwo")}>
        Childtwo
      </button>
      <button onClick={() => handleClickTwo("Hii from ChildTwo")}>
        Childtwo
      </button>
    </div>
  );
};

export default ChildTwo;

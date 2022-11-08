import React from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = ({ fName, lName, handleClickOne, handleClickTwo }) => {
  return (
    <>
      <div>This is ChildOne Component.</div>
      <ChildTwo
        fName={fName}
        lName={lName}
        handleClickOne={handleClickOne}
        handleClickTwo={handleClickTwo}
      />
      <button onClick={() => handleClickOne("Hello from ChildOne")}>
        Childone
      </button>
      <button onClick={() => handleClickTwo("Hii from ChildOne")}>
        Childone
      </button>
    </>
  );
};

export default ChildOne;

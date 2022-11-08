import React from "react";

const ChildThree = ({ fName, lName, handleClickOne, handleClickTwo }) => {
  return (
    <>
      <div>This is ChildThree Component.</div>
      <div>{fName}</div>
      <div>{lName}</div>
      <button onClick={() => handleClickOne("Hello from ChildThree")}>
        ChildThree
      </button>
      <button onClick={() => handleClickTwo("Hii from ChildThree")}>
        ChildThree
      </button>
    </>
  );
};

export default ChildThree;

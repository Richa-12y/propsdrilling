import React, { useContext } from "react";
import { ChildOneContext } from "../App";
import Cart from "./Cart";
import { childContext } from "./ChildTwo";

const ChildThree = () => {
  const { data } = useContext(ChildOneContext);
  const result = useContext(childContext);
  console.log(data);
  console.log(result);

  return (
    <>
      {data.map((el, i) => {
        return (
          <Cart
            onClick={() => console.log(el.heading)}
            name={el.heading}
            src={el.img}
          />
        );
      })}
    </>
  );
};

export default ChildThree;

import React from "react";

const Cart = ({ onClick, src, name }) => {
  return (
    <div>
      <header>{name} </header>
      <section>
        <img src={src} alt="oo" />
      </section>
      <footer>
        <button onClick={onClick}>see more</button>
      </footer>
    </div>
  );
};

export default Cart;

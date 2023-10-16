import React from "react";
import "./AddButton.css";
export default function AddButton({ count, setCount }) {
  const minusHandle = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="btn">
      <button
        style={{ display: count === 0 && "none" }}
        onClick={minusHandle}
        className="minusBtn"
      >
        -
      </button>
      <button onClick={() => count === 0 && setCount(1)} className="mainBtn">
        {count > 0 ? count : "Add To Cart"}
      </button>
      <button
        style={{ display: count === 0 && "none" }}
        onClick={() => setCount(count + 1)}
        className="plusBtn"
      >
        +
      </button>
    </div>
  );
}

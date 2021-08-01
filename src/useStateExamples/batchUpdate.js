import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // 使用函数式更新 preCount => preCount + 1
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>+ 1</button>
    </>
  );
}

export default Counter;

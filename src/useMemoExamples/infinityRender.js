import React, { useState, useEffect } from "react";

export default function InfinityRender() {
  const [count, setCount] = useState(0);
  const value = { name: 1 }; // 声明变量 value

  useEffect(() => {
    setCount(Math.random()); // 修改 count
    alert("render");
  }, [value]); // value 作为更新依赖
  return <div className="App">useMemo 实例 Count: {count}</div>;
}

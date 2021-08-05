  // 子组件渲染 -> 子组件 effect -> 父组件的 effect -> 父组件 effect 的 cleanup -> 子组件渲染 -> etc ...
  // effect 是在每次渲染后执行的s
import { useState, useEffect } from "react";

export default function Father() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("爸爸组件执行 effect ", count);
    return () => {
      console.log("exec cleanup func", count);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click +1 </button>
      <Son />
    </div>
  );
}

const Son = () => {
  useEffect(() => {
    console.log("儿子组件执行 effect");
  });
  return <div>我是儿子组件</div>;
};

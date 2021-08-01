import React, { useState } from "react";

// 编写我们自己的hook，名字以use开头
const useCounter = (initialValue) => {
  // 接受初始化的值生成state
  const [count, changeCount] = useState(initialValue);
  // 声明减少的方法
  const decrease = () => {
    changeCount(count - 1);
  };
  // 声明增加的方法
  const increase = () => {
    changeCount(count + 1);
  };
  // 声明重置计数器方法
  const resetCounter = () => {
    changeCount(0);
  };
  // 将count数字与方法返回回去
  return [count, { decrease, increase, resetCounter }];
};

export default function Counter() {
  const [count, controlCount] = useCounter(10);

  return (
    <div>
      当前数量：{count}
      <button onClick={controlCount.decrease}>减少</button>
      <button onClick={controlCount.increase}>增加</button>
      <button onClick={controlCount.resetCounter}>重置</button>
    </div>
  );
}

import React, { useRef, useState , useEffect} from "react";
import { unstable_batchedUpdates } from "react-dom";

const BatchUpdateExplain = () => {
  const rednerCount = useRef(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    rednerCount.current = rednerCount.current + 1;
  })


  // 事件处理函数
  const fn1 = () => {
    setA(Math.random());
    setB(Math.random());
  };
  const fn2 = () => {
    // 模拟一个异步操作，真实业务里面可能是网络请求等
    setTimeout(() => {
      setA(Math.random());
      setA(Math.random());
    }, 0);
  };
  const fn3 = () => {
    // 模拟一个异步操作，真实业务里面可能是网络请求等
    setTimeout(
      unstable_batchedUpdates(() => {
        setA(Math.random());
        setA(Math.random());
      }),
      0
    );
  };

  return (
    <div>
      <h1>截止到目前 render 执行次数{rednerCount.current}</h1>
      <button onClick={fn1}>同步的 setState 两次</button>
      <br />
      <button onClick={fn2}>在一个事件循环里 setState 两次</button>
      <br />
      <button onClick={fn3}>
        在一个异步的事件循环里 setState 两次, 但是使用
        ReactDOM.unstable_batchedUpdates 强制 batch
      </button>
    </div>
  );
};

export default BatchUpdateExplain;

import { useState } from "react";

const calculateSomethingExpensive = () => {
  console.log("into li");
  return 5;
};

export default function LazyInit() {
  const [count, setCount] = useState(() => calculateSomethingExpensive());

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> + 1</button>
    </div>
  );
}

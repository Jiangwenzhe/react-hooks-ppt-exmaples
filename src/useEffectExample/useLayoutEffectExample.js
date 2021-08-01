import React, { useState, useLayoutEffect, useEffect } from "react";

const BlinkyRender = () => {
  const [state, setState] = useState(
    "初始化样子 asioxjaslkjxlkasjxlkjaslkxjalksxjlkasjxlkasjxlkasjxlkajlkxajhfuiosdhuincsdjckjsdclkjslkcjslkcjlksjclksjclks"
  );

  useEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    }
    setState("world hello");
  }, []);

  return (
    <>
      <p
        style={{
          color:
            state ===
            "初始化样子 asioxjaslkjxlkasjxlkjaslkxjalksxjlkasjxlkasjxlkasjxlkajlkxajhfuiosdhuincsdjckjsdclkjslkcjslkcjlksjclksjclks"
              ? "red"
              : "blue",
        }}
      >
        {state}
      </p>
      <p
        style={{
          color:
            state ===
            "初始化样子 asioxjaslkjxlkasjxlkjaslkxjalksxjlkasjxlkasjxlkasjxlkajlkxajhfuiosdhuincsdjckjsdclkjslkcjslkcjlksjclksjclks"
              ? "red"
              : "blue",
        }}
      >
        {state}
      </p>{" "}
      <p
        style={{
          color:
            state ===
            "初始化样子 asioxjaslkjxlkasjxlkjaslkxjalksxjlkasjxlkasjxlkasjxlkajlkxajhfuiosdhuincsdjckjsdclkjslkcjslkcjlksjclksjclks"
              ? "red"
              : "blue",
        }}
      >
        {state}
      </p>
      <p
        style={{
          color:
            state ===
            "初始化样子 asioxjaslkjxlkasjxlkjaslkxjalksxjlkasjxlkasjxlkasjxlkajlkxajhfuiosdhuincsdjckjsdclkjslkcjslkcjlksjclksjclks"
              ? "red"
              : "blue",
        }}
      >
        {state}
      </p>
      <p
        style={{
          color:
            state ===
            "初始化样子 asioxjaslkjxlkasjxlkjaslkxjalksxjlkasjxlkasjxlkasjxlkajlkxajhfuiosdhuincsdjckjsdclkjslkcjslkcjlksjclksjclks"
              ? "red"
              : "blue",
        }}
      >
        {state}
      </p>
      <p
        style={{
          color:
            state ===
            "初始化样子 asioxjaslkjxlkasjxlkjaslkxjalksxjlkasjxlkasjxlkasjxlkajlkxajhfuiosdhuincsdjckjsdclkjslkcjslkcjlksjclksjclks"
              ? "red"
              : "blue",
        }}
      >
        {state}
      </p>
    </>
  );
};

export default BlinkyRender;

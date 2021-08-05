import React, { useState, useLayoutEffect, useEffect } from "react";
import "./modal.css";

function Modals() {
  useEffect(() => {
    const greenModal = document.querySelector(".Modal--lime");
    greenModal.style.transform = "translateX(-50%)";
    greenModal.style.left = "50%";
    greenModal.style.top = "0";
  });

  useLayoutEffect(() => {
    const purpleModal = document.querySelector(".Modal--purple");
    purpleModal.style.transform = "translateX(-50%)";
    purpleModal.style.left = "50%";
    purpleModal.style.bottom = "0";
  });
  return (
    <div className="Modals">
      <div className="Modal Modal--lime">使用 useEffect 做 dom 移动</div>
      <div className="Modal Modal--purple">使用 useLayoutEffect 做 dom 移动</div>
      {[...Array(6000).keys()].map((idx) => {
        return <p key={idx}></p>;
      })}
    </div>
  );
}

export default Modals;

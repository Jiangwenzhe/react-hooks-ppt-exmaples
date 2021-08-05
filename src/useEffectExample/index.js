import React from "react";
import { Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "../Components/RouteWithSubRoutes";
import WhenEffectExec from "./whenEffectExec";
import Depts from "./Depts";
import useLayoutEffectExample from "./useLayoutEffectExample";

export { WhenEffectExec, Depts, useLayoutEffectExample };

export default function UseEffectExamples({ routes }) {
  return (
    <div>
      <h2>useEffect</h2>
      <ul>
        <li>
          <Link to="/useEffect/WhenEffectExec">Effect的执行时机</Link>
        </li>
        <li>
          <Link to="/useEffect/Depts">depts 示例</Link>
        </li>
        <li>
          <Link to="/useEffect/useLayoutEffectExample">
            useLayoutEffect 示例
          </Link>
        </li>
      </ul>
      <div
        style={{
          padding: "20px",
          border: "2px dashed black",
          margin: "10px 10px",
        }}
      >
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
}

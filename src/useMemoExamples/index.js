import React from "react";
import { Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "../Components/RouteWithSubRoutes";
import InfinityRender from "./infinityRender";

export { InfinityRender };

export default function useRefExamples({ routes }) {
  return (
    <div>
      <h2>useMemo</h2>
      <ul>
        <li>
          <Link to="/useMemo/InfinityRender">无限渲染的修复</Link>
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

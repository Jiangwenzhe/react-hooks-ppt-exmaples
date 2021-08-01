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

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

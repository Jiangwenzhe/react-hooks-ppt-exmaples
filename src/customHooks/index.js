import React from "react";
import { Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "../Components/RouteWithSubRoutes";
import customCounter from "./customCounter";
import customModal from './customModal';

export { customCounter, customModal };

export default function customHooksExamples({ routes }) {
  return (
    <div>
      <h2>自定义 Hooks </h2>
      <ul>
        <li>
          <Link to="/customHook/customCounter">自定义 Counter</Link>
        </li>
        <li>
          <Link to="/customHook/customModal">自定义 Modal</Link>
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

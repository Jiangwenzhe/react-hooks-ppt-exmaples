import React from "react";
import { Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "../Components/RouteWithSubRoutes";
import WrapperModal from "./wrapperModal";

export { WrapperModal };

export default function useRefExamples({ routes }) {
  return (
    <div>
      <h2>useRef</h2>
      <ul>
        <li>
          <Link to="/useRef/WrapperModal">封装 Modal</Link>
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

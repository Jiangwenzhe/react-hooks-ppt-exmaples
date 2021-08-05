import React from "react";
import { Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "../Components/RouteWithSubRoutes";
import ObjectExamples from "./object";
import BatchUpdate from './batchUpdate';
import LazyInit from './lazyInit';
import BatchUpdateExplain from './batchUpdateExplain';

export { ObjectExamples, BatchUpdate, LazyInit, BatchUpdateExplain };

export default function UseStateExamples({ routes }) {
  return (
    <div>
      <h2>useState</h2>
      <ul>
        <li>
          <Link to="/useState/ObjectExamples">属性是引用类型</Link>
        </li>
        <li>
          <Link to="/useState/BatchUpdate">异步更新</Link>
        </li>
        <li>
          <Link to="/useState/BatchUpdateExplain">batchUpdate</Link>
        </li>
        <li>
          <Link to="/useState/LazyInit">参数惰性初始化</Link>
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

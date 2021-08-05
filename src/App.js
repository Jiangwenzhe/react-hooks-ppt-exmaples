import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import UseStateExamples, {
  ObjectExamples,
  BatchUpdate,
  LazyInit,
  BatchUpdateExplain
} from "./useStateExamples";
import UseEffectExamples, {
  WhenEffectExec,
  Depts,
  useLayoutEffectExample,
} from "./useEffectExample";
import useRefExamples, { WrapperModal } from "./useRefExamples";
import useMemoExamples, { InfinityRender } from "./useMemoExamples";
import customHooksExamples, { customCounter, customModal } from "./customHooks";

const routes = [
  {
    path: "/useState",
    component: UseStateExamples,
    routes: [
      {
        path: "/useState/ObjectExamples",
        component: ObjectExamples,
      },
      {
        path: "/useState/BatchUpdate",
        component: BatchUpdate,
      },
      {
        path: "/useState/BatchUpdateExplain",
        component:BatchUpdateExplain,
      },
      {
        path: "/useState/LazyInit",
        component: LazyInit,
      },
    ],
  },
  {
    path: "/useEffect",
    component: UseEffectExamples,
    routes: [
      {
        path: "/useEffect/WhenEffectExec",
        component: WhenEffectExec,
      },
      {
        path: "/useEffect/Depts",
        component: Depts,
      },
      {
        path: "/useEffect/useLayoutEffectExample",
        component: useLayoutEffectExample,
      },
    ],
  },
  {
    path: "/useRef",
    component: useRefExamples,
    routes: [
      {
        path: "/useRef/WrapperModal",
        component: WrapperModal,
      },
    ],
  },
  {
    path: "/useMemo",
    component: useMemoExamples,
    routes: [
      {
        path: "/useMemo/InfinityRender",
        component: InfinityRender,
      },
    ],
  },
  {
    path: "/customHook",
    component: customHooksExamples,
    routes: [
      {
        path: "/customHook/customCounter",
        component: customCounter,
      },
      {
        path: "/customHook/customModal",
        component: customModal,
      },
    ],
  },
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <h1>React HOOKS 分享</h1>
        <ul>
          <li>
            <Link to="/useState">useState 示例</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect 示例</Link>
          </li>
          <li>
            <Link to="/useRef">useRef 示例</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo 示例</Link>
          </li>
          <li>
            <Link to="/customHook">自定义 Hooks 示例</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

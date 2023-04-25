import { lazy } from "react";
import withLazy from "@/helper/WithLazy";

import { RouteObject } from "react-router-dom";
const Dashboard = lazy(() => import("@/pages/Dashboard"));

const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: withLazy(Dashboard),
  },
];

export default rootRouter;

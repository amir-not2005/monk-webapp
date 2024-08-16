import Authorization from "./pages/Authorization";
import Dashboard from "./pages/Dashboard/Dashboard";
import Group from "./pages/Group/Group";
import Home from "./pages/Home/Home";

import {
  REGISTRATION_ROUTE,
  DASHBOARD_ROUTE,
  GROUP_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
} from "./utils/constants.js";

export const authRoutes = [
  {
    path: DASHBOARD_ROUTE,
    Component: <Dashboard />,
  },
  {
    path: GROUP_ROUTE,
    Component: <Group />,
  },
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: <Authorization />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Authorization />,
  },
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
];

import { routes } from "./components/routes/routes";
import { GuestRoute, PrivateRoute, PublicRoute } from "./components/routes/RouteWrappers";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/main/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {routes.map(({ path, component: Component, access }) => {
        const wrapped =
          access === "private" ? (
            <PrivateRoute>
              <Component />
            </PrivateRoute>
          ) : access === "guest" ? (
            <GuestRoute>
              <Component />
            </GuestRoute>
          ) : (
            <PublicRoute>
              <Component />
            </PublicRoute>
          );
        return <Route key={path} path={path} element={wrapped} />;
      })}
    </Route>
  )
);

const App: React.FC = () => (
  <div className="h-[100vh]">
    <RouterProvider router={router} />
  </div>
);

export default App;

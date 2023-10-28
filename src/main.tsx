import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GlobalLayout from "components/GlobalLayout";
import HomePage from "./routes/index";
import FitnessPage from "./routes/fitness";
import FitnessPostPage from "./routes/fitness/tip/index";
import LoginPage from "./routes/login";
import RegisterPage from "./routes/register";
import ErrorPage from "./routes/error";
import Dashboard from "./routes/dashboard";
import Profile from "./routes/profile";
import Bookmarks from "./routes/bookmarks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "fitness",
    element: <FitnessPage />,
  },
  {
    path: "fitness/:id",
    element: <FitnessPostPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <React.StrictMode>
    <GlobalLayout>
      <RouterProvider router={router} />
    </GlobalLayout>
  </React.StrictMode>
);

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
import Streaks from "./routes/streaks";
import FitnessTips from "./routes/fitness/tips";
import FitnessBlog from "./routes/fitness/blog";
import FitnessExercises from "./routes/fitness/exercises";
import AerobicExercises from "./routes/fitness/exercises/exerciseType";
import Yoga from "./routes/yoga";
import YogaPoses from "./routes/yoga/exercises";

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
      {
        path: "streaks",
        element: <Streaks />,
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
    children: [
      {
        path: "exercises",
        element: <FitnessExercises />,
        children: [
          {
            path: ":exerciseType",
            element: <AerobicExercises />,
          },
        ],
      },
      {
        path: "tips",
        element: <FitnessTips />,
      },
      {
        path: "blog",
        element: <FitnessBlog />,
      },
    ],
  },
  {
    path: "yoga",
    element: <Yoga />,
    children: [
      {
        path: "poses",
        element: <YogaPoses />,
      },
      {
        path: "tips",
        element: <FitnessTips />,
      },
      {
        path: "blog",
        element: <FitnessBlog />,
      },
    ],
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

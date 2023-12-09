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
import FitnessCoach from "./routes/coach";
import NutritionBlog from "./routes/nutrition/blog";
import NutritionCalculator from "./routes/nutrition/calculator";
import NutritionPlans from "./routes/nutrition/plans";
import NutritionRecipes from "./routes/nutrition/recipes";
import HireTrainer from "./routes/coach/hire";
import TrainersList from "./routes/coach/all";
import AiAssistant from "./routes/ai-assistant";
import Yogablog from "./routes/yoga/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ai-assistant",
    element: <AiAssistant />,
  },
  {
    path: "/trainer",
    element: <FitnessCoach />,
  },
  {
    path: "/trainers/all",
    element: <TrainersList />,
  },
  {
    path: "/trainer/hire",
    element: <HireTrainer />,
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
        path: "blog",
        element: <Yogablog />,
      },
    ],
  },
  {
    path: "fitness/:id",
    element: <FitnessPostPage />,
  },
  {
    path: "nutrition/blog",
    element: <NutritionBlog />,
  },
  {
    path: "nutrition/calculator",
    element: <NutritionCalculator />,
  },
  {
    path: "nutrition/plans",
    element: <NutritionPlans />,
  },
  {
    path: "nutrition/recipes",
    element: <NutritionRecipes />,
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

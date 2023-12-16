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
import CareBuy from "./routes/care/buy";
import Yogablog from "./routes/yoga/blog";
import AuthProvider from "hooks/auth";
import ProtectedRoute from "components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/ai-assistant",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <AiAssistant />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/care/buy",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <CareBuy />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/trainer",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <FitnessCoach />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/trainers/all",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <TrainersList />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/trainer/hire",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <HireTrainer />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "dashboard",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </AuthProvider>
    ),
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
    element: (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    ),
  },
  {
    path: "register",
    element: (
      <AuthProvider>
        <RegisterPage />
      </AuthProvider>
    ),
  },
  {
    path: "fitness",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <FitnessPage />
        </ProtectedRoute>
      </AuthProvider>
    ),
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
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <Yoga />
        </ProtectedRoute>
      </AuthProvider>
    ),
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
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <FitnessPostPage />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "nutrition/blog",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <NutritionBlog />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "nutrition/calculator",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <NutritionCalculator />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "nutrition/plans",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <NutritionPlans />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "nutrition/recipes",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <NutritionRecipes />
        </ProtectedRoute>
      </AuthProvider>
    ),
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

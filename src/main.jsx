import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Homepage/Home.jsx";
import AllReview from "./components/Homepage/AllReview.jsx";
import MyReview from "./components/Homepage/MyReview.jsx";
import MyWatchList from "./components/Homepage/MyWatchList.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import LogIn from "./Authentication/LogIn.jsx";
import SignUp from "./Authentication/SignUp.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import AddReview from "./components/Homepage/AddReview.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/allreview",
        element: <AllReview></AllReview>,
      },
      {
        path: "/addreview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/myreview",
        element: <MyReview></MyReview>,
      },
      {
        path: "/mywatchlist",
        element: <MyWatchList></MyWatchList>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </StrictMode>
);

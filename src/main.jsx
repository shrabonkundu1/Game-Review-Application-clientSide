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
import PrivateRoute from "./roiutes/PrivateRoute.jsx";
import Details from "./components/Homepage/Details.jsx";
import UpdateReview from "./components/Homepage/UpdateReview.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://game-review-theta.vercel.app/reviews')
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
        loader: () => fetch('https://game-review-theta.vercel.app/reviews')
      },
      {
        path: "/addreview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
      },
      {
        path: "/myReviews",
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
        // loader: ()=> fetch("http://localhost:5000/myReviews")
      },
      {
        path: "/gamewatchlist",
        element: <PrivateRoute><MyWatchList></MyWatchList></PrivateRoute>,
      },
      {
        path: "/updateReviews/:id",
        element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://game-review-theta.vercel.app/reviews/${params.id}`)
      }
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

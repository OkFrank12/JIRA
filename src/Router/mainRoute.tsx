import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import View from "../Pages/View";
import Error from "../Error/Error";
import SignUp from "../Pages/Register/SignUp";
import SignIn from "../Pages/Register/SignIn";
import ForgotPassword from "../Pages/Register/ForgotPassword";
import ChangePassword from "../Pages/Register/ChangePassword";
import HomeScreen from "../Pages/Home/HomeScreen";
import Piggy from "../Pages/Piggy";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <View />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "home",
        element: <HomeScreen />,
      },
      {
        path: "piggy",
        element: <Piggy />,
      },
    ],
  },
]);

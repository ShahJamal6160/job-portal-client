import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      },
    ]
  },
]);

export default router;
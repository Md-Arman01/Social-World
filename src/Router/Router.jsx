
import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import Features from "../Components/Pages/Features/Features";
import Profile from "../Components/Pages/Profile/Profile";
import Classes from "../Components/Pages/Classes/Classes";
import Login from "../Components/Login/Login";
import Resister from "../Components/Resister/Resister";
  
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/features',
            element: <Features></Features>
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/resister',
            element: <Resister></Resister>
        },
      ]
    },
  ]);

export default Router;

import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import Profile from "../Components/Pages/Profile/Profile";
import Classes from "../Components/Pages/Classes/Classes";
import Login from "../Components/Login/Login";
import Resister from "../Components/Resister/Resister";
import CardDetails from "../Components/CardDetails/CardDetails";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
  
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/features',
            element: <AboutUs></AboutUs>
        },
        {
            path: '/profile',
            element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
            path: '/classes',
            element: <PrivateRoutes><Classes></Classes></PrivateRoutes> 
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/resister',
            element: <Resister></Resister>
        },
        {
            path: '/details/:id',
            loader: ()=> fetch('/public/services.json'),
            element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>
        },
      ]
    },
  ]);

export default Router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Orders from "../components/Orders/Orders";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Profile from "../components/Profile/Profile";
import Dashboard from "../components/Dashboard/Dashboard";


const Router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:"/profile",
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:"/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    }
])

export default Router;
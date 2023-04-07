import {createBrowserRouter} from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/login";
export const router = createBrowserRouter([
    {
        path: "/",
        element :<Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    }
])
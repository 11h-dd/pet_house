import {createBrowserRouter} from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/login";
import NotFound from "../view/NotFound";
// import RegisterViews from "../view/register";
export const router = createBrowserRouter([
    {
        path: "/",
        element :<Home/>,
    },
    {
        path: "/loginAndRegister",
        element: <Login/>,
    },
    {
        path:"*",
        element: <NotFound/>
    },

])
import { createBrowserRouter } from "react-router-dom";
import Client from "../../layouts/Client/Client";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Login from "../../pages/Login/Login";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Client></Client>,
        children: [
            {
                path: '/',
                element: "This is home component"
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])
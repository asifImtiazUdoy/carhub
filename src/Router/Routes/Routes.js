import { createBrowserRouter } from "react-router-dom";
import Client from "../../layouts/Client/Client";
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
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])
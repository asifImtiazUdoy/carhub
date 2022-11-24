import { createBrowserRouter } from "react-router-dom";
import Client from "../../layouts/Client/Client";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Client></Client>,
        children: [
            {
                path: '/',
                element: "This is home component"
            }
        ]
    }
])
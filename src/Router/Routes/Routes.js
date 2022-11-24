const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: "This is main component",
        children: [
            {
                path: '/',
                element: "This is home component"
            }
        ]
    }
])
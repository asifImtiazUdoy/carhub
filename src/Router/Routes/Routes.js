import { createBrowserRouter } from "react-router-dom";
import Client from "../../layouts/Client/Client";
import Profile from "../../layouts/Profile/Profile";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Admin/Categories/Categories";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AllUsers from "../../pages/Admin/AllUsers/AllUsers";
import Products from "../../pages/Admin/Products/Products";
import { baseUrl } from "../../Helper/Helper";
import CategoryProducts from "../../pages/CategoryProducts/CategoryProducts";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Client></Client>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:name',
                element: <CategoryProducts></CategoryProducts>,
                loader: async ({params}) => {
                    return fetch(`${baseUrl}/category/products/${params.name}`)
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/user',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
        children: [
            {
                path: '/user',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/user/categories',
                element: <Categories></Categories>
            },
            {
                path: '/user/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/user/products',
                element: <Products></Products>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])
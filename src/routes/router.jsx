import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Trainer from "../Pages/Trainer/Trainer";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Community from "../Pages/Community/Community";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>
            },
            {
                path: 'trainer',
                element: <Trainer></Trainer>
            },
            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: 'community',
                element:<Community></Community>
            },
        ]
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Trainer from "../Pages/Trainer/Trainer";
import Classes from "../Pages/Classes/Classes";
import SignUp from "../Pages/Register/SignUp";
import Login from "../Pages/Register/Login";
import BeTrainer from "../Pages/Trainer/BeTrainer/BeTrainer";
import Dashboard from "../Layouts/Dashboard";
import Forums from "../Pages/Forums/Forums";
import AllSubscribers from "../Pages/Dashboard/Admin/AllSubscribers";
import AllTrainers from "../Pages/Dashboard/Admin/AllTrainers";
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
import Balance from "../Pages/Dashboard/Admin/Balance";
import AddNewForum from "../Pages/Dashboard/Shared/AddNewForum";
import ManageSlots from "../Pages/Dashboard/Trainer/ManageSlots";
import ManageMember from "../Pages/Dashboard/Trainer/ManageMember";
import AddNewClass from "../Pages/Dashboard/Trainer/AddNewClass";
import ActivityLogs from "../Pages/Dashboard/Users/ActivityLogs";
import ProfileSettings from "../Pages/Dashboard/Users/ProfileSettings";
import RecommendedClass from "../Pages/Dashboard/Users/RecommendedClass";
import AvailableTrainer from "../Pages/Trainer/availableTrainer/AvailableTrainer";
import BookedPrice from "../Pages/Trainer/availableTrainer/BookedPrice";
import ErrorElement from "../Pages/ErrorElement/ErrorELement";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";
import Payments from "../Pages/Dashboard/Payments/Payments";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
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
                path: 'trainer/beTrainer',
                element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
            },
            {
                path: 'trainer/availableTrainer/:id',
                element: <PrivateRoute><AvailableTrainer></AvailableTrainer></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fitness-tracker-server-mu.vercel.app/trainer/${params.id}`)
            },
            {
                path: '/bookedPrice',
                element: <PrivateRoute><BookedPrice></BookedPrice></PrivateRoute>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'forums',
                element: <Forums></Forums>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            // admin route
            {
                path: 'subscribers',
                element: <AdminRoute><AllSubscribers></AllSubscribers></AdminRoute>
            },
            {
                path: 'trainers',
                element: <AdminRoute><AllTrainers></AllTrainers></AdminRoute>
            },
            {
                path: 'appliedTrainer',
                element: <AdminRoute><AppliedTrainer></AppliedTrainer></AdminRoute>
            },
            {
                path: 'balance',
                element: <AdminRoute><Balance></Balance></AdminRoute>
            },
            {
                path: 'payment/:trainerId',
                element: <Payments></Payments>
            },

            // admin and trainer common route
            {
                path: 'addNewForum',
                element: <AddNewForum></AddNewForum>
            },

            // trainer route
            {
                path: 'manageSlots',
                element: <TrainerRoute><ManageSlots></ManageSlots></TrainerRoute>
            },
            {
                path: 'manageMembers',
                element: <TrainerRoute><ManageMember></ManageMember></TrainerRoute>
            },
            {
                path: 'addNewClass',
                element: <TrainerRoute><AddNewClass></AddNewClass></TrainerRoute>
            },

            // members
            {
                path: 'activityLogs',
                element: <ActivityLogs></ActivityLogs>
            },
            {
                path: 'profileSettings',
                element: <ProfileSettings></ProfileSettings>
            },
            {
                path: 'recommendedClass',
                element: <RecommendedClass></RecommendedClass>
            }
        ]
    }
]);

export default router;
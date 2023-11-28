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
                path: 'trainer/beTrainer',
                element: <BeTrainer></BeTrainer>
            },
            {
                path: 'trainer/availableTrainer/:id',
                element: <AvailableTrainer></AvailableTrainer>,
                loader: ({params})=> fetch(`http://localhost:5000/trainer/${params.id}`)
            },
            {
                path: 'trainer/availableTrainer/:id/bookedPrice',
                element: <BookedPrice></BookedPrice>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'forums',
                element:<Forums></Forums>
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            // admin route
            {
                path:'subscribers',
                element:<AllSubscribers></AllSubscribers>
            },
            {
                path:'trainers',
                element:<AllTrainers></AllTrainers>
            },
            {
                path:'appliedTrainer',
                element:<AppliedTrainer></AppliedTrainer>
            },
            {
                path:'balance',
                element:<Balance></Balance>
            },

            // admin and trainer common route
            {
                path:'addNewForum',
                element:<AddNewForum></AddNewForum>
            },

            // trainer route
            {
                path:'manageSlots',
                element:<ManageSlots></ManageSlots>
            },
            {
                path:'manageMembers',
                element:<ManageMember></ManageMember>
            },
            {
                path:'addNewClass',
                element:<AddNewClass></AddNewClass>
            },

            // members
            {
                path:'activityLogs',
                element:<ActivityLogs></ActivityLogs>
            },
            {
                path:'profileSettings',
                element:<ProfileSettings></ProfileSettings>
            },
            {
                path:'recommendedClass',
                element:<RecommendedClass></RecommendedClass>
            }
        ]
    }
]);

export default router;
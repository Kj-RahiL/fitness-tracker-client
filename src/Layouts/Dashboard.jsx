import { FaAd, FaEnvelope, FaForumbee, FaHome, FaMagento, FaUserGraduate, FaUserSecret } from "react-icons/fa";
import { GiBodyBalance } from "react-icons/gi";
import { MdAddChart, MdClass, MdGroup, MdManageAccounts, MdSettings, MdUnsubscribe } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    // const [isAdmin] = UseAdmin()
    const [isAdmin] = UseAdmin();
    const [isTrainer] = useTrainer()
    return (
        <div className="flex">
            <Helmet>
                <title>FIT TO HIT | Dashboard</title>
            </Helmet>
            <div className="bg-gradient-to-r from-black from-10% via-amber-500 via-30% to-emerald-500 to-90% ..."></div>
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-gradient-to-r from-black  via-amber-500 via-30% to-black text-gray-100">
                <div className="text-center underline font-semibold text-gray-700">
                    {isTrainer ? "Trainer DashBoard " : isAdmin ? 'Admin Dashboard' : 'Member Dashboard'}
                </div>
                <ul className="menu p-4 text-md font-semibold">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/subscribers'>
                                <MdUnsubscribe></MdUnsubscribe>All Subscribers
                            </NavLink></li>
                            <li><NavLink to='/dashboard/trainers'>
                                <FaUserSecret></FaUserSecret>All Trainers
                            </NavLink></li>
                            <li><NavLink to='/dashboard/appliedTrainer'>
                                <FaUserGraduate></FaUserGraduate>Applied Trainers
                            </NavLink></li>
                            <li><NavLink to='/dashboard/balance'>
                                <GiBodyBalance></GiBodyBalance> Balance
                            </NavLink></li>
                            <li><NavLink to='/dashboard/addNewForum'>
                                <FaForumbee></FaForumbee>Add New Forum
                            </NavLink></li>
                        </> : isTrainer ?
                            <>
                                <li><NavLink to='/dashboard/manageSlots'>
                                    <MdManageAccounts></MdManageAccounts> Manage Slots
                                </NavLink></li>
                                <li><NavLink to='/dashboard/manageMembers'>
                                    <MdGroup></MdGroup>Manage Members
                                </NavLink></li>
                                <li><NavLink to='/dashboard/addNewForum'>
                                    <FaForumbee></FaForumbee> Add New Forum
                                </NavLink></li>
                                <li><NavLink to='/dashboard/addNewClass'>
                                    <MdAddChart></MdAddChart>Add New Class
                                </NavLink></li>
                            </> :
                            <>
                                <li><NavLink to='/dashboard/activityLogs'>
                                    <RxActivityLog></RxActivityLog> Activity log
                                </NavLink></li>
                                <li><NavLink to='/dashboard/profileSettings'>
                                    <MdSettings></MdSettings> Profile Settings
                                </NavLink></li>
                                <li><NavLink to='/dashboard/recommendedClass'>
                                    <MdClass></MdClass>Recommend Class
                                </NavLink></li>

                            </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to='/'>
                        <FaHome></FaHome>Home
                    </NavLink></li>
                    <li><NavLink to='/trainer'>
                        <FaMagento></FaMagento>Gallery
                    </NavLink></li>
                    <li><NavLink to='/classes'>
                        <FaAd></FaAd>Classes
                    </NavLink></li>
                    <li><NavLink to='/forums'>
                        <FaEnvelope></FaEnvelope>Forums
                    </NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
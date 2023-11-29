import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useTrainer from "../Hooks/useTrainer";


const TrainerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isTrainer, isTrainerLoading] = useTrainer()
    const location = useLocation();

    if (loading || isTrainerLoading) {
        return <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    }

    if (user && isTrainer) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default TrainerRoute;
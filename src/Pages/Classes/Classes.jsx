import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover";
import AllClasses from "./AllClasses";
import WeeklyShedule from "./WeeklyShedule";


const Classes = () => {
    return (
        <div>
            <Helmet>
                <title>FIT TO HIT | Classes</title>
            </Helmet>
            <Cover text='Our Weekly' title='Schedule'></Cover>
            <WeeklyShedule></WeeklyShedule>
            <AllClasses></AllClasses>
        </div>
    );
};

export default Classes;
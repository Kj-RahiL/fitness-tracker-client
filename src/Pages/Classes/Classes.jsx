import Cover from "../../Components/Shared/Cover";
import AllClasses from "./AllClasses";
import WeeklyShedule from "./WeeklyShedule";


const Classes = () => {
    return (
        <div>
            <Cover text='Our Weekly' title='Schedule'></Cover>
            <WeeklyShedule></WeeklyShedule>
            <AllClasses></AllClasses>
        </div>
    );
};

export default Classes;
import { Elements } from "@stripe/react-stripe-js";
import Title from "../../../Components/Shared/Title";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway)
const Payments = () => {
    const { trainerId } = useParams();
    // console.log(trainerId)
    return (
        <div>
            <Title title='Pay Trainer Monthly Salary'></Title>
            <div className="my-20">
                <Elements stripe={stripePromise} >
                    <CheckOutForm trainerId={trainerId}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payments;
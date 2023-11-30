import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const CheckOutForm = ({trainerId}) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const navigate = useNavigate()


    const {data: trainers = [], refetch}= useQuery({
        queryKey: ['trainers'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/trainer')
            // console.log(res.data)
            return res.data
        }
    })
    const findTrainer = trainers.find((trainer) => trainer._id === trainerId);

  // Retrieve the salary information
  const totalPrice = findTrainer ? findTrainer.salary : 0;
console.log(findTrainer)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('payment error', error);
            setError(error)
        }
        else {
            console.log('Payment Method', paymentMethod);
            setError('')
        }

        // confirm payment method
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                // payment save the database
                const payment = {
                    adminEmail: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    trainerId: findTrainer._id,
                    trainerName: findTrainer.name,
                    trainerEmail: findTrainer.email,
                    status: 'pending'
                }
                console.log(payment)
                const res = await axiosSecure.post('/payments', payment)
                console.log('payments saved', res.data)
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/payment/:trainerId')
                }
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn my-4 btn-accent" type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}

        </form>
    );
};

export default CheckOutForm;
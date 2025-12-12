import React  from "react";
import { useLocation } from 'react-router-dom';

const PaymentReviewPage = ()=>{

    const {state} = useLocation();
    const payment_id =  state?.data?.id
    const status = state?.data?.status
    
    return (
        <div>
            <h5>Payment# {payment_id}</h5>
            <p>Status: {status}</p>
        </div>
    )
}

export default PaymentReviewPage

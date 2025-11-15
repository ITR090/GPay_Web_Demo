import React from 'react';
import axios from 'axios';
import GooglePayButton from '@google-pay/button-react';

export default function GpayButton({ totalAmount, currencyCode, countryCode }) {

    return (
        <GooglePayButton
            environment="TEST"
            paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                    {
                        type: 'CARD', // Card we can use it for Google Pay | Apple Pay
                        parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'], //PAN means Primary Account Number | 3DS means 3-D Secure
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],  //Supported card networks mada for saudi local cards
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'stripe',   // Specify your payment gateway
                                //gatewayMerchantId: 'exampleGatewayMerchantId',
                                "stripe:version": "2019-09-09",  // Stripe API version 
                                "stripe:publishableKey": import.meta.env.VITE_STRIPE_PUBLISHABLEKEY, // Your Stripe publishable key
                            },
                        },
                    },
                ],
                merchantInfo: {
                    merchantId: '12345678901234567890', // A unique identifier for the merchant, Prod only
                    merchantName: 'Merchant', // The name of the merchant need to be displayed to the user, Prod only
                },
                transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',  // Label to be displayed on Google Pay screen
                    totalPrice: totalAmount.toFixed(2), 
                    currencyCode: currencyCode,
                    countryCode: countryCode,
                },
            }}

            onLoadPaymentData={async paymentRequest => {

                try {
                    // Get the token ID from the payment data
                    const tokenId = JSON.parse(paymentRequest.paymentMethodData.tokenizationData.token).id;
                    // Send the token ID to your server to process the payment
                    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payment/google-pay`, {
                        tokenId: tokenId,
                        totalAmount: totalAmount,
                        currencyCode: currencyCode,
                    });

                    console.log("Payment processed successfully:", response);
                } catch (error) {
                    console.error("Error processing payment:", error);
                }
            }}


        />
    )
}


// There are other Methods like onPaymentAuthorized, onPaymentDataChanged which can be used for more complex scenarios.
// Refer https://developers.google.com/pay/api/web/reference/request-objects for more details.
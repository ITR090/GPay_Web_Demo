// libs stripe
const dotenv = require('dotenv')
dotenv.config();
const stripe = require('stripe')(process.env.SECRETKEY);
const express = require('express');
const cors = require('cors')


// Create Express app
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
// Enable CORS for all routes in case frontend and backend are on different domains (Testing purpose)
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.post("/api/payment/google-pay", async (req, res) => {

    try {
        const { tokenId ,totalAmount , currencyCode } = req.body;
        
        // 1. Create a PaymentMethod from the Google Pay token
        const paymentMethod = await stripe.paymentMethods.create({
            type: "card", // 'card' is the type for card payments we can use it for Google Pay | Apple Pay | Manual Card details
            card: { token: tokenId }, 
        });
        // console.log("Payment Method:", paymentMethod);
        // console.log(totalAmount * 100)
        // 2. Create a PaymentIntent with the PaymentMethod
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount * 100, // need to amount in cents  amount * 100
            currency: currencyCode,
            payment_method: paymentMethod.id,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never"
            }
        });

        //console.log("Payment Intent:", paymentIntent);

        // 3. Confirm the PaymentIntent
        const confirmedPI = await stripe.paymentIntents.confirm(paymentIntent.id, {
            payment_method: paymentMethod.id,
        });

        //console.log("Confirmed Payment Intent:", confirmedPI);
        res.status(200).json({ success: true, paymentIntent: confirmedPI });


    } catch (error) {
        console.error("Error processing payment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
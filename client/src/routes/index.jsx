import {createBrowserRouter} from 'react-router-dom'
// pages
import CartPage from '../pages/CartPage'
import PaymentReviewPage from '../pages/PaymentReviewPage'

export const routers_definitions =createBrowserRouter([
    {
        path:'/',
        element: <CartPage />,
        errorElement:<div>error</div>
    },
    {
        path:'/PaymentReviewPage',
        element:<PaymentReviewPage/>
    }
])
import { useState, useEffect } from 'react'
import './App.css'
import GpayButton from './GpayButton';

function App() {
  
  // Sample cart items
  let cartItems = [
    { id: 1, name: 'PlayStation 5', price: 1.00 , currency: '$' , image: 'https://f.nooncdn.com/p/pnsku/N70022608V/45/_/1761378431/5c813403-47b1-4de0-8bab-c61dbf3610a0.jpg?width=800' },
    { id: 2, name: 'Apple IPhone 17 Pro', price: 1.00 , currency: '$' , image: 'https://f.nooncdn.com/p/pnsku/N70211533V/45/_/1758629473/6b1385b0-8244-4d2c-a7c4-99702f6471cf.jpg?width=800' },
    { id: 3, name: 'MacBook Pro', price: 1.00 , currency: '$' , image: 'https://f.nooncdn.com/p/pnsku/N70248899V/45/_/1761475925/a16ac555-69c6-4d23-8be3-d3903069db6d.jpg?width=800'},
  ];

  const totalAmount = parseInt(cartItems.reduce((total, item) => total + item.price, 0));

  return (
    <>
     <h2>Your Cart</h2>
     {cartItems.map(item => (
      <div key={item.id} style={{border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center'}}>
        <img src={item.image} alt={item.name} style={{width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px'}} />
        <div>
          <h3>{item.name}</h3>
          <p>Price: {item.currency}{item.price.toFixed(2)}</p>
        </div>
      </div>
     ))}
       <h4>Total: ${totalAmount}</h4>
      
       {/* currencyCode and countryCode are hardcoded for testing only */}
      <GpayButton  totalAmount={totalAmount} currencyCode='USD' countryCode='US' />

    </>
  )
}

export default App

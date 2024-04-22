'use client'

import { IconCircleCheck, IconCircleX } from '@tabler/icons-react'
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import {useLocation} from 'next/navigation'


const ThankYou = () => {

    const hasRun = useRef();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const { tutorid } = useParams();
//   const location = useLocation();
  let params = new URLSearchParams(location.search);

  const savePayment = async () => {
    const paymentDetails = await retrievePaymentIntent();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: currentUser._id,
        tutor: tutorid,
        details: paymentDetails,
        intentId: params.get('payment_intent'),
        // hours: selHrs
      })
    });
    console.log(response.status);

    const retrievePaymentIntent = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/retrieve-payment-intent`, {
          method: 'POST',
          body: JSON.stringify({ paymentIntentId: params.get('payment_intent') }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.status);
        const data = await response.json();
        // console.log(data);
        return data;
      }

    useEffect(() => {
        if (!hasRun.current) {
          hasRun.current = true;
          if (params.get('redirect_status') === 'succeeded') {
            savePayment();
          }
        }
      }, []);

  return (
    <>
        <div className='container size-md'>
            <div className="flex justify-center align-center" style={{ height: '50vh' }}>
            {
            params.get('redirect_status') === 'succeeded' ?
              <>
                <div><IconCircleCheck style={{size:'100'}} /></div>
                <div style={{ textAlign: 'center', padding: '50px' }}>
                  <h1 style={{ color: '#4CAF50' }}>Thank You For Your Purchase!</h1>
                  <p style={{ fontSize: '18px' }}>Your order has been placed successfully.</p>
                  <p style={{ fontSize: '18px' }}>We've sent a confirmation email to your email address.</p>
                </div>
                <button className='color-blue mt-20' >Go to Home</button>
              </>
              :
              <>
                <div><IconCircleX style={{size:'100'}} /></div>
                <h1 style={{size:'xl'}}>Payment Failed</h1>
                <p style={{size:'lg'}}>Your payment was not successful. Please try again.</p>
                <p style={{size:'lg'}}>If the problem persists, please contact us.</p>
                <button className='color-blue mt-20'>Go to Home</button>
              </>
          }


            </div>
        </div>

    </>
  )
}
}
export default ThankYou;
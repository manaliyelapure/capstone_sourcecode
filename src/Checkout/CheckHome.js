import React from 'react';
import CheckOut from './CheckOut';
import GuestCheck from './GuestCheck';

import PaymentCheck from './PaymentCheck';
import ReviewOrder from './ReviewOrder';


function CheckHome() {
  return (
    <>
    <CheckOut/>
    <GuestCheck/>
    <PaymentCheck/>
    <ReviewOrder/>
   
    </>
  )
}

export default CheckHome
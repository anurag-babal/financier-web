import React from 'react'
import '../css/Transactions.css'

function Transactions() {
  return (
    <>
    <div className='trans-main'>
        <div className='trans-header'>
            <div>Date</div>
            <div>Transaction</div>
            <div>Amount</div>
            <div>Category</div>
        </div>
        <div className='trans-body'>
            <div className='trans-row'>
                <div>12/04/2024</div>
                <div>Amazon</div>
                <div>₹2000</div>
                <div>Fashion</div>
            </div>
            <div className='trans-row'>
                <div>12/04/2024</div>
                <div>Dinner</div>
                <div>₹1500</div>
                <div>Food</div>
            </div>  
        </div>
    </div>
    
    </>
  )
}

export default Transactions
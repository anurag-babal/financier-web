import React, {useEffect, useState} from 'react'
import '../css/Transactions.css'
import {getTransactions} from '../services/TransactionService';

export default function Expenses() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        getTransactions()
            .then(r => setTransactions(r))
            .catch(e => setError(e))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <div className='trans-main'>
                <div className='trans-header'>
                    <div>Date</div>
                    <div>Transaction</div>
                    <div>Amount</div>
                    <div>Category</div>
                </div>
                {loading ? (<span className="spinner-border spinner-border-sm"></span>) :
                    <div className='trans-body'>
                        {transactions.map((transaction, key) => (
                            <div className='trans-row' key={transaction.id}>
                                <div>{transaction.date}</div>
                                <div>{transaction.category}</div>
                                <div>₹{transaction.amount}</div>
                                <div>{transaction.description}</div>
                            </div>
                        ))}
                    </div>
                }
            </div>

        </>
    )
}
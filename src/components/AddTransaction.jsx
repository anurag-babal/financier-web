import {useState} from "react";
import {addTransaction} from "../services/TransactionService";
import {Alert} from "./Alert";

export default function AddTransaction() {
    const [transaction, setTransaction] = useState({
        category: '',
        amount: 0,
        description: '',
        date: ''
    });
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    function handleChange(inputIdentifier, newValue) {
        setTransaction(prev => {
            return {
                ...prev,
                [inputIdentifier]: newValue
            };
        });
    }

    function handleClickTransaction() {
        setLoading(true);
        setError(null);

        addTransaction(transaction)
            .then(r => setData(r))
            .catch(e => setError(e))
            .finally(() => setLoading(false));
        setTransaction({
            category: '',
            amount: 0,
            description: '',
            date: ''
        });
    }

    return (
        <div>
            <label>Enter transaction category:</label>
            <input
                type='text'
                value={transaction.category}
                onChange={(event) => handleChange('category', event.target.value)}
            />
            <br/>
            <label>Enter transaction amount:</label>
            <input
                type='number'
                value={transaction.amount}
                onChange={(event) => handleChange('amount', event.target.value)}
            />
            <br/>
            <label>Enter description:</label>
            <input
                type='text'
                value={transaction.description}
                onChange={(event) => handleChange('description', event.target.value)}
            />
            <br/>
            <label>Enter transaction date:</label>
            <input
                type='date'
                value={transaction.date}
                onChange={(event) => handleChange('date', event.target.value)}
            />
            <br/>
            <button onClick={handleClickTransaction} disabled={loading}>
                {
                    loading
                        ? (<span className="spinner-border spinner-border-sm"></span>)
                        : 'Add Transaction'
                }
            </button>
            {/*{data && <Alert message={data} type='success'/>}*/}
            {error && <Alert message={error.message} type='danger'/>}
        </div>
    );
}
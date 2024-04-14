import {useState} from "react";
import {addTransaction} from "../services/TransactionService";
import {Transaction} from "../model/Transaction";
import {Alert} from "./Alert";

function initTransaction() {
    // trans.date = new Date().toISOString().split('T')[0];
    return new Transaction();
}

function ExpenseForm({onClose}) {
    const [transaction, setTransaction] = useState(initTransaction());
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState({});

    function handleChange(inputIdentifier, newValue) {
        setTransaction(prev => {
            return {
                ...prev,
                [inputIdentifier]: newValue
            };
        });
    }

    function validateForm() {
        const newErrors = {};
        if (!transaction.category) {
            newErrors.category = 'Category is required.';
        }
        if (transaction.amount <= 0) {
            newErrors.amount = 'Amount must be greater than 0.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (validateForm()) {
            setLoading(true);
            setErrors({});

            addTransaction(transaction)
                .then(r => setData(r))
                .catch(e => setErrors(e))
                .finally(() => {
                    setLoading(false);
                    onClose();
                });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Enter transaction category:</label>
                <input
                    type='text'
                    value={transaction.category}
                    required={true}
                    onChange={(event) => handleChange('category', event.target.value)}
                />
                {errors.category && <Alert message={errors.category} type='danger'/>}
            </div>
            <div className="form-group">
                <label>Enter transaction amount:</label>
                <input
                    type='number'
                    value={transaction.amount}
                    required={true}
                    onChange={(event) => handleChange('amount', event.target.value)}
                />
                {errors.amount && <Alert message={errors.amount} type='danger'/>}
            </div>
            <div className="form-group">
                <label>Enter description:</label>
                <input
                    type='text'
                    value={transaction.description}
                    onChange={(event) => handleChange('description', event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Enter transaction date:</label>
                <input
                    type='date'
                    value={transaction.date}
                    required={true}
                    onChange={(event) => handleChange('date', event.target.value)}
                />
            </div>
            <button type={"submit"} className="btn btn-primary" disabled={loading}>
                {
                    loading
                        ? (<span className="spinner-border spinner-border-sm"></span>)
                        : 'Add Expense'
                }
            </button>
            {data && <Alert message={data} type='success'/>}
        </form>
    );
}

export default ExpenseForm;
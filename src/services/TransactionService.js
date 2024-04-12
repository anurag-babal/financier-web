import axios from 'axios';

const apiUrl = process.env.API_URL;

export function getTransactions() {
    const response = axios.get(`${apiUrl}/transactions`);
    const data = response.data;
    return data;
}

export async function addTransaction(transaction) {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await axios.post(`${apiUrl}/transactions`, transaction);
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
}

export async function deleteTransaction(id) {
    const response = axios.delete(`${apiUrl}/transactions/${id}`);
    const data = response.data;
    return data;
}
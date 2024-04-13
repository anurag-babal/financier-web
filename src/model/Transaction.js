export class Transaction {
    constructor(id, category, amount, description, date) {
        this.id = id;
        this.title = category;
        this.amount = amount;
        this.type = description;
        this.date = date;
    }
}
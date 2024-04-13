import {formatDateToIndian} from "../utils/dateFormatter";

export class Transaction {
    constructor(
        id = undefined,
        category = '',
        amount = 0,
        description = '',
        date = formatDateToIndian(new Date())
    ) {
        this.id = undefined;
        this.category = category;
        this.amount = amount;
        this.description = description;
        this.date = date;
    }
}
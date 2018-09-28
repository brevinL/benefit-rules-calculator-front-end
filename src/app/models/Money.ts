export class Money {
	amount: number = 0;

	constructor(amount?: number) {
		this.amount = Math.max(0, amount);
	}
}
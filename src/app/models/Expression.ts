interface IExpression {
	description: string;
	order: number;
}

export class Expression {
	description: string;
	order: number;

	constructor(obj: IExpression) {
		this.description = obj.description;
		this.order = obj.order;
	}
}
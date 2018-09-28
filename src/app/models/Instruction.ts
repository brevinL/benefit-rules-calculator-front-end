import { Expression } from './Expression';
import * as _ from "lodash";

interface IInstruction {
	description: string;
	expression_set: Expression[];
	order: number;
}

export class Instruction {
	description: string;
	expression_set: Expression[];
	order: number;

	constructor(obj: IInstruction) {
		this.description = obj.description;
		this.order = obj.order;
		this.expression_set = _.sortBy(_.map(_.get(obj, 'expression_set', []), expression => {
			return new Expression(expression)
		}), 'order');
	}
}
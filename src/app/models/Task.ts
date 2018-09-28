import { Instruction } from './Instruction';
import * as _ from "lodash";

interface ITask {
	instruction_set: Instruction[];
}

export class Task {
	instruction_set: Instruction[];

	constructor(obj: ITask) {
		this.instruction_set = _.sortBy(_.map(_.get(obj, 'instruction_set', []), instruction => {
			return new Instruction(instruction)
		}), 'order');
	}
}
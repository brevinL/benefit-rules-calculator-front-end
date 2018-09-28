import { Money } from './Money';
import { Relationship } from './Relationship';
import { Role } from './Role';
import { Record } from './Record';

export interface IRespondent {
	id?: number;
	year_of_birth: number;
	record?: Record;
}

export class Respondent implements IRespondent {
	public id?: number;
	public year_of_birth: number;
	public record?: Record;

	constructor(obj: IRespondent) {
		this.id = obj.id;
		this.year_of_birth = obj.year_of_birth;
		this.record = obj.record;
	}
}
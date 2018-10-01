import { Money } from './Money';
import { Relationship } from './Relationship';
import { Role } from './Role';
import { Record } from './Record';

export interface IRespondent {
	id?: number;
	year_of_birth: number;
	retirement_age?: number;
	record?: Record;
}

export class Respondent implements IRespondent {
	public id?: number;
	public year_of_birth: number;
	public retirement_age?: number;
	public record?: Record;

	constructor(obj: IRespondent) {
		this.id = obj.id;
		this.year_of_birth = obj.year_of_birth;
		this.retirement_age = obj.retirement_age;
		this.record = obj.record;
	}
}
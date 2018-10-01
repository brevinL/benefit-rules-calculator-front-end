import { Role } from './Role';
import { Respondent } from './Respondent';

export enum RelationshipType {
	MARRIED = 'M',
}

export interface IRelationship {
	id?: number;
	person1: Respondent;
	person2: Respondent;
	person1_role?: Role;
	person2_role?: Role;
	relationship_type: RelationshipType;
}

export class Relationship implements IRelationship {
	id?: number;
	person1: Respondent;
	person2: Respondent;
	person1_role?: Role;
	person2_role?: Role;
	relationship_type: RelationshipType;

	constructor(obj: IRelationship) {
		this.id = obj.id;
		this.person1 = obj.person1;
		this.person2 = obj.person2;
		this.person1_role = obj.person1_role;
		this.person2_role = obj.person2_role;
		this.relationship_type = obj.relationship_type;
	}

	getSpouseOf(respondent: Respondent) {
		if(respondent == this.person1) {
			return this.person2;
		} else {
			return this.person1;
		}
	}
}
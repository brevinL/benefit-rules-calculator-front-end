import { Role } from './Role';

export enum RelationshipType {
	MARRIED = 'M',
}

export interface IRelationship {
	id?: number;
	content_object1: string;
	content_object2: string;
	object_id1: number;
	object_id2: number;
	person1_role?: Role;
	person2_role?: Role;
	relationship_type: RelationshipType;
}

export class Relationship implements IRelationship {
	id?: number;
	content_object1: string;
	content_object2: string;
	object_id1: number;
	object_id2: number;
	person1_role?: Role;
	person2_role?: Role;
	relationship_type: RelationshipType;

	constructor(obj: IRelationship) {
		this.id = obj.id;
		this.content_object1 = obj.content_object1;
		this.content_object2 = obj.content_object2;
		this.object_id1 = obj.object_id1;
		this.object_id2 = obj.object_id2;
		this.person1_role = obj.person1_role;
		this.person2_role = obj.person2_role;
		this.relationship_type = obj.relationship_type;
	}

	getSpouseIDOf(respondent_id: number) {
		if(respondent_id == this.object_id1) {
			return this.object_id2;
		} else {
			return this.object_id1;
		}
	}
}
import { Component, OnInit, OnDestroy, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';
import { Record, DetailRecord, Respondent, Money, Role, Relationship, RelationshipType } from '../models';
import { BenefitRuleService } from '../benefit-rule.service';
import { Subscription, zip } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
	selector: 'benefit-rules-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [ BenefitRuleService ]
})
export class FormComponent implements OnInit, OnDestroy {
	questions: any[];
	relationshipForm: FormGroup;
	hasSubmitted: boolean = false;
	busy: Subscription;

	constructor(
		protected fb: FormBuilder, 
		protected questionService: QuestionService, 
		protected qcs: QuestionControlService,
		protected benefitRuleService: BenefitRuleService,
		protected router: Router,
		protected activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.scrollToTop();
		this.questions = this.questionService.questions;
		this.relationshipForm = this.buildRelationshipFormGroup();
	}

	buildRelationshipFormGroup(): FormGroup {
		return this.fb.group({
			person1: this.buildPersonFormGroup(),
			person2: this.buildPersonFormGroup(),
			person1_role: this.fb.control(Role.BENEFICIARY),
			person2_role: this.fb.control(Role.SPOUSE)
		});
	}

	buildPersonFormGroup(): FormGroup { 
		let formGroup = this.qcs.toFormGroup(this.questions);
		return formGroup;
	}

	scrollToTop() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	markAllControlAsTouched(formGroup: FormGroup) {
		for(let key of Object.keys(formGroup.controls)) {
			formGroup.get(key).markAsTouched();
		}
	}

	onSubmit(): void {
		if(this.relationshipForm.valid) {
			const formModel = this.relationshipForm.value;

			let person1: Respondent = this.prepareToSaveRespondent();
			let person2: Respondent = this.prepareToSaveRespondent();
			let person1_role: Role = formModel.person1_role;
			let person2_role: Role = formModel.person2_role;

			let relationship: Relationship = this.prepareToSaveRelationship(
				person1, person2, person1_role, person2_role);
			this.benefitRuleService.addRelationship(relationship)
				.subscribe(relationship => {
					let beneficiary_record: Record = this.prepareToSaveRecord(relationship.person1.id, formModel.person1);
					let beneficiary_record$ = this.benefitRuleService.createRecord(beneficiary_record);

					let spouse_record: Record = this.prepareToSaveRecord(relationship.person2.id, formModel.person2);
					let spouse_record$ = this.benefitRuleService.createRecord(spouse_record);

					zip(beneficiary_record$, spouse_record$)
						.subscribe(() => this.router.navigate(['/record', {relationship: relationship.id}]))
				});
		} else {
			this.markAllControlAsTouched(this.relationshipForm.controls.person1 as FormGroup);
			this.markAllControlAsTouched(this.relationshipForm.controls.person2 as FormGroup);
		}
		this.hasSubmitted = true;
		this.scrollToTop();
	}

	prepareToSaveRespondent(): Respondent {
		const respondents: Respondent = new Respondent({
			year_of_birth: 1954,
			retirement_age: 66
		});
		return respondents;
	}

	prepareToSaveRecord(person: number, formModel: any): Record {
		let record = new Record({
			person: person,
			basic_primary_insurance_amount: new Money(formModel.basic_primary_insurance_amount as number),
			monthly_non_covered_pension: new Money(formModel.monthly_non_covered_pension as number),
			early_retirement_reduction: 0.00,
			delay_retirement_credit: 0.00,
			wep_reduction: new Money(0.00)
		});
		return record;
	}

	prepareToSaveRelationship(person1: Respondent, person2: Respondent, person1_role: Role, person2_role: Role): Relationship {
		const relationship: Relationship = new Relationship({
			person1: person1,
			person2: person2,
			person1_role: person1_role,
			person2_role: person2_role,
			relationship_type: RelationshipType.MARRIED
		});

		return relationship;
	}

	ngOnDestroy() {
		if(this.busy != null) { this.busy.unsubscribe(); }
	}
}

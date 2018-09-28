import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';
import { Record, DetailRecord, Respondent, Money, Role, Relationship, RelationshipType } from '../models';
import { CalculatorService } from '../calculator.service';
import { BenefitRuleService } from '../benefit-rule.service';
import { zip } from 'rxjs';

@Component({
	selector: 'calculator-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [ BenefitRuleService, CalculatorService ]
})
export class FormComponent implements OnInit {
	questions: any[];
	respondents: FormArray;
	currentForm: FormGroup;
	currentPage: number = 0; 

	constructor(
		private fb: FormBuilder, 
		private questionService: QuestionService, 
		private qcs: QuestionControlService,
		private calculatorService: CalculatorService,
		private benefitRuleService: BenefitRuleService,
		private router: Router) { }

	ngOnInit() {
		this.scrollToTop();
		this.questions = this.questionService.questions;
		this.respondents = this.buildRespondentForms();
		this.currentForm = this.respondents.at(0) as FormGroup;
	}

	buildRespondentForms(): FormArray {
		return this.fb.array([
			this.initPerson(Role.BENEFICIARY),
			this.initPerson(Role.SPOUSE)
		]);
	}

	initPerson(role: string): FormGroup { 
		let formGroup = this.qcs.toFormGroup(this.questions);
		formGroup.addControl('role', this.fb.control(role));
		return formGroup;
	}

	scrollToTop() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	changeForm(currentPage: number) {
		this.currentPage = currentPage - 1;
		this.currentForm = this.respondents.at(this.currentPage) as FormGroup;
		this.scrollToTop();
	}

	onSubmit(): void {
		let respondents: Respondent[] = this.prepareToSaveRespondents(this.respondents);
		
		let respondent1$ = this.calculatorService.addRespondent(respondents[0]);
		let respondent2$ = this.calculatorService.addRespondent(respondents[1]);
		zip(respondent1$, respondent2$, (respondent1, respondent2) => [respondent1 as Respondent, respondent2 as Respondent])
			.subscribe(respondents => {
				let relationship: Relationship = this.prepareToSaveRelationship(respondents as Respondent[], this.respondents);
				this.benefitRuleService.addRelationship(relationship)
					.subscribe(relationship => this.router.navigate(['/record', {relationship: relationship.id}]))
			});
	}

	prepareToSaveRespondent(form: FormGroup): Respondent[] {
		const formModel = form.value;
		const respondents: Respondent[] = formModel.map((person) => { 
			return new Respondent({
				year_of_birth: 1954
			});
		});
		return respondents;
	}

	prepareToSaveRecord(form: FormGroup): any {
		const formModel = form.value;
		let record = new Record({
			person_id: 1,
			year_of_birth: 1954,
			basic_primary_insurance_amount: new Money(formModel.years_of_covered_earnings as number),
			monthly_non_covered_pension: new Money(formModel.annual_covered_earning as number),
			early_retirement_reduction: 0.00,
			delay_retirement_credit: 0.00,
			wep_reduction: new Money(0.00)
		});
		return record;
	}

	//take care of content_object dynamically
	prepareToSaveRelationship(person1: Respondent, person2: Respondent, person1Form: any, person2Form: any): Relationship {
		const person1formModel = person1Form.value;
		const person2formModel = person2Form.value;
		const relationship: Relationship = new Relationship({
				content_object1: `/api/neo-and-nde-benefit-calculator/respondent/${person1.id}/`,
				content_object2: `/api/neo-and-nde-benefit-calculator/respondent/${person2.id}/`,
				object_id1: person1.id, 
				object_id2: person2.id, 
				person1_role: person1formModel.role,
				person2_role: person2formModel.role,
				relationship_type: RelationshipType.MARRIED
			});

		return relationship;
	}
}

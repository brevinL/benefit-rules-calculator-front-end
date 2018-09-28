import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
	let component: FormComponent;
	let fixture: ComponentFixture<FormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FormComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should populate questions', () => {
		let expectedQuestions = [];
		expect(component.questions).toBe(expectedQuestions, 'no questions when init');


	});
});

//https://angular.io/guide/http#testing-http-requests
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { NEOAndNDEBenefitCalculatorService } from './neo-and-nde-benefit-calculator.service';
import { Money } from '../shared/models/Money';
import { Respondent } from '../shared/models/Respondent';
import { Record } from '../shared/models/Record';
import { asyncData, asyncError } from '../../testing/async-observable-helpers';

describe('NEOAndNDEBenefitCalculatorService Test Case', () => {
	let nanbcServiceSpy: jasmine.SpyObj<NEOAndNDEBenefitCalculatorService>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('NEOAndNDEBenefitCalculatorService', ['summary']);
		TestBed.configureTestingModule({
			providers: [ { provide: NEOAndNDEBenefitCalculatorService, useValue: spy } ]
		});
		nanbcServiceSpy = TestBed.get(NEOAndNDEBenefitCalculatorService);
	});

	it('should return expected records', () => {
		let mockRespondent = {
			'id': 1,
			'name': 'Beneficiary',
			'year_of_birth': 1954,
			'years_of_covered_earnings': 15,
			'annual_covered_earning': {'amount': 30000},
			'years_of_non_covered_earnings': 25,
			'annual_non_covered_earning': {'amount': 40000},
			'fraction_of_non_covered_aime_to_non_covered_pension': 0.67,
			'early_retirement_reduction': 0.00,
			'delay_retirement_credit': 0.00,
			'survivor_early_retirement_reduction': 0.00,
			'spousal_early_retirement_reduction': 0.00
		};
		let respondents = [
			new Respondent(mockRespondent),
			new Respondent(mockRespondent)
		];
		let mockRecord = {
			'person_id': 1,
			'year_of_birth': 1954,
			'earliest_retirement_age': 62,
			'normal_retirement_age': 66,
			'average_indexed_monthly_covered_earning': {'amount': 1071.43},
			'basic_primary_insurance_amount': {'amount': 839.30},
			'wep_primary_insurance_amount': {'amount': 411.30},
			'average_indexed_monthly_non_covered_earning': {'amount': 2380.95},
			'monthly_non_covered_pension': {'amount': 1595.24},
			'wep_reduction': {'amount': 428.00},
			'final_primary_insurance_amount': {'amount': 411.30},
			'delay_retirement_credit': 0.00,
			'early_retirement_reduction': 0.00,
			'benefit': {'amount': 411.30},
			'government_pension_offset': {'amount': 1063.49},
			'spousal_insurance_benefit': {'amount': 0.00},
			'survivor_insurance_benefit': {'amount': 355.01}
		};
		let records = [new Record(mockRecord)];
		
		nanbcServiceSpy.summary.and.returnValue(records);
		nanbcServiceSpy.summary(respondents).subscribe(response => {
			expect(response).toBe(records, 'should return expected records')
		}, fail);
	});
});

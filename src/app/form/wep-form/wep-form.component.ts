import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { QuestionService } from '../../shared/question.service';
import { QuestionControlService } from '../../shared/question-control.service';
import { BenefitRuleService } from '../../benefit-rule.service';

import { FormComponent } from '../form.component';

@Component({
	selector: 'windfall-elimination-pension-form',
	templateUrl: '../form.component.html',
	styleUrls: ['../form.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [ BenefitRuleService ]
})
export class WindfallEliminationPensionFormComponent extends FormComponent implements OnInit {

	constructor(protected fb: FormBuilder, 
		protected questionService: QuestionService, 
		protected qcs: QuestionControlService,
		protected benefitRuleService: BenefitRuleService,
		protected router: Router) {
		super(fb, questionService, qcs, benefitRuleService, router);
	}

	ngOnInit() {
		super.ngOnInit()
		console.log('w')
	}
}

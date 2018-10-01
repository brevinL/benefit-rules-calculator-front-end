import { Component, Input } from '@angular/core';
import { FormGroup, FormControl }        from '@angular/forms';

import { QuestionBase }     from '../shared/question-base';

@Component({
	selector: 'form-question',
	templateUrl: './form-question.component.html',
	styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent {
	@Input() question: QuestionBase<any>;
	@Input() form: FormGroup;

	get questionCtrl(): FormControl { return this.form.get(this.question.key) as FormControl; }
	get isValid(): boolean { return this.questionCtrl.valid; }
	isEmpty(value): boolean { return value == undefined || value == null}
}
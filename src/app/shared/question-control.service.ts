import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
	constructor() { }

	toFormGroup(questions: QuestionBase<any>[]) {
		let group: any = {};

		questions.forEach(question => {
			group[question.key] = new FormControl(question.value || '', question.required? [Validators.required]: [])
		});
		return new FormGroup(group);
	}
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
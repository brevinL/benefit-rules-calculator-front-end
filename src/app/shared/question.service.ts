import { Injectable }       from '@angular/core';
import { QuestionBase }     from './question-base';
import { NumberQuestion } from './question-number';
import { CurrencyQuestion } from './question-currency';

// mocked QuestionService
@Injectable()
export class QuestionService {

	// TODO: get from a remote source of question metadata
	// TODO: make asynchronous
	get questions(): QuestionBase<number>[] {

		let questions: QuestionBase<number>[] = [
			new CurrencyQuestion({
				key: 'basic_primary_insurance_amount',
				value: '839.00',
				label: 'Primary Insurance Amount',
				required: true,
				order: 1
			}),
			new CurrencyQuestion({
				key: 'monthly_non_covered_pension',
				value: '1595.00',
				label: 'Monthly Non-Covered Pension',
				required: true,
				order: 2
			})
		];

		return questions.sort((a, b) => a.order - b.order);
	}
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
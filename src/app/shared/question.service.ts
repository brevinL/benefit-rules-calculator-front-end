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
			new NumberQuestion({
				key: 'years_of_covered_earnings',
				value: '15',
				label: 'Years of Covered Earnings',
				required: true,
				order: 1
			}),
			new CurrencyQuestion({
				key: 'annual_covered_earning',
				value: '30000.00',
				label: 'Annual Covered Earnings',
				required: true,
				order: 2
			}),
			new NumberQuestion({
				key: 'years_of_non_covered_earnings',
				value: '25',
				label: 'Years of Non-Covered Earnings',
				required: true,
				order: 3
			}),
			new CurrencyQuestion({
				key: 'annual_non_covered_earning',
				value: '40000.00',
				label: 'Annual Non-Covered Earnings',
				required: true,
				order: 4
			}),
			// new NumberQuestion({
			// 	key: 'isEarningsForSuperAIME',
			// 	label: 'Combine Covered and Non-Covered Work Year Earnings for Super AIME',
			// 	required: true,
			// 	order: 5
			// }),
			new NumberQuestion({
				key: 'fraction_of_non_covered_aime_to_non_covered_pension',
				value: '0.67',
				label: 'Fraction Of Non-Covered AIME Converted to Non-Covered Pension',
				required: true,
				order: 6,
				limits: [0, 100]
			}),
			new NumberQuestion({
				key: 'early_retirement_reduction',
				value: '0.00',
				label: 'Early Retirement Reduction (ERR) for Worker Benefit',
				required: true,
				order: 7
			}),
			new NumberQuestion({
				key: 'delay_retirement_credit',
				value: '0.00',
				label: 'Delayed Retirement Credit (DRC)',
				required: true,
				order: 10
			}),
			new NumberQuestion({
				key: 'survivor_early_retirement_reduction',
				value: '0.00',
				label: 'Early Retirement Reduction (ERR) for Survivor Benefit',
				required: true,
				order: 9
			}),
			new NumberQuestion({
				key: 'spousal_early_retirement_reduction',
				value: '0.00',
				label: 'Early Retirement Reduction (ERR) for Spousal Benefit',
				required: true,
				order: 8
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
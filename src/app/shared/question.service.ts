import { Injectable }       from '@angular/core';
import { QuestionBase }     from './question-base';
import { NumberQuestion } from './question-number';
import { CurrencyQuestion } from './question-currency';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class QuestionService {
	filter: string = '';

	constructor(
		private router: Router, 
		private activatedRoute: ActivatedRoute) {}

	setFilter() {
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => this.activatedRoute),
			map((route) => {
			while (route.firstChild) route = route.firstChild;
			return route;
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data)
		).subscribe(data => this.filter = data.filter);
	}
	
	// TODO: get from a remote source of question metadata
	// TODO: make asynchronous
	get questions(): QuestionBase<number>[] {
		let questions: QuestionBase<number>[] = [
			new CurrencyQuestion({
				key: 'basic_primary_insurance_amount',
				value: '',
				label: 'Primary Insurance Amount',
				required: true,
				order: 1,
				min: 0
			}),
			new CurrencyQuestion({
				key: 'monthly_non_covered_pension',
				value: '',
				label: 'Monthly Non-Covered Pension',
				required: true,
				order: 2,
				min: 0
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
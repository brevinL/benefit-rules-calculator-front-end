import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { QuestionBase } from './question-base';
import { NumberQuestion } from './question-number';
import { CurrencyQuestion } from './question-currency';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

const headersConfig = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};
const API_URL = environment.api_url;

@Injectable()
export class QuestionService {
	private url: string = `api/benefit-rule`;
	filter: string;

	constructor(
		private router: Router, 
		private activatedRoute: ActivatedRoute,
		private http: HttpClient) {}

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
	get questions(): Observable<QuestionBase<number>[]> {
		let url = `${API_URL}/${this.url}/questions/` + (this.filter? '?benefit-rule=' + this.filter : '');
		return this.http.get(url, headersConfig)
			.pipe(
				map((response: QuestionBase<number>[]) => {
					let questions = response.map(question => {
						switch(question.controlType) {
							case 'number': 
								return new NumberQuestion(question); 
							case 'currency':
								return new CurrencyQuestion(question);
							default:
								return new QuestionBase<number>(question);
						}
					});
					return questions.sort((a, b) => a.order - b.order);
				}),
				catchError(this.handleError<QuestionBase<number>[]>('questions'))
			);
	}

	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	/** Log a HeroService message with the MessageService */
	private log(message: string) {
		//this.messageService.add('HeroService: ' + message);
	}
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
import { Injectable, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Respondent, IRelationship, Relationship, IRecord, Record, IDetailRecord, DetailRecord } from './models';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

const headersConfig = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

const API_URL = environment.api_url;

@Injectable()
export class BenefitRuleService {
	private url: string = `api/benefit-rule`;

	constructor(private http: HttpClient) {}

	addRelationship(relationships: Relationship): Observable<Relationship> {
		let request = JSON.stringify(relationships);
		return this.http.post(`${API_URL}/${this.url}/relationship/`, request, headersConfig)
			.pipe(
				map((response: IRelationship) => new Relationship(response)),
				catchError(this.handleError<Relationship>('addRelationship'))
			);
	}

	getRelationship(id: number): Observable<Relationship> {
		return this.http.get(`${API_URL}/${this.url}/relationship/${id}/`, headersConfig)
			.pipe(
				map((response: IRelationship) => new Relationship(response)),
				catchError(this.handleError<Relationship>('getRelationship'))
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

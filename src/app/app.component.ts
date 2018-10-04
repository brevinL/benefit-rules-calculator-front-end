import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter, map, switchMap, mergeMap, catchError } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.getTitle();
	}

	getTitle() {
		//redunated code
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => this.activatedRoute),
			map((route) => {
				while (route.firstChild) route = route.firstChild;
				return route;
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data)
		).subscribe(data => this.title = data.title);
	}
}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title: string = 'Non-Covered Earnings Offset and Non-Covered Dual Entitlement Benefit Calculations';

	constructor(private router: Router) {}
}

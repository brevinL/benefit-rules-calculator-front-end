import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { DetailRecord } from '../models';
import { CalculatorService } from '../calculator.service';

@Component({
	selector: 'detail-record',
	templateUrl: './detail-record.component.html',
	styleUrls: ['./detail-record.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class DetailRecordComponent implements OnInit {
	@Input() respondent_id: number;
	detail_record: DetailRecord;

	constructor(private calculatorService: CalculatorService) { }

	ngOnInit() {
		this.calculatorService.stepByStep(this.respondent_id)
			.subscribe(detail_record => this.detail_record = detail_record);
	}
}

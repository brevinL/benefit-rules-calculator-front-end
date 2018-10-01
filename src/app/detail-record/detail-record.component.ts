import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { DetailRecord } from '../models';
import { BenefitRuleService } from '../benefit-rule.service';

@Component({
	selector: 'detail-record',
	templateUrl: './detail-record.component.html',
	styleUrls: ['./detail-record.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class DetailRecordComponent implements OnInit {
	@Input() respondent_id: number;
	detail_record: DetailRecord;
	config = {
		'config': {
				'partial_update': true,
				'non_covered_earning_available': false,
				'covered_earning_available': false
			}
		}

	constructor(private benefitRuleService: BenefitRuleService) { }

	ngOnInit() {
		this.benefitRuleService.getDetailRecord(this.respondent_id, this.config)
			.subscribe(detail_record => {
				this.detail_record = detail_record;
			})
	}
}

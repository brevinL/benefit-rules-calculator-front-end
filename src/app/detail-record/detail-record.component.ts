import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { DetailRecord } from '../models';
import { BenefitRuleService } from '../benefit-rule.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'detail-record',
	templateUrl: './detail-record.component.html',
	styleUrls: ['./detail-record.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class DetailRecordComponent implements OnInit, OnDestroy {
	@Input() respondent_id: number;
	detail_record: DetailRecord;
	busy: Subscription;
	config = {
		'config': {
				'partial_update': true,
				'non_covered_earning_available': false,
				'covered_earning_available': false
			}
		}

	constructor(private benefitRuleService: BenefitRuleService) { }

	ngOnInit() {
		this.busy = this.benefitRuleService.getDetailRecord(this.respondent_id, this.config)
			.subscribe(detail_record => {
				this.detail_record = detail_record;
			})
	}

	ngOnDestroy() {
		if(this.busy != null) { this.busy.unsubscribe(); }
	}
}

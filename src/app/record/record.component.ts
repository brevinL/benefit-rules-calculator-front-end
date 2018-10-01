import { Component, Input, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Record, Money } from '../models';
import { BenefitRuleService } from '../benefit-rule.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.css'],
	providers: [CurrencyPipe],
	encapsulation: ViewEncapsulation.None
})
export class RecordComponent implements OnInit, OnDestroy {
	@Input() respondent_id: number;
	record: Record;
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
		this.busy = this.benefitRuleService.getRecord(this.respondent_id, this.config)
			.subscribe(record => {
				this.record = record;
			})
	}

	ngOnDestroy() {
		if(this.busy != null) { this.busy.unsubscribe(); }
	}
}
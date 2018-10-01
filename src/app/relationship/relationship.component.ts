import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import { CurrencyPipe, Location } from '@angular/common';
import { Router } from '@angular/router';
import { Respondent, Record, DetailRecord, Relationship } from '../models';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BenefitRuleService } from '../benefit-rule.service';

@Component({
	selector: 'relationship',
	templateUrl: './relationship.component.html',
	styleUrls: ['./relationship.component.css'],
	providers: [CurrencyPipe],
	encapsulation: ViewEncapsulation.None
})
export class RelationshipComponent implements OnInit {
	relationship: Relationship;
	state: string = 'summary';
	private selectedId: number;

	constructor(
		private benefitRuleService: BenefitRuleService,
    	private route: ActivatedRoute,
    	private location: Location,
    	private router: Router) { }

	ngOnInit() {
		let relationship_id: number = +this.route.snapshot.paramMap.get('relationship');

		this.benefitRuleService.getRelationship(relationship_id)
			.subscribe(relationship => {
				this.relationship = relationship;
			});
	}

	goBack() {
		this.location.back();
	}
}
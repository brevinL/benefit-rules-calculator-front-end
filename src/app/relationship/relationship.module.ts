import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BenefitRuleService } from '../benefit-rule.service';

import { RecordModule } from '../record/record.module';
import { DetailRecordModule } from '../detail-record/detail-record.module';

import { RelationshipRoutingModule } from './relationship-routing.module';
import { RelationshipComponent } from './relationship.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RelationshipRoutingModule,
		NgbModule,
		RecordModule,
		DetailRecordModule
	],
	declarations: [ 
		RelationshipComponent
	],
	exports: [ RelationshipComponent ],
	providers: [ BenefitRuleService ]
})
export class RelationshipModule { }

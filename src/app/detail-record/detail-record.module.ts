import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRecordComponent } from './detail-record.component';
import { DetailRecordRoutingModule } from './detail-record-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		DetailRecordRoutingModule,
		NgbModule
	],
	declarations: [DetailRecordComponent],
	exports: [DetailRecordComponent]
})
export class DetailRecordModule { }

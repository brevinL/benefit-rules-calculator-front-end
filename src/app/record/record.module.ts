import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordComponent } from './record.component';
import { RecordRoutingModule } from './record-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBusyModule } from 'ng-busy';

@NgModule({
	imports: [
		CommonModule,
		RecordRoutingModule,
		NgbModule,
		NgBusyModule
	],
	declarations: [RecordComponent],
	exports: [RecordComponent]
})
export class RecordModule { }

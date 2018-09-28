import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form.component';
import { CalculatorService } from '../calculator.service';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [ 
		CommonModule,
		SharedModule,
		FormsModule, 
		ReactiveFormsModule,
		FormRoutingModule,
		NgbModule
	],
	exports: [ FormComponent ],
	declarations: [ FormComponent ],
	providers: [ 
		CalculatorService, 
		QuestionService, 
		QuestionControlService 
	]
})
export class FormModule { }

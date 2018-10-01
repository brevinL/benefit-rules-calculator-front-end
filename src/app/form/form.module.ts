import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form.component';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';
import { FormQuestionModule } from '../form-question/form-question.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBusyModule } from 'ng-busy';

@NgModule({
	imports: [ 
		CommonModule,
		SharedModule,
		FormsModule, 
		ReactiveFormsModule,
		FormRoutingModule,
		NgbModule,
		FormQuestionModule,
		NgBusyModule
	],
	exports: [ FormComponent ],
	declarations: [ FormComponent ],
	providers: [ 
		QuestionService, 
		QuestionControlService 
	]
})
export class FormModule { }

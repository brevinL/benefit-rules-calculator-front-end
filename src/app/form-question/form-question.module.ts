import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormQuestionComponent } from './form-question.component';
import { SharedModule } from '../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
	imports: [ 
		CommonModule,
		SharedModule,
		FormsModule, 
		ReactiveFormsModule,
		NgbModule,
		CustomFormsModule
	],
	exports: [ FormQuestionComponent ],
	declarations: [ FormQuestionComponent ]
})
export class FormQuestionModule { }

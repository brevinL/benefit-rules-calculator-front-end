import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from '../form-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormModule } from '../form.module';
import { WindfallEliminationPensionFormComponent } from './wep-form.component';
import { QuestionService } from '../../shared/question.service';
import { QuestionControlService } from '../../shared/question-control.service';
import { FormQuestionModule } from '../../form-question/form-question.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBusyModule } from 'ng-busy';

@NgModule({
	imports: [ 
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		FormQuestionModule,
		FormModule
	],
	exports: [ WindfallEliminationPensionFormComponent ],
	declarations: [ WindfallEliminationPensionFormComponent ],
	providers: [ 
		QuestionService, 
		QuestionControlService 
	]
})
export class WindfallEliminationPensionFormModule { }

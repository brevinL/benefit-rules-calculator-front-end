import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormQuestionComponent } from './form-question.component';

const routes: Routes = [
  {
    path: '',
    component: FormQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormQuestionRoutingModule { }
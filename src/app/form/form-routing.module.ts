import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
		{ 
			path:'government-pension-offset', 
			loadChildren: 'app/form/gpo-form/gpo-form.module#GovernmentPensionOffsetFormModule' 
		},
		{ 
			path:'windfall-elimination-pension', 
			loadChildren: 'app/form/wep-form/wep-form.module#WindfallEliminationPensionFormModule' 
		}
	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
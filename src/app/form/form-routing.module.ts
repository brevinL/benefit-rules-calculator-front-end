import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
    	{
    		path: 'government-pension-offset',
    		component: FormComponent,
        data: { filter: 'government-pension-offset' }
    	},
    	{
    		path: 'windfall-elimination-provision',
    		component: FormComponent,
        data: { filter: 'windfall-elimination-provision' }
    	},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
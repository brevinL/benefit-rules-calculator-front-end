import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: '',
    children: [
    	{
    		path: 'government-pension-offset',
    		component: FormComponent,
        data: { 
          title: 'Government Pension Offset Calculator',
          filter: 'government-pension-offset'
        }
    	},
    	{
    		path: 'windfall-elimination-provision',
    		component: FormComponent,
        data: { 
          title: 'Windfall Elimination Provision Calculator',
          filter: 'windfall-elimination-provision' 
        }
    	},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
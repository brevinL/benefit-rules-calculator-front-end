import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailRecordComponent } from './detail-record.component';

const routes: Routes = [
  {
    path: '',
    component: DetailRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRecordRoutingModule { }
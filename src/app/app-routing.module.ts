import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/form', pathMatch: 'full' },
	{ 
		path: 'form', 
		loadChildren: 'app/form/form.module#FormModule',
	},
	{ 
		path: 'record', 
		loadChildren: 'app/relationship/relationship.module#RelationshipModule', 
	},
	{ 
		path: '**', 
		loadChildren: 'app/page-not-found/page-not-found.module#PageNotFoundModule'
	}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

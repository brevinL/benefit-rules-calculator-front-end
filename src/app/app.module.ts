import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotkeyModule } from 'angular2-hotkeys';

import { FormModule } from './form/form.module';
import { RelationshipModule } from './relationship/relationship.module';

@NgModule({
	declarations: [ 
		AppComponent
	],
	imports: [ 
		HttpClientModule,
		HttpClientXsrfModule.withOptions({
			cookieName: 'csrftoken',
			headerName: 'X-CSRFToken',
		}),
		AppRoutingModule, 
		BrowserModule, 
		NgbModule.forRoot(),
		HotkeyModule.forRoot(),
		
		FormModule	],
	providers: [ ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

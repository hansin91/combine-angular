import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { App1RoutingModule } from './app1-routing.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

@NgModule({
	declarations: [ View1Component, View2Component, NavComponent ],
	imports: [ App1RoutingModule ]
})
export class App1SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AppModule,
			providers: []
		};
	}
}

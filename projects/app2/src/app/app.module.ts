import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { View1Component } from './view1/view1.component';
import { App2RoutingModule } from './app2-routing.module';

@NgModule({
	declarations: [ View2Component, NavComponent, View1Component ],
	imports: [ App2RoutingModule ]
})
export class App2SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AppModule,
			providers: []
		};
	}
}

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: 'one',
		component: View1Component
	},
	{
		path: 'two',
		component: View2Component
	},
	{
		path: '',
		redirectTo: '/app2/one'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class App2RoutingModule {}

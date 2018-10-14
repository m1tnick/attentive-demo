import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';

const attentiveRoutes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'dogs',
		loadChildren: './dog/dog.module#DogModule'
	},
	{
		path: 'cats',
		component: CatComponent
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(attentiveRoutes)],
	exports: [RouterModule]
})
export class AttentiveRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogComponent } from './dog.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { PokeDogComponent } from './pokedog/pokedog.component';


const dogRoutes: Routes = [
	{
		path: '',
		component: DogComponent,
		children: [
			{ path: '', redirectTo: 'dogsList' },
			{
				path: 'dogsList',
				component: DogListComponent,
			},
			{
				path: 'pokeDog',
				component: PokeDogComponent,
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(dogRoutes)],
	exports: [RouterModule]
})
export class DogRoutingModule {}

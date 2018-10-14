import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/model/MenuItem';


@Component({
	selector: 'att-dog',
	templateUrl: './dog.component.html'
})
export class DogComponent implements OnInit {
	items: MenuItem[];

	constructor() {}

	ngOnInit() {
        this.items = [
            { label: 'DogList', routerLink: '/dogs/dogsList' },
           // { label: 'PokeDog', routerLink: '/dog/pokeDog' }
        ];
	}
}

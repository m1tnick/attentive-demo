import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/shared/model/MenuItem';

@Component({
	selector: 'sub-menu',
	templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {
	@Input() items: MenuItem[];

	constructor() {}

	ngOnInit() {}
}

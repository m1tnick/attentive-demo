import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/model/MenuItem';

@Component({
	selector: 'nav-menu',
	templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit {
	items: MenuItem[];

	constructor() {}

	ngOnInit() {
		this.items = [
			{ icon: 'fa fa-home fa-2x pull-left', routerLink: '/home', routerLinkActiveOptions: { exact: true } },
			{ label: 'Dogs', routerLink: '/dogs' },
			{ label: 'Cats', routerLink: '/cats' }
		];
	}
}

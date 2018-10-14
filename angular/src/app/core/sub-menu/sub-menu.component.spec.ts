import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'rxjs/add/observable/of';

import { SubMenuComponent } from './sub-menu.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
	selector: 'lib-mock',
	template: '<p>mock</p>'
})
class MockComponent {}

describe('SubMenuComponent', () => {
	let component: SubMenuComponent;
	let fixture: ComponentFixture<SubMenuComponent>;

	const routes = [{ path: '', component: MockComponent }];

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterModule.forRoot(routes), MatTabsModule],
			declarations: [SubMenuComponent, MockComponent],
			providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SubMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

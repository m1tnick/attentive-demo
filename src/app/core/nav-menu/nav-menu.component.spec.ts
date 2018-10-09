import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavMenuComponent } from './nav-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';


describe('NavMenuComponent', () => {
	let component: NavMenuComponent;
	let fixture: ComponentFixture<NavMenuComponent>;

	const routes = [{ path: '', component: HomeComponent }];

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			imports: [SharedModule, RouterModule.forRoot(routes)],
			declarations: [NavMenuComponent],
			providers: []
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

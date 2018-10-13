import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorModalComponent } from './error-modal.component';
import { ErrorsService } from '../errors-service/errors.service';
import { MockErrorsService } from '../mocks/mock-errors-service';


describe('ErrorModalComponent', () => {
	let component: ErrorModalComponent;
	let fixture: ComponentFixture<ErrorModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [{ provide: ErrorsService, useClass: MockErrorsService }],
			declarations: [ErrorModalComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ErrorModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

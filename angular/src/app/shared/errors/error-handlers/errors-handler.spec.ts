import { inject, TestBed } from '@angular/core/testing';
import { ErrorsHandler } from './errors-handler';

describe('ErrorsHandler', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ErrorsHandler]
		});
	});

	it('should be created', inject([ErrorsHandler], (service: ErrorsHandler) => {
		expect(service).toBeTruthy();
	}));
});
